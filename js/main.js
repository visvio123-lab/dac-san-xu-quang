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

    // Gợi ý quán: bật / tắt bản đồ nhúng Google Maps trong từng thẻ quán
    XQ.bindShopMaps();

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

  /* ---------------- FORM ĐÓNG GÓP QUÁN NGON ---------------- */
  function initContributeForm() {
    var form = document.getElementById('contribute-form');
    if (!form) return;

    var cfg = XQ.config || {};
    var regionSel = document.getElementById('contrib-region');
    var msg = document.getElementById('contribute-msg');
    var emailBtn = document.getElementById('contrib-email-btn');

    if (regionSel) {
      regionSel.innerHTML = '<option value="">Chọn khu vực (không bắt buộc)</option>' +
        (XQ.regions || []).map(function (r) {
          return '<option value="' + XQ.escapeHtml(r.name) + '">' + XQ.escapeHtml(r.name) + '</option>';
        }).join('');
    }
    if (emailBtn && !cfg.email) emailBtn.hidden = true;

    function val(id) {
      var el = document.getElementById(id);
      return el ? el.value.trim() : '';
    }

    function setMsg(text, type) {
      if (!msg) return;
      msg.textContent = text;
      msg.className = 'contribute-msg' + (type ? ' is-' + type : '');
    }

    function buildText(d) {
      return [
        'ĐÓNG GÓP QUÁN NGON – Đặc Sản Xứ Quảng',
        'Món đặc sản: ' + d.dish,
        'Tên quán: ' + d.place,
        'Địa chỉ: ' + d.address,
        d.region ? 'Khu vực: ' + d.region : '',
        d.note ? 'Cảm nhận: ' + d.note : '',
        d.sender ? 'Người gửi: ' + d.sender : ''
      ].filter(Boolean).join('\n');
    }

    function send(channel) {
      var d = {
        dish: val('contrib-dish'),
        place: val('contrib-place'),
        address: val('contrib-address'),
        region: val('contrib-region'),
        note: val('contrib-note'),
        sender: val('contrib-sender')
      };

      var missing = [['contrib-dish', d.dish], ['contrib-place', d.place], ['contrib-address', d.address]]
        .filter(function (f) { return !f[1]; });
      if (missing.length) {
        setMsg('Vui lòng điền đủ: món đặc sản, tên quán và địa chỉ.', 'error');
        var firstEl = document.getElementById(missing[0][0]);
        if (firstEl) firstEl.focus();
        return;
      }

      var text = buildText(d);
      if (channel === 'email' && cfg.email) {
        window.location.href = 'mailto:' + cfg.email + '?subject=' +
          encodeURIComponent('Đóng góp quán ngon: ' + d.place) + '&body=' + encodeURIComponent(text);
        setMsg('Đang mở ứng dụng email của bạn. Cảm ơn bạn đã đóng góp!', 'success');
        return;
      }

      XQ.copyText(text).then(function (ok) {
        window.open('https://zalo.me/' + (cfg.zalo || '0385940317'), '_blank', 'noopener');
        setMsg(ok
          ? 'Đã sao chép nội dung. Hãy dán (giữ chạm / Ctrl+V) vào khung chat Zalo vừa mở để gửi. Cảm ơn bạn!'
          : 'Đã mở Zalo. Vui lòng chép thông tin quán vào tin nhắn. Cảm ơn bạn!', 'success');
        form.reset();
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      send('zalo');
    });
    if (emailBtn) emailBtn.addEventListener('click', function () { send('email'); });
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
    initContributeForm();

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
        (dish.bestseller ? '<span class="badge badge--bestseller">' + XQ.icons.star + ' Best-seller</span>' : '') +
        ' ' + XQ.favButton(dish.id, 'pill');
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

  /* ---------------- 5. TRANG LỘ TRÌNH FOOD TOUR (PAGES/LO-TRINH.HTML) ---------------- */
  function initFoodTourPage() {
    var basePath = '../';
    var tours = XQ.foodTours || [];
    if (!tours.length) return;

    var tabsEl = document.getElementById('foodtour-tabs');
    var summaryEl = document.getElementById('foodtour-summary');
    var timelineEl = document.getElementById('foodtour-timeline-wrap');
    var fullRouteBtn = document.getElementById('foodtour-full-route-btn');
    var mapIframe = document.getElementById('foodtour-map-iframe');
    var mapName = document.getElementById('map-place-name');
    var mapAddr = document.getElementById('map-place-addr');
    var mapOpenBtn = document.getElementById('map-open-gmaps');
    var quickPinsEl = document.getElementById('map-quick-pins');

    var activeTourId = getParam('route') || tours[0].id;
    var activeTour = tours.find(function (t) { return t.id === activeTourId; }) || tours[0];
    var flatPlaces = [];
    var activePinIdx = 0;

    function collectPlaces(tour) {
      var arr = [];
      (tour.stops || []).forEach(function (stop, sIdx) {
        (stop.places || []).forEach(function (place) {
          arr.push({
            stopIdx: sIdx + 1,
            period: stop.period,
            name: place.name,
            address: place.address,
            mapQuery: place.mapQuery || place.address
          });
        });
      });
      return arr;
    }

    function selectPin(idx, shouldScrollMap) {
      if (!flatPlaces.length) return;
      activePinIdx = Math.max(0, Math.min(idx, flatPlaces.length - 1));
      var place = flatPlaces[activePinIdx];

      if (mapName) mapName.textContent = place.name;
      if (mapAddr) mapAddr.textContent = place.address;
      if (mapIframe) mapIframe.src = XQ.gmapsEmbedUrl(place.mapQuery);
      if (mapOpenBtn) mapOpenBtn.href = XQ.gmapsSearchUrl(place.mapQuery);

      // Cập nhật trạng thái nút trong timeline & danh sách ghim nhanh
      document.querySelectorAll('[data-pin-idx]').forEach(function (el) {
        var isAct = Number(el.getAttribute('data-pin-idx')) === activePinIdx;
        el.classList.toggle('is-active', isAct);
        var btn = el.querySelector('.place-pin-btn');
        if (btn) btn.textContent = isAct ? 'Đang xem bản đồ' : 'Xem trên bản đồ';
      });

      if (quickPinsEl) {
        quickPinsEl.innerHTML = flatPlaces.map(function (p, i) {
          return '<button type="button" class="map-quick-pin' + (i === activePinIdx ? ' is-active' : '') + '" data-select-pin="' + i + '">' +
            '<span>' + (i + 1) + '.</span> ' + XQ.escapeHtml(p.name) +
          '</button>';
        }).join('');
      }

      if (shouldScrollMap && window.innerWidth <= 1040 && mapIframe) {
        mapIframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    function renderTour(tourId) {
      activeTour = tours.find(function (t) { return t.id === tourId; }) || tours[0];
      flatPlaces = collectPlaces(activeTour);
      activePinIdx = 0;

      if (tabsEl) {
        tabsEl.innerHTML = tours.map(function (t) {
          var isAct = t.id === activeTour.id;
          return '<button type="button" class="foodtour-tab' + (isAct ? ' is-active' : '') + '" data-tour-id="' + XQ.escapeHtml(t.id) + '" role="tab" aria-selected="' + isAct + '">' + XQ.escapeHtml(t.short) + '</button>';
        }).join('');
      }

      if (fullRouteBtn) fullRouteBtn.href = XQ.gmapsRouteUrl(activeTour);
      if (summaryEl) summaryEl.innerHTML = XQ.renderFoodTourSummary(activeTour);
      if (timelineEl) timelineEl.innerHTML = XQ.renderFoodTourTimeline(activeTour, basePath, 0);

      selectPin(0, false);
    }

    renderTour(activeTour.id);

    document.addEventListener('click', function (e) {
      var tabBtn = e.target.closest('[data-tour-id]');
      if (tabBtn) {
        var newTourId = tabBtn.getAttribute('data-tour-id');
        renderTour(newTourId);
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', '?route=' + encodeURIComponent(newTourId));
        }
        return;
      }

      var pinBtn = e.target.closest('[data-select-pin]');
      if (pinBtn) {
        selectPin(Number(pinBtn.getAttribute('data-select-pin')), true);
      }
    });

    XQ.Modal.bindGlobalClicks(basePath);
  }

  /* ---------------- KHỞI CHẠY ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || 'home';
    var basePath = page === 'home' ? '' : '../';

    initSharedUI(basePath);
    if (XQ.Favorites) XQ.Favorites.init(basePath);

    if (page === 'home') initHomePage();
    else if (page === 'dish') initDishDetailPage();
    else if (page === 'region') initRegionPage();
    else if (page === 'story') initStoryPage();
    else if (page === 'foodtour') initFoodTourPage();
  });
})();
