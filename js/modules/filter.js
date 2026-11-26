/**
 * filter.js — Bộ lọc kép (theo Nhóm món + theo Khu vực địa lý)
 * và tìm kiếm thông minh hỗ trợ tiếng Việt không dấu.
 */
window.XQ = window.XQ || {};

XQ.Filter = (function () {
  var PAGE_SIZE = 20;
  var state = {
    category: 'all',
    region: 'all',
    query: '',
    best: false,
    saved: false,
    visibleCount: PAGE_SIZE
  };

  var currentResults = [];
  var els = {};

  function matchesQuery(dish, normalizedQuery) {
    if (!normalizedQuery) return true;
    var haystack = XQ.normalize([
      dish.name,
      dish.area,
      dish.short,
      dish.subgroup || '',
      (dish.tags || []).join(' '),
      (dish.ingredients || []).join(' ')
    ].join(' '));

    var terms = normalizedQuery.split(/\s+/).filter(Boolean);
    return terms.every(function (term) {
      return haystack.indexOf(term) !== -1;
    });
  }

  function filterDishes(customState) {
    var s = customState ? Object.assign({ best: state.best, saved: state.saved }, customState) : state;
    var nq = XQ.normalize(s.query);
    return (XQ.dishes || []).filter(function (dish) {
      var okCat = s.category === 'all' || dish.category === s.category;
      var okReg = s.region === 'all' || (dish.regions || []).indexOf(s.region) !== -1;
      var okQuery = matchesQuery(dish, nq);
      var okBest = !s.best || Boolean(dish.bestseller);
      var okSaved = !s.saved || Boolean(XQ.Favorites && XQ.Favorites.has(dish.id));
      return okCat && okReg && okQuery && okBest && okSaved;
    });
  }

  function renderCategoryTabs() {
    if (!els.tabs) return;
    var allCount = filterDishes({ category: 'all', region: state.region, query: state.query }).length;
    var html =
      '<button type="button" class="cat-tab' + (state.category === 'all' ? ' is-active' : '') + '" data-cat="all" role="tab" aria-selected="' + (state.category === 'all') + '">' +
        'Tất cả món <span class="cat-tab__count">' + allCount + '</span>' +
      '</button>';

    (XQ.categories || []).forEach(function (cat) {
      var count = filterDishes({ category: cat.id, region: state.region, query: state.query }).length;
      var active = state.category === cat.id;
      html +=
        '<button type="button" class="cat-tab' + (active ? ' is-active' : '') + '" data-cat="' + XQ.escapeHtml(cat.id) + '" role="tab" aria-selected="' + active + '">' +
          XQ.escapeHtml(cat.name) + ' <span class="cat-tab__count">' + count + '</span>' +
        '</button>';
    });

    els.tabs.innerHTML = html;
  }

  function syncRegionUI() {
    if (els.regionSelect) {
      els.regionSelect.value = state.region;
    }
    document.querySelectorAll('[data-region-card]').forEach(function (card) {
      var isSel = card.getAttribute('data-region-card') === state.region;
      card.classList.toggle('is-selected', isSel);
    });
  }

  function syncQuickUI() {
    if (els.quickBest) {
      els.quickBest.classList.toggle('is-active', state.best);
      els.quickBest.setAttribute('aria-pressed', String(state.best));
    }
    if (els.quickSaved) {
      els.quickSaved.classList.toggle('is-active', state.saved);
      els.quickSaved.setAttribute('aria-pressed', String(state.saved));
    }
  }

  function renderStatus() {
    if (!els.statusCount || !els.chips) return;
    var total = (XQ.dishes || []).length;
    var shown = Math.min(state.visibleCount, currentResults.length);
    if (currentResults.length < total) {
      els.statusCount.innerHTML =
        'Hiển thị <strong>' + shown + '</strong> / <strong>' + currentResults.length + '</strong> món phù hợp (trong tổng ' + total + ' đặc sản)';
    } else {
      els.statusCount.innerHTML =
        'Đang hiển thị <strong>' + shown + '</strong> / ' + total + ' đặc sản Quảng Ngãi';
    }

    var chips = [];
    if (state.category !== 'all') {
      var cat = XQ.getCategory(state.category);
      if (cat) {
        chips.push('<span class="filter-chip">Nhóm: ' + XQ.escapeHtml(cat.short) + ' <button type="button" data-clear="category" aria-label="Bỏ lọc nhóm">&times;</button></span>');
      }
    }
    if (state.region !== 'all') {
      var reg = XQ.getRegion(state.region);
      if (reg) {
        chips.push('<span class="filter-chip">Khu vực: ' + XQ.escapeHtml(reg.short) + ' <button type="button" data-clear="region" aria-label="Bỏ lọc khu vực">&times;</button></span>');
      }
    }
    if (state.best) {
      chips.push('<span class="filter-chip">Chỉ Best-seller <button type="button" data-clear="best" aria-label="Bỏ lọc Best-seller">&times;</button></span>');
    }
    if (state.saved) {
      chips.push('<span class="filter-chip">Món đã lưu <button type="button" data-clear="saved" aria-label="Bỏ lọc món đã lưu">&times;</button></span>');
    }
    if (state.query.trim()) {
      chips.push('<span class="filter-chip">Từ khóa: “' + XQ.escapeHtml(state.query.trim()) + '” <button type="button" data-clear="query" aria-label="Xóa từ khóa">&times;</button></span>');
    }
    if (chips.length) {
      chips.push('<button type="button" class="filter-reset" data-clear="all">Xóa tất cả bộ lọc</button>');
    }
    els.chips.innerHTML = chips.join('');
  }

  function renderLoadMore() {
    if (!els.loadMore) return;
    var totalMatched = currentResults.length;
    if (totalMatched <= PAGE_SIZE) {
      els.loadMore.innerHTML = '';
      return;
    }

    var remaining = totalMatched - state.visibleCount;
    if (remaining > 0) {
      var nextBatch = Math.min(PAGE_SIZE, remaining);
      els.loadMore.innerHTML =
        '<div class="load-more-box">' +
          '<button type="button" class="btn btn--secondary load-more-btn" data-load-more="step">' +
            'Xem thêm ' + nextBatch + ' món tiếp <span class="load-more-btn__sub">(còn ' + remaining + ' món)</span>' +
          '</button>' +
          (remaining > PAGE_SIZE
            ? '<button type="button" class="btn btn--link load-more-all" data-load-more="all">Hoặc xem toàn bộ ' + totalMatched + ' món</button>'
            : '') +
        '</div>';
    } else {
      els.loadMore.innerHTML =
        '<div class="load-more-box">' +
          '<span class="load-more-done">Đã hiển thị đầy đủ ' + totalMatched + ' đặc sản</span>' +
          '<button type="button" class="btn btn--link" data-load-more="collapse">Thu gọn về ' + PAGE_SIZE + ' món ↑</button>' +
        '</div>';
    }
  }

  function renderGrid(keepPage) {
    if (!els.grid) return;
    if (!keepPage) state.visibleCount = PAGE_SIZE;
    currentResults = filterDishes();

    if (!currentResults.length) {
      els.grid.innerHTML =
        '<div class="empty-state">' +
          '<h3>Chưa tìm thấy món phù hợp</h3>' +
          '<p>Thử đổi khu vực, chọn nhóm món khác hoặc nhập từ khóa ngắn hơn (ví dụ: <em>don</em>, <em>banh xeo</em>, <em>ly son</em>).</p>' +
          '<button type="button" class="btn btn--primary btn--sm" data-clear="all">Xem lại toàn bộ ' + (XQ.dishes || []).length + ' đặc sản</button>' +
        '</div>';
    } else {
      var visibleItems = currentResults.slice(0, state.visibleCount);
      els.grid.innerHTML = visibleItems.map(function (dish) {
        return XQ.renderDishCard(dish, { basePath: '' });
      }).join('');
    }

    renderLoadMore();
    renderCategoryTabs();
    syncRegionUI();
    syncQuickUI();
    renderStatus();

    if (els.searchClear) {
      els.searchClear.classList.toggle('is-visible', Boolean(state.query.trim()));
    }
  }

  function init() {
    els.grid = document.getElementById('dishes-grid');
    els.loadMore = document.getElementById('dishes-load-more');
    els.tabs = document.getElementById('category-tabs');
    els.regionSelect = document.getElementById('region-filter');
    els.searchInput = document.getElementById('dish-search');
    els.searchClear = document.getElementById('dish-search-clear');
    els.statusCount = document.getElementById('filter-count');
    els.chips = document.getElementById('filter-chips');

    if (!els.grid) return;

    els.quickBest = document.getElementById('quick-best');
    els.quickSaved = document.getElementById('quick-saved');
    if (els.quickBest) {
      els.quickBest.addEventListener('click', function () {
        state.best = !state.best;
        renderGrid();
      });
    }
    if (els.quickSaved) {
      els.quickSaved.addEventListener('click', function () {
        state.saved = !state.saved;
        renderGrid();
      });
    }

    // Đổ danh sách 5 khu vực vào select
    if (els.regionSelect) {
      var opts = '<option value="all">Tất cả khu vực Quảng Ngãi</option>';
      (XQ.regions || []).forEach(function (r) {
        opts += '<option value="' + XQ.escapeHtml(r.id) + '">' + XQ.escapeHtml(r.name) + '</option>';
      });
      els.regionSelect.innerHTML = opts;
      els.regionSelect.addEventListener('change', function () {
        state.region = els.regionSelect.value;
        renderGrid();
      });
    }

    // Click tab nhóm món
    if (els.tabs) {
      els.tabs.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-cat]');
        if (!btn) return;
        state.category = btn.getAttribute('data-cat');
        renderGrid();
      });
    }

    // Tìm kiếm realtime (hỗ trợ không dấu)
    if (els.searchInput) {
      els.searchInput.addEventListener('input', function () {
        state.query = els.searchInput.value;
        renderGrid();
      });
    }

    if (els.searchClear) {
      els.searchClear.addEventListener('click', function () {
        state.query = '';
        if (els.searchInput) {
          els.searchInput.value = '';
          els.searchInput.focus();
        }
        renderGrid();
      });
    }

    // Xóa chip bộ lọc / reset từ empty state
    document.addEventListener('click', function (e) {
      var clearBtn = e.target.closest('[data-clear]');
      if (!clearBtn) return;
      var target = clearBtn.getAttribute('data-clear');
      if (target === 'best') state.best = false;
      else if (target === 'saved') state.saved = false;
      else if (target === 'category') state.category = 'all';
      else if (target === 'region') state.region = 'all';
      else if (target === 'query') {
        state.query = '';
        if (els.searchInput) els.searchInput.value = '';
      } else if (target === 'all') {
        state.best = false;
        state.saved = false;
        state.category = 'all';
        state.region = 'all';
        state.query = '';
        if (els.searchInput) els.searchInput.value = '';
      }
      renderGrid();
    });

    // Xem thêm 20 món / Xem toàn bộ / Thu gọn
    if (els.loadMore) {
      els.loadMore.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-load-more]');
        if (!btn) return;
        var mode = btn.getAttribute('data-load-more');
        if (mode === 'step') {
          state.visibleCount += PAGE_SIZE;
          renderGrid(true);
        } else if (mode === 'all') {
          state.visibleCount = currentResults.length;
          renderGrid(true);
        } else if (mode === 'collapse') {
          state.visibleCount = PAGE_SIZE;
          renderGrid(true);
          var lib = document.getElementById('thu-vien-mon');
          if (lib) lib.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Khi người dùng lưu / bỏ lưu món: cập nhật lại lưới nếu đang lọc "Đã lưu"
    document.addEventListener('xq:favorites-changed', function () {
      if (state.saved) renderGrid(true);
    });

    renderGrid();
  }

  return {
    init: init,
    setCategory: function (catId) {
      state.category = catId || 'all';
      renderGrid();
    },
    setRegion: function (regionId) {
      state.region = regionId || 'all';
      renderGrid();
    },
    setQuery: function (q) {
      state.query = q || '';
      if (els.searchInput) els.searchInput.value = state.query;
      renderGrid();
    },
    getCurrentList: function () {
      return currentResults.length ? currentResults : (XQ.dishes || []);
    }
  };
})();
