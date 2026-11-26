/**
 * modal.js — Cửa sổ nổi (Modal) hiển thị đầy đủ 6 phần thông tin chi tiết món ăn
 * khi người dùng nhấn vào bất kỳ thẻ món ăn nào.
 */
window.XQ = window.XQ || {};

XQ.Modal = (function () {
  var backdrop = null;
  var currentDishId = null;
  var basePath = '';
  var lastFocusedEl = null;

  function ensureDOM() {
    if (backdrop) return;
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'dish-modal-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-labelledby', 'modal-dish-title');
    backdrop.innerHTML =
      '<div class="dish-modal">' +
        '<button type="button" class="dish-modal__close" id="modal-close-btn" aria-label="Đóng cửa sổ chi tiết">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>' +
        '</button>' +
        '<div class="dish-modal__scroll" id="modal-scroll-area">' +
          '<div class="dish-modal__hero" id="modal-hero"></div>' +
          '<div class="dish-modal__body" id="modal-body"></div>' +
        '</div>' +
        '<div class="dish-modal__footer">' +
          '<div class="dish-modal__nav">' +
            '<button type="button" class="btn btn--secondary btn--sm" id="modal-prev-btn">← Món trước</button>' +
            '<button type="button" class="btn btn--secondary btn--sm" id="modal-next-btn">Món kế tiếp →</button>' +
          '</div>' +
          '<a class="btn btn--primary btn--sm" id="modal-fullpage-link" href="#">Mở trang chi tiết đầy đủ ' + XQ.icons.arrow + '</a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(backdrop);

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) close();
    });

    document.getElementById('modal-close-btn').addEventListener('click', close);
    document.getElementById('modal-prev-btn').addEventListener('click', function () { step(-1); });
    document.getElementById('modal-next-btn').addEventListener('click', function () { step(1); });

    document.addEventListener('keydown', function (e) {
      if (!backdrop || !backdrop.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });
  }

  function getNavList() {
    if (XQ.Filter && typeof XQ.Filter.getCurrentList === 'function') {
      var list = XQ.Filter.getCurrentList();
      if (list && list.length) return list;
    }
    return XQ.dishes || [];
  }

  function step(delta) {
    var list = getNavList();
    if (!list.length) return;
    var idx = list.findIndex(function (d) { return d.id === currentDishId; });
    if (idx === -1) idx = 0;
    var nextIdx = (idx + delta + list.length) % list.length;
    open(list[nextIdx].id, basePath);
  }

  function open(dishId, pathPrefix) {
    var dish = XQ.getDish(dishId);
    if (!dish) return;
    ensureDOM();
    basePath = pathPrefix || '';
    currentDishId = dish.id;
    lastFocusedEl = document.activeElement;

    var cat = XQ.getCategory(dish.category);
    var catIcon = cat ? cat.icon : 'bowl';

    var hero = document.getElementById('modal-hero');
    hero.innerHTML =
      '<img src="' + XQ.escapeHtml(XQ.imgPath(dish.image, basePath)) + '"' +
        ' alt="' + XQ.escapeHtml(dish.name) + '"' +
        ' data-fallback-title="' + XQ.escapeHtml(dish.name) + '"' +
        ' data-fallback-sub="' + XQ.escapeHtml(dish.area) + '"' +
        ' data-fallback-icon="' + XQ.escapeHtml(catIcon) + '"' +
        ' onerror="XQ.onImgError(this)">' +
      '<div class="dish-modal__hero-grad"></div>' +
      XQ.favButton(dish.id, 'modal') +
      '<div class="dish-modal__header-overlay">' +
        '<div class="dish-modal__tags">' +
          '<span class="badge badge--category">' + XQ.icons.pin + ' ' + XQ.escapeHtml(dish.area) + '</span>' +
          (dish.bestseller ? '<span class="badge badge--bestseller">' + XQ.icons.star + ' Best-seller</span>' : '') +
        '</div>' +
        '<h2 class="dish-modal__title" id="modal-dish-title">' + XQ.escapeHtml(dish.name) + '</h2>' +
      '</div>';

    var body = document.getElementById('modal-body');
    body.innerHTML = XQ.renderDishDetailSections(dish);

    var link = document.getElementById('modal-fullpage-link');
    link.href = basePath + 'pages/chi-tiet-mon.html?id=' + encodeURIComponent(dish.id);

    var scrollArea = document.getElementById('modal-scroll-area');
    if (scrollArea) scrollArea.scrollTop = 0;

    backdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');
    document.getElementById('modal-close-btn').focus();
  }

  function close() {
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  function bindGlobalClicks(pathPrefix) {
    basePath = pathPrefix || '';
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-fav-toggle]')) return;
      var card = e.target.closest('[data-dish-id]');
      if (!card) return;
      if (e.target.closest('a')) return;
      e.preventDefault();
      open(card.getAttribute('data-dish-id'), basePath);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      if (e.target.closest('[data-fav-toggle]')) return;
      var card = e.target.closest('[data-dish-id]');
      if (!card) return;
      e.preventDefault();
      open(card.getAttribute('data-dish-id'), basePath);
    });
  }

  return {
    open: open,
    close: close,
    bindGlobalClicks: bindGlobalClicks
  };
})();
