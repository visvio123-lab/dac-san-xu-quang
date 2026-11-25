/**
 * main.js — File khởi chạy chính, kết nối dữ liệu và gắn sự kiện toàn trang
 * cho Trang chủ (index.html) và 3 trang phụ (chi-tiet-mon, khu-vuc, bai-viet).
 */
(function () {
  'use strict';

  function getParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (e) {
      return null;
    }
  }

  /* ---------------- TIỆN ÍCH CHUNG TOÀN SITE ---------------- */
  function initSharedUI(basePath) {
    var header = document.querySelector('.site-header');
    var backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle('is-scrolled', y > 16);
      if (backToTop) backToTop.classList.toggle('is-visible', y > 480);
    }, { passive: true });

    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Menu di động
    var navToggle = document.getElementById('nav-toggle');
    var mainNav = document.getElementById('main-nav');
    if (navToggle && mainNav) {
      navToggle.addEventListener('click', function () {
        var isOpen = mainNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
      });
      mainNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mainNav.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Thanh tìm kiếm nhanh trên Header
    var headerSearchForm = document.getElementById('header-search-form');
    var headerSearchInput = document.getElementById('header-search-input');
    if (headerSearchForm && headerSearchInput) {
      headerSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var q = headerSearchInput.value.trim();
        var libSection = document.getElementById('thu-vien-mon');
        if (libSection && XQ.Filter) {
          XQ.Filter.setQuery(q);
          libSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.href = basePath + 'index.html' + (q ? '?q=' + encodeURIComponent(q) : '') + '#thu-vien-mon';
        }
      });
    }

    // Liên kết nhanh nhóm món ở Footer
    document.querySelectorAll('[data-footer-cat]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var catId = link.getAttribute('data-footer-cat');
        var libSection = document.getElementById('thu-vien-mon');
        if (libSection && XQ.Filter) {
          e.preventDefault();
          XQ.Filter.setCategory(catId);
          libSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Hiệu ứng xuất hiện mượt khi cuộn trang
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }

  /* ---------------- 1. TRANG CHỦ (INDEX.HTML) ---------------- */
  function initHomePage() {
    // 1.1 Món Best-seller / Nổi bật (6 món)
    var bestGrid = document.getElementById('bestseller-grid');
    if (bestGrid) {
      var featuredDishes = (XQ.dishes || [])
        .filter(function (d) { return typeof d.featured === 'number'; })
        .sort(function (a, b) { return a.featured - b.featured; });
      bestGrid.innerHTML = featuredDishes.map(function (dish) {
        return XQ.renderDishCard(dish, { featured: true, basePath: '' });
      }).join('');
    }

    // 1.2 Khám phá theo 5 Khu vực
    var regionsGrid = document.getElementById('regions-grid');
    if (regionsGrid) {
      regionsGrid.innerHTML = (XQ.regions || []).map(function (reg) {
        var count = (XQ.dishes || []).filter(function (d) {
          return (d.regions || []).indexOf(reg.id) !== -1;
        }).length;
        return XQ.renderRegionCard(reg, count, false, '');
      }).join('');

      regionsGrid.addEventListener('click', function (e) {
        var card = e.target.closest('[data-region-card]');
        if (!card || e.target.closest('a')) return;
        var regionId = card.getAttribute('data-region-card');
        XQ.Filter.setRegion(regionId);
        var lib = document.getElementById('thu-vien-mon');
        if (lib) lib.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      regionsGrid.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        var card = e.target.closest('[data-region-card]');
        if (!card) return;
        e.preventDefault();
        var regionId = card.getAttribute('data-region-card');
        XQ.Filter.setRegion(regionId);
        var lib = document.getElementById('thu-vien-mon');
        if (lib) lib.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // 1.3 Thư viện toàn bộ đặc sản + Bộ lọc
    XQ.Filter.init();

    // 1.4 Góc Văn hóa & Làng nghề
    var storiesGrid = document.getElementById('stories-grid');
    if (storiesGrid) {
      storiesGrid.innerHTML = (XQ.stories || []).map(function (s) {
        return XQ.renderStoryCard(s, '');
      }).join('');
    }

    // 1.5 Gắn sự kiện mở Modal chi tiết món
    XQ.Modal.bindGlobalClicks('');

    // 1.6 Xử lý tham số URL (nếu điều hướng từ trang phụ về)
    var qParam = getParam('q');
    var catParam = getParam('cat');
    var regParam = getParam('region');
    var dishParam = getParam('dish');

    if (catParam) XQ.Filter.setCategory(catParam);
    if (regParam) XQ.Filter.setRegion(regParam);
    if (qParam) XQ.Filter.setQuery(qParam);
    if (dishParam) XQ.Modal.open(dishParam, '');
  }

  /* ---------------- 2. TRANG CHI TIẾT MÓN (PAGES/CHI-TIET-MON.HTML) ---------------- */
  function initDishDetailPage() {
    var basePath = '../';
    var dishId = getParam('id') || 'don-song-tra';
    var dish = XQ.getDish(dishId) || (XQ.dishes && XQ.dishes[0]);
    if (!dish) return;

    var cat = XQ.getCategory(dish.category);
    document.title = dish.name + ' – Đặc Sản Xứ Quảng';

    var crumbName = document.getElementById('crumb-dish-name');
    var bannerTitle = document.getElementById('dish-banner-title');
    var bannerLead = document.getElementById('dish-banner-lead');
    var bannerMeta = document.getElementById('dish-banner-meta');

    if (crumbName) crumbName.textContent = dish.name;
    if (bannerTitle) bannerTitle.textContent = dish.name;
    if (bannerLead) bannerLead.textContent = dish.short;
    if (bannerMeta) {
      bannerMeta.innerHTML =
        '<span class="badge badge--category">' + XQ.icons.pin + ' ' + XQ.escapeHtml(dish.area) + '</span> ' +
        (dish.bestseller ? '<span class="badge badge--bestseller">' + XQ.icons.star + ' Best-seller</span>' : '');
    }

    var mainEl = document.getElementById('dish-detail-main');
    if (mainEl) {
      mainEl.innerHTML =
        '<div class="detail-cover">' +
          '<img src="' + XQ.escapeHtml(XQ.imgPath(dish.image, basePath)) + '"' +
            ' alt="' + XQ.escapeHtml(dish.name) + '"' +
            ' data-fallback-title="' + XQ.escapeHtml(dish.name) + '"' +
            ' data-fallback-sub="' + XQ.escapeHtml(dish.area) + '"' +
            ' data-fallback-icon="' + XQ.escapeHtml(cat ? cat.icon : 'bowl') + '"' +
            ' onerror="XQ.onImgError(this)">' +
        '</div>' +
        XQ.renderDishDetailSections(dish);
    }

    // Sidebar: Khu vực liên quan & Món cùng nhóm
    var regionBox = document.getElementById('dish-regions-box');
    if (regionBox) {
      var regs = (dish.regions || []).map(XQ.getRegion).filter(Boolean);
      regionBox.innerHTML = regs.map(function (r) {
        return (
          '<div style="margin-bottom:0.85rem">' +
            '<a href="khu-vuc.html?id=' + encodeURIComponent(r.id) + '" style="font-weight:700;color:var(--color-brick)">' + XQ.escapeHtml(r.name) + ' →</a>' +
            '<p style="font-size:0.85rem;color:var(--color-muted);margin-top:0.2rem">' + XQ.escapeHtml(r.tagline) + '</p>' +
          '</div>'
        );
      }).join('');
    }

    var relatedBox = document.getElementById('related-dishes-list');
    if (relatedBox) {
      var related = (XQ.dishes || []).filter(function (d) {
        return d.id !== dish.id && (d.category === dish.category || (d.regions || []).some(function (r) { return (dish.regions || []).indexOf(r) !== -1; }));
      }).slice(0, 5);

      relatedBox.innerHTML = related.map(function (d) {
        var dCat = XQ.getCategory(d.category);
        return (
          '<a class="mini-dish" href="chi-tiet-mon.html?id=' + encodeURIComponent(d.id) + '">' +
            '<div class="mini-dish__thumb">' +
              '<img src="' + XQ.escapeHtml(XQ.imgPath(d.image, basePath)) + '" alt="' + XQ.escapeHtml(d.name) + '" data-fallback-title="' + XQ.escapeHtml(d.name) + '" data-fallback-sub="" data-fallback-icon="' + XQ.escapeHtml(dCat ? dCat.icon : 'bowl') + '" onerror="XQ.onImgError(this)">' +
            '</div>' +
            '<div>' +
              '<div class="mini-dish__name">' + XQ.escapeHtml(d.name) + '</div>' +
              '<div class="mini-dish__area">' + XQ.escapeHtml(d.area) + '</div>' +
            '</div>' +
          '</a>'
        );
      }).join('');
    }
  }

  /* ---------------- 3. TRANG KHU VỰC (PAGES/KHU-VUC.HTML) ---------------- */
  function initRegionPage() {
    var basePath = '../';
    var activeId = getParam('id') || 'tp-quang-ngai';

    function renderRegionView(regionId) {
      var region = XQ.getRegion(regionId) || (XQ.regions && XQ.regions[0]);
      if (!region) return;
      document.title = region.name + ' – Đặc Sản Xứ Quảng';

      var pillsEl = document.getElementById('region-pills');
      if (pillsEl) {
        pillsEl.innerHTML = (XQ.regions || []).map(function (r) {
          return '<button type="button" class="region-pill' + (r.id === region.id ? ' is-active' : '') + '" data-switch-region="' + XQ.escapeHtml(r.id) + '">' + XQ.escapeHtml(r.name) + '</button>';
        }).join('');
      }

      var titleEl = document.getElementById('region-banner-title');
      var leadEl = document.getElementById('region-banner-lead');
      var crumbEl = document.getElementById('crumb-region-name');
      if (titleEl) titleEl.textContent = region.name;
      if (leadEl) leadEl.textContent = region.tagline;
      if (crumbEl) crumbEl.textContent = region.name;

      var overviewEl = document.getElementById('region-overview');
      if (overviewEl) {
        var introHtml = (region.intro || []).map(function (p) {
          return '<p>' + XQ.escapeHtml(p) + '</p>';
        }).join('');
        var featuresHtml = (region.features || []).map(function (f) {
          return '<div class="feature-card"><h4>' + XQ.escapeHtml(f.title) + '</h4><p>' + XQ.escapeHtml(f.text) + '</p></div>';
        }).join('');
        var placesHtml = (region.places || []).map(function (p) { return '<li>' + XQ.escapeHtml(p) + '</li>'; }).join('');
        var tipsHtml = (region.tips || []).map(function (t) { return '<li>' + XQ.escapeHtml(t) + '</li>'; }).join('');

        overviewEl.innerHTML =
          '<div class="detail-layout">' +
            '<div class="detail-card">' +
              '<div class="detail-cover">' +
                '<img src="' + XQ.escapeHtml(XQ.imgPath(region.image, basePath)) + '" alt="' + XQ.escapeHtml(region.name) + '" data-fallback-title="' + XQ.escapeHtml(region.name) + '" data-fallback-sub="Vùng ẩm thực Quảng Ngãi" data-fallback-icon="mountain" onerror="XQ.onImgError(this)">' +
              '</div>' +
              '<div class="article-body">' + introHtml + '</div>' +
              '<div class="feature-grid">' + featuresHtml + '</div>' +
            '</div>' +
            '<aside>' +
              '<div class="sidebar-box"><h3>Điểm dừng chân gợi ý</h3><ul class="dish-list">' + placesHtml + '</ul></div>' +
              '<div class="sidebar-box"><h3>Kinh nghiệm thưởng thức</h3><ul class="dish-list">' + tipsHtml + '</ul></div>' +
            '</aside>' +
          '</div>';
      }

      var dishListEl = document.getElementById('region-dishes-grid');
      var dishHeadingEl = document.getElementById('region-dishes-heading');
      var regionDishes = (XQ.dishes || []).filter(function (d) {
        return (d.regions || []).indexOf(region.id) !== -1;
      });
      if (dishHeadingEl) {
        dishHeadingEl.textContent = 'Đặc sản tiêu biểu tại ' + region.name + ' (' + regionDishes.length + ' món)';
      }
      if (dishListEl) {
        dishListEl.innerHTML = regionDishes.map(function (d) {
          return XQ.renderDishCard(d, { basePath: basePath });
        }).join('');
      }
    }

    renderRegionView(activeId);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-switch-region]');
      if (!btn) return;
      var newId = btn.getAttribute('data-switch-region');
      renderRegionView(newId);
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', '?id=' + encodeURIComponent(newId));
      }
    });

    XQ.Modal.bindGlobalClicks(basePath);
  }

  /* ---------------- 4. TRANG BÀI VIẾT VĂN HÓA (PAGES/BAI-VIET.HTML) ---------------- */
  function initStoryPage() {
    var basePath = '../';
    var storyId = getParam('id') || 'mua-don-song-tra';
    var story = XQ.getStory(storyId) || (XQ.stories && XQ.stories[0]);
    if (!story) return;

    document.title = story.title + ' – Đặc Sản Xứ Quảng';

    var crumb = document.getElementById('crumb-story-title');
    var titleEl = document.getElementById('story-banner-title');
    var metaEl = document.getElementById('story-banner-meta');
    if (crumb) crumb.textContent = story.title;
    if (titleEl) titleEl.textContent = story.title;
    if (metaEl) metaEl.textContent = story.category + ' · ' + story.readTime + ' phút đọc';

    var articleEl = document.getElementById('story-article');
    if (articleEl) {
      var bodyHtml = (story.body || []).map(function (block) {
        if (block.type === 'h') return '<h2>' + XQ.escapeHtml(block.text) + '</h2>';
        if (block.type === 'quote') return '<blockquote class="article-quote">“' + XQ.escapeHtml(block.text) + '”</blockquote>';
        if (block.type === 'list') {
          return '<ul class="dish-list" style="margin-bottom:1.25rem">' +
            block.items.map(function (it) { return '<li>' + XQ.escapeHtml(it) + '</li>'; }).join('') +
            '</ul>';
        }
        return '<p>' + XQ.escapeHtml(block.text) + '</p>';
      }).join('');

      articleEl.innerHTML =
        '<div class="detail-cover">' +
          '<img src="' + XQ.escapeHtml(XQ.imgPath(story.image, basePath)) + '" alt="' + XQ.escapeHtml(story.title) + '" data-fallback-title="' + XQ.escapeHtml(story.title) + '" data-fallback-sub="' + XQ.escapeHtml(story.category) + '" data-fallback-icon="book" onerror="XQ.onImgError(this)">' +
        '</div>' +
        '<div class="article-body">' + bodyHtml + '</div>';
    }

    var relDishesEl = document.getElementById('story-related-dishes');
    if (relDishesEl) {
      var dishes = (story.related || []).map(XQ.getDish).filter(Boolean);
      relDishesEl.innerHTML = dishes.map(function (d) {
        return XQ.renderDishCard(d, { basePath: basePath });
      }).join('');
    }

    var otherStoriesEl = document.getElementById('other-stories-list');
    if (otherStoriesEl) {
      var others = (XQ.stories || []).filter(function (s) { return s.id !== story.id; });
      otherStoriesEl.innerHTML = others.map(function (s) {
        return (
          '<a class="mini-dish" href="bai-viet.html?id=' + encodeURIComponent(s.id) + '">' +
            '<div class="mini-dish__thumb">' +
              '<img src="' + XQ.escapeHtml(XQ.imgPath(s.image, basePath)) + '" alt="' + XQ.escapeHtml(s.title) + '" data-fallback-title="' + XQ.escapeHtml(s.category) + '" data-fallback-sub="" data-fallback-icon="book" onerror="XQ.onImgError(this)">' +
            '</div>' +
            '<div>' +
              '<div class="mini-dish__name">' + XQ.escapeHtml(s.title) + '</div>' +
              '<div class="mini-dish__area">' + XQ.escapeHtml(s.category) + ' · ' + s.readTime + ' phút đọc</div>' +
            '</div>' +
          '</a>'
        );
      }).join('');
    }

    XQ.Modal.bindGlobalClicks(basePath);
  }

  /* ---------------- KHỞI CHẠY ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || 'home';
    var basePath = page === 'home' ? '' : '../';

    initSharedUI(basePath);

    if (page === 'home') initHomePage();
    else if (page === 'dish') initDishDetailPage();
    else if (page === 'region') initRegionPage();
    else if (page === 'story') initStoryPage();
  });
})();
