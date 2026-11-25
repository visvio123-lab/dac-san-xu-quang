/**
 * filter.js — Bộ lọc kép (theo Nhóm món + theo Khu vực địa lý)
 * và tìm kiếm thông minh hỗ trợ tiếng Việt không dấu.
 */
window.XQ = window.XQ || {};

XQ.Filter = (function () {
  var state = {
    category: 'all',
    region: 'all',
    query: ''
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
    var s = customState || state;
    var nq = XQ.normalize(s.query);
    return (XQ.dishes || []).filter(function (dish) {
      var okCat = s.category === 'all' || dish.category === s.category;
      var okReg = s.region === 'all' || (dish.regions || []).indexOf(s.region) !== -1;
      var okQuery = matchesQuery(dish, nq);
      return okCat && okReg && okQuery;
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

  function renderStatus() {
    if (!els.statusCount || !els.chips) return;
    var total = (XQ.dishes || []).length;
    els.statusCount.innerHTML =
      'Hiển thị <strong>' + currentResults.length + '</strong> / ' + total + ' đặc sản Quảng Ngãi';

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
    if (state.query.trim()) {
      chips.push('<span class="filter-chip">Từ khóa: “' + XQ.escapeHtml(state.query.trim()) + '” <button type="button" data-clear="query" aria-label="Xóa từ khóa">&times;</button></span>');
    }
    if (chips.length) {
      chips.push('<button type="button" class="filter-reset" data-clear="all">Xóa tất cả bộ lọc</button>');
    }
    els.chips.innerHTML = chips.join('');
  }

  function renderGrid() {
    if (!els.grid) return;
    currentResults = filterDishes();

    if (!currentResults.length) {
      els.grid.innerHTML =
        '<div class="empty-state">' +
          '<h3>Chưa tìm thấy món phù hợp</h3>' +
          '<p>Thử đổi khu vực, chọn nhóm món khác hoặc nhập từ khóa ngắn hơn (ví dụ: <em>don</em>, <em>banh xeo</em>, <em>ly son</em>).</p>' +
          '<button type="button" class="btn btn--primary btn--sm" data-clear="all">Xem lại toàn bộ ' + (XQ.dishes || []).length + ' đặc sản</button>' +
        '</div>';
    } else {
      els.grid.innerHTML = currentResults.map(function (dish) {
        return XQ.renderDishCard(dish, { basePath: '' });
      }).join('');
    }

    renderCategoryTabs();
    syncRegionUI();
    renderStatus();

    if (els.searchClear) {
      els.searchClear.classList.toggle('is-visible', Boolean(state.query.trim()));
    }
  }

  function init() {
    els.grid = document.getElementById('dishes-grid');
    els.tabs = document.getElementById('category-tabs');
    els.regionSelect = document.getElementById('region-filter');
    els.searchInput = document.getElementById('dish-search');
    els.searchClear = document.getElementById('dish-search-clear');
    els.statusCount = document.getElementById('filter-count');
    els.chips = document.getElementById('filter-chips');

    if (!els.grid) return;

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
      if (target === 'category') state.category = 'all';
      else if (target === 'region') state.region = 'all';
      else if (target === 'query') {
        state.query = '';
        if (els.searchInput) els.searchInput.value = '';
      } else if (target === 'all') {
        state.category = 'all';
        state.region = 'all';
        state.query = '';
        if (els.searchInput) els.searchInput.value = '';
      }
      renderGrid();
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
