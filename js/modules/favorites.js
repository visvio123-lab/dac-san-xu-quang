/**
 * favorites.js — "Sổ tay món muốn thử": lưu món yêu thích bằng localStorage,
 * nút tim trên thẻ món / modal / trang chi tiết, ngăn kéo danh sách và sao chép danh sách.
 */
window.XQ = window.XQ || {};

/**
 * Sao chép văn bản vào clipboard (có fallback cho trình duyệt cũ / file://).
 */
XQ.copyText = function (text) {
  return new Promise(function (resolve) {
    function fallback() {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        resolve(ok);
      } catch (e) {
        resolve(false);
      }
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { resolve(true); }, fallback);
    } else {
      fallback();
    }
  });
};

XQ.Favorites = (function () {
  var KEY = 'xq_favorites_v1';
  var list = [];
  var basePath = '';
  var drawer = null;
  var backdrop = null;
  var toastEl = null;
  var toastTimer = null;
  var countEls = [];

  function load() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(raw) ? raw.filter(function (id) { return XQ.getDish(id); }) : [];
    } catch (e) {
      return [];
    }
  }

  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { /* bỏ qua nếu bị chặn */ }
  }

  list = load();

  function has(id) { return list.indexOf(id) !== -1; }

  function showToast(message) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'xq-toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-visible'); }, 2400);
  }

  function syncButtons() {
    document.querySelectorAll('[data-fav-toggle]').forEach(function (btn) {
      var on = has(btn.getAttribute('data-fav-toggle'));
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
      var t = btn.querySelector('.fav-btn__text');
      if (t) t.textContent = on ? 'Đã lưu' : 'Lưu món';
    });
    countEls.forEach(function (el) {
      el.textContent = String(list.length);
      el.classList.toggle('is-empty', list.length === 0);
    });
  }

  function renderDrawer() {
    if (!drawer) return;
    var body = drawer.querySelector('[data-fav-body]');
    var footer = drawer.querySelector('[data-fav-footer]');
    var title = drawer.querySelector('[data-fav-count-title]');
    if (title) title.textContent = list.length + ' món đã lưu';

    if (!list.length) {
      body.innerHTML =
        '<div class="fav-empty">' +
          '<div class="fav-empty__icon">' + XQ.icons.heart + '</div>' +
          '<h3>Chưa có món nào được lưu</h3>' +
          '<p>Bấm biểu tượng trái tim trên thẻ món ăn để thêm vào danh sách món muốn thử khi đến Quảng Ngãi.</p>' +
        '</div>';
      footer.hidden = true;
      return;
    }

    footer.hidden = false;
    body.innerHTML = list.map(function (id) {
      var d = XQ.getDish(id);
      if (!d) return '';
      var cat = XQ.getCategory(d.category);
      return (
        '<div class="fav-item">' +
          '<button type="button" class="fav-item__open" data-dish-id="' + XQ.escapeHtml(d.id) + '">' +
            '<span class="fav-item__thumb">' +
              '<img src="' + XQ.escapeHtml(XQ.imgPath(d.image, basePath)) + '" alt="' + XQ.escapeHtml(d.name) + '" loading="lazy" decoding="async"' +
                ' data-fallback-title="" data-fallback-sub="" data-fallback-icon="' + XQ.escapeHtml(cat ? cat.icon : 'bowl') + '" onerror="XQ.onImgError(this)">' +
            '</span>' +
            '<span class="fav-item__info">' +
              '<span class="fav-item__name">' + XQ.escapeHtml(d.name) + '</span>' +
              '<span class="fav-item__area">' + XQ.escapeHtml(d.area) + '</span>' +
            '</span>' +
          '</button>' +
          '<button type="button" class="fav-item__remove" data-fav-toggle="' + XQ.escapeHtml(d.id) + '" aria-label="Bỏ lưu món ' + XQ.escapeHtml(d.name) + '">&times;</button>' +
        '</div>'
      );
    }).join('');
  }

  function toggle(id) {
    var dish = XQ.getDish(id);
    if (!dish) return false;
    var idx = list.indexOf(id);
    var added;
    if (idx === -1) { list.push(id); added = true; } else { list.splice(idx, 1); added = false; }
    persist();
    syncButtons();
    renderDrawer();
    showToast(added ? 'Đã lưu “' + dish.name + '” vào sổ tay' : 'Đã bỏ lưu “' + dish.name + '”');
    document.dispatchEvent(new CustomEvent('xq:favorites-changed', { detail: { id: id, saved: added } }));
    return added;
  }

  function clearAll() {
    if (!list.length) return;
    list = [];
    persist();
    syncButtons();
    renderDrawer();
    showToast('Đã xóa toàn bộ danh sách');
    document.dispatchEvent(new CustomEvent('xq:favorites-changed', { detail: { id: null, saved: false } }));
  }

  function buildShareText() {
    var lines = ['Danh sách món muốn thử – Đặc Sản Xứ Quảng:'];
    list.forEach(function (id, i) {
      var d = XQ.getDish(id);
      if (d) lines.push((i + 1) + '. ' + d.name + ' (' + d.area + ')');
    });
    var pageUrl = window.location.href.split('#')[0].split('?')[0].replace(/pages\/[^/]*$/, '');
    lines.push('', 'Xem chi tiết tại: ' + pageUrl);
    return lines.join('\n');
  }

  function openDrawer() {
    if (!drawer) return;
    renderDrawer();
    backdrop.classList.add('is-open');
    drawer.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeDrawer() {
    if (!drawer) return;
    backdrop.classList.remove('is-open');
    drawer.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  function buildDrawer() {
    backdrop = document.createElement('div');
    backdrop.className = 'fav-backdrop';
    backdrop.addEventListener('click', closeDrawer);

    drawer = document.createElement('aside');
    drawer.className = 'fav-drawer';
    drawer.setAttribute('aria-label', 'Sổ tay món muốn thử');
    drawer.innerHTML =
      '<div class="fav-drawer__head">' +
        '<div>' +
          '<div class="fav-drawer__eyebrow">Sổ tay của bạn</div>' +
          '<h2 class="fav-drawer__title">Món muốn thử</h2>' +
          '<div class="fav-drawer__count" data-fav-count-title></div>' +
        '</div>' +
        '<button type="button" class="fav-drawer__close" data-fav-close aria-label="Đóng sổ tay">&times;</button>' +
      '</div>' +
      '<div class="fav-drawer__body" data-fav-body></div>' +
      '<div class="fav-drawer__footer" data-fav-footer hidden>' +
        '<button type="button" class="btn btn--primary btn--sm" data-fav-copy>Sao chép danh sách</button>' +
        '<a class="btn btn--secondary btn--sm" href="' + basePath + 'pages/lo-trinh.html" target="_blank" rel="noopener noreferrer">Xem lộ trình gợi ý ↗</a>' +
        '<button type="button" class="btn btn--link" data-fav-clear>Xóa tất cả</button>' +
      '</div>';

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    drawer.addEventListener('click', function (e) {
      if (e.target.closest('[data-fav-close]')) { closeDrawer(); return; }
      if (e.target.closest('[data-fav-clear]')) { clearAll(); return; }
      if (e.target.closest('[data-fav-copy]')) {
        XQ.copyText(buildShareText()).then(function (ok) {
          showToast(ok ? 'Đã sao chép danh sách – dán vào Zalo/Messenger để gửi bạn bè' : 'Không sao chép được, hãy thử lại');
        });
        return;
      }
      if (e.target.closest('[data-dish-id]')) closeDrawer();
    });
  }

  function injectHeaderButton() {
    var actions = document.querySelector('.header-actions');
    if (!actions || document.getElementById('fav-open-btn')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'fav-open-btn';
    btn.className = 'fav-header-btn';
    btn.setAttribute('aria-label', 'Mở sổ tay món muốn thử');
    btn.innerHTML = XQ.icons.heart + '<span class="fav-header-btn__count" data-fav-count>0</span>';
    var toggleBtn = document.getElementById('nav-toggle');
    actions.insertBefore(btn, toggleBtn || null);
    btn.addEventListener('click', openDrawer);
  }

  function init(base) {
    basePath = base || '';
    injectHeaderButton();
    buildDrawer();
    countEls = Array.prototype.slice.call(document.querySelectorAll('[data-fav-count]'));

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-fav-toggle]');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      toggle(btn.getAttribute('data-fav-toggle'));
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) closeDrawer();
    });

    syncButtons();
    renderDrawer();
  }

  return {
    init: init,
    has: has,
    toggle: toggle,
    sync: syncButtons,
    open: openDrawer,
    close: closeDrawer,
    count: function () { return list.length; }
  };
})();
