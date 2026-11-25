/**
 * render.js — Hàm tiện ích, icon SVG và tạo HTML tự động cho thẻ món ăn,
 * thẻ khu vực, bài viết văn hóa và nội dung chi tiết món.
 */
window.XQ = window.XQ || {};

XQ.icons = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  bowl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11h16a8 8 0 0 1-16 0Z"/><path d="M7 19h10"/><path d="M9 7c0-1.5 1-2 1-3.5"/><path d="M14 7c0-1.5 1-2 1-3.5"/></svg>',
  roll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-18 12 12)"/><path d="M8 10.5c1.5 1 2.5 2.5 3 4"/></svg>',
  street: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10h18"/><path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/><path d="M7 6l5-3 5 3"/></svg>',
  wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M6 7c2-2 4-2 6 0s4 2 6 0"/></svg>',
  mountain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 19 6.5-11 4 6.5L16.5 10 21 19H3Z"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>'
};

/**
 * Chuẩn hóa chuỗi tiếng Việt về không dấu, chữ thường để tìm kiếm thông minh.
 */
XQ.normalize = function (str) {
  if (!str) return '';
  return String(str)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .trim();
};

XQ.escapeHtml = function (str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

XQ.getCategory = function (id) {
  return (XQ.categories || []).find(function (c) { return c.id === id; }) || null;
};

XQ.getRegion = function (id) {
  return (XQ.regions || []).find(function (r) { return r.id === id; }) || null;
};

XQ.getDish = function (id) {
  return (XQ.dishes || []).find(function (d) { return d.id === id; }) || null;
};

XQ.getStory = function (id) {
  return (XQ.stories || []).find(function (s) { return s.id === id; }) || null;
};

XQ.imgPath = function (rel, basePath) {
  return (basePath || '') + 'assets/images/' + rel;
};

/**
 * Khi ảnh chưa được bổ sung vào thư mục assets/images/, tự động thay thế
 * bằng khung minh họa phong cách tạp chí (không hiện biểu tượng ảnh lỗi).
 */
XQ.onImgError = function (img) {
  if (!img || img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = '1';
  var title = img.dataset.fallbackTitle || img.alt || 'Đặc Sản Xứ Quảng';
  var sub = img.dataset.fallbackSub || 'Đặc sản Quảng Ngãi';
  var iconKey = img.dataset.fallbackIcon || 'bowl';
  var iconSvg = XQ.icons[iconKey] || XQ.icons.bowl;

  var fallback = document.createElement('div');
  fallback.className = 'media-fallback';
  fallback.innerHTML =
    '<div class="media-fallback__icon">' + iconSvg + '</div>' +
    '<div class="media-fallback__title">' + XQ.escapeHtml(title) + '</div>' +
    '<div class="media-fallback__sub">' + XQ.escapeHtml(sub) + '</div>';

  img.replaceWith(fallback);
};

/**
 * Tạo HTML cho 1 thẻ món ăn.
 */
XQ.renderDishCard = function (dish, opts) {
  opts = opts || {};
  var basePath = opts.basePath || '';
  var cat = XQ.getCategory(dish.category);
  var catShort = cat ? cat.short : '';
  var catIcon = cat ? cat.icon : 'bowl';
  var isFeatured = Boolean(opts.featured);

  var badgesHtml =
    '<div class="dish-card__badges">' +
      (dish.bestseller
        ? '<span class="badge badge--bestseller">' + XQ.icons.star + ' Best-seller</span>'
        : '<span></span>') +
      (catShort
        ? '<span class="badge badge--category">' + XQ.escapeHtml(catShort) + '</span>'
        : '') +
    '</div>';

  return (
    '<article class="dish-card' + (isFeatured ? ' dish-card--featured' : '') + '" data-dish-id="' + XQ.escapeHtml(dish.id) + '" tabindex="0" role="button" aria-label="Xem chi tiết món ' + XQ.escapeHtml(dish.name) + '">' +
      '<div class="dish-card__media">' +
        badgesHtml +
        '<img src="' + XQ.escapeHtml(XQ.imgPath(dish.image, basePath)) + '"' +
          ' alt="' + XQ.escapeHtml(dish.name) + ' – đặc sản Quảng Ngãi"' +
          ' loading="lazy"' +
          ' data-fallback-title="' + XQ.escapeHtml(dish.name) + '"' +
          ' data-fallback-sub="' + XQ.escapeHtml(dish.area) + '"' +
          ' data-fallback-icon="' + XQ.escapeHtml(catIcon) + '"' +
          ' onerror="XQ.onImgError(this)">' +
      '</div>' +
      '<div class="dish-card__body">' +
        '<span class="region-tag">' + XQ.icons.pin + ' ' + XQ.escapeHtml(dish.area) + '</span>' +
        '<h3 class="dish-card__title">' + XQ.escapeHtml(dish.name) + '</h3>' +
        (dish.subgroup ? '<span class="dish-card__subgroup">' + XQ.escapeHtml(dish.subgroup) + '</span>' : '') +
        '<p class="dish-card__desc">' + XQ.escapeHtml(dish.short) + '</p>' +
        '<div class="dish-card__footer">' +
          '<span class="dish-card__price">' + XQ.escapeHtml(dish.price || 'Đặc sản địa phương') + '</span>' +
          '<span class="dish-card__cta">Xem chi tiết ' + XQ.icons.arrow + '</span>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
};

/**
 * Tạo HTML cho 1 thẻ khu vực ẩm thực.
 */
XQ.renderRegionCard = function (region, dishCount, isSelected, basePath) {
  basePath = basePath || '';
  return (
    '<article class="region-card' + (isSelected ? ' is-selected' : '') + '" data-region-card="' + XQ.escapeHtml(region.id) + '" tabindex="0" role="button" aria-label="Lọc món đặc sản khu vực ' + XQ.escapeHtml(region.name) + '">' +
      '<img class="region-card__img" src="' + XQ.escapeHtml(XQ.imgPath(region.image, basePath)) + '"' +
        ' alt="' + XQ.escapeHtml(region.name) + '"' +
        ' loading="lazy"' +
        ' data-fallback-title="' + XQ.escapeHtml(region.name) + '"' +
        ' data-fallback-sub="Vùng ẩm thực Quảng Ngãi"' +
        ' data-fallback-icon="mountain"' +
        ' onerror="XQ.onImgError(this)">' +
      '<div class="region-card__overlay"></div>' +
      '<div class="region-card__content">' +
        '<span class="region-card__count">' + dishCount + ' đặc sản</span>' +
        '<h3 class="region-card__title">' + XQ.escapeHtml(region.name) + '</h3>' +
        '<p class="region-card__tagline">' + XQ.escapeHtml(region.tagline) + '</p>' +
        '<div class="region-card__actions">' +
          '<span class="region-card__filter-hint">Xem món →</span>' +
          '<a class="region-card__page-link" href="' + basePath + 'pages/khu-vuc.html?id=' + encodeURIComponent(region.id) + '" onclick="event.stopPropagation()">Cẩm nang</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
};

/**
 * Tạo HTML cho 1 thẻ bài viết Góc Văn hóa & Làng nghề.
 */
XQ.renderStoryCard = function (story, basePath) {
  basePath = basePath || '';
  var href = basePath + 'pages/bai-viet.html?id=' + encodeURIComponent(story.id);
  return (
    '<article class="story-card">' +
      '<a href="' + href + '" class="story-card__media">' +
        '<img src="' + XQ.escapeHtml(XQ.imgPath(story.image, basePath)) + '"' +
          ' alt="' + XQ.escapeHtml(story.title) + '"' +
          ' loading="lazy"' +
          ' data-fallback-title="' + XQ.escapeHtml(story.title) + '"' +
          ' data-fallback-sub="' + XQ.escapeHtml(story.category) + '"' +
          ' data-fallback-icon="book"' +
          ' onerror="XQ.onImgError(this)">' +
      '</a>' +
      '<div class="story-card__body">' +
        '<div class="story-card__meta">' +
          '<span>' + XQ.escapeHtml(story.category) + '</span>' +
          '<span class="story-card__time">' + story.readTime + ' phút đọc</span>' +
        '</div>' +
        '<h3 class="story-card__title"><a href="' + href + '">' + XQ.escapeHtml(story.title) + '</a></h3>' +
        '<p class="story-card__excerpt">' + XQ.escapeHtml(story.excerpt) + '</p>' +
        '<a class="btn btn--link" href="' + href + '">Đọc câu chuyện ' + XQ.icons.arrow + '</a>' +
      '</div>' +
    '</article>'
  );
};

/**
 * Tạo HTML phần nội dung 6 mục chi tiết của 1 món ăn (dùng chung cho Modal và trang chi-tiet-mon.html).
 */
XQ.renderDishDetailSections = function (dish) {
  var cat = XQ.getCategory(dish.category);
  var ingredientsHtml = (dish.ingredients || []).map(function (item) {
    return '<li>' + XQ.escapeHtml(item) + '</li>';
  }).join('');

  var stepsHtml = (dish.steps || []).map(function (step) {
    return '<li>' + XQ.escapeHtml(step) + '</li>';
  }).join('');

  var enjoyHtml = (dish.enjoy || []).map(function (tip) {
    return '<li>' + XQ.escapeHtml(tip) + '</li>';
  }).join('');

  var whereHtml = (dish.where || []).map(function (place) {
    return '<li>' + XQ.escapeHtml(place) + '</li>';
  }).join('');

  return (
    '<div class="dish-quick-facts">' +
      '<div><span class="quick-fact__label">Nhóm món</span><span class="quick-fact__val">' + XQ.escapeHtml(cat ? cat.name : '') + (dish.subgroup ? ' · ' + XQ.escapeHtml(dish.subgroup) : '') + '</span></div>' +
      '<div><span class="quick-fact__label">Mùa ngon</span><span class="quick-fact__val">' + XQ.escapeHtml(dish.season || 'Quanh năm') + '</span></div>' +
      '<div><span class="quick-fact__label">Giá tham khảo</span><span class="quick-fact__val">' + XQ.escapeHtml(dish.price || 'Đặc sản địa phương') + '</span></div>' +
    '</div>' +

    '<section class="dish-section">' +
      '<h3 class="dish-section__heading"><span class="dish-section__num">1</span> Xuất xứ &amp; Câu chuyện</h3>' +
      '<p class="dish-origin-text">' + XQ.escapeHtml(dish.origin) + '</p>' +
    '</section>' +

    '<div class="dish-detail-grid">' +
      '<section class="dish-section">' +
        '<h3 class="dish-section__heading"><span class="dish-section__num">2</span> Nguyên liệu đặc trưng</h3>' +
        '<ul class="dish-list">' + ingredientsHtml + '</ul>' +
      '</section>' +
      '<section class="dish-section">' +
        '<h3 class="dish-section__heading"><span class="dish-section__num">3</span> Cách chế biến</h3>' +
        '<ol class="dish-steps">' + stepsHtml + '</ol>' +
      '</section>' +
    '</div>' +

    '<section class="dish-section">' +
      '<h3 class="dish-section__heading"><span class="dish-section__num">4</span> Cách thưởng thức chuẩn vị người Quảng</h3>' +
      '<div class="dish-callout"><ul class="dish-list">' + enjoyHtml + '</ul></div>' +
    '</section>' +

    '<section class="dish-section">' +
      '<h3 class="dish-section__heading"><span class="dish-section__num">5</span> Gợi ý khu vực thưởng thức &amp; mua về</h3>' +
      '<ul class="dish-list">' + whereHtml + '</ul>' +
    '</section>'
  );
};

/**
 * Tạo HTML cho 1 lộ trình Food Tour gợi ý theo các khung giờ trong ngày.
 */
XQ.renderFoodTour = function (tour, basePath) {
  basePath = basePath || '';
  if (!tour) return '';

  var stopsHtml = (tour.stops || []).map(function (stop, idx) {
    var dishesHtml = (stop.dishes || []).map(function (dishId) {
      var dish = XQ.getDish(dishId);
      if (!dish) return '';
      var cat = XQ.getCategory(dish.category);
      var iconKey = cat ? cat.icon : 'bowl';
      return (
        '<button type="button" class="foodtour-dish-pill" data-dish-id="' + XQ.escapeHtml(dish.id) + '" aria-label="Xem chi tiết món ' + XQ.escapeHtml(dish.name) + '">' +
          '<span class="foodtour-dish-pill__thumb">' +
            '<img src="' + XQ.escapeHtml(XQ.imgPath(dish.image, basePath)) + '"' +
              ' alt="' + XQ.escapeHtml(dish.name) + '"' +
              ' loading="lazy"' +
              ' data-fallback-title=""' +
              ' data-fallback-sub=""' +
              ' data-fallback-icon="' + XQ.escapeHtml(iconKey) + '"' +
              ' onerror="XQ.onImgError(this)">' +
          '</span>' +
          '<span class="foodtour-dish-pill__info">' +
            '<span class="foodtour-dish-pill__name">' + XQ.escapeHtml(dish.name) + '</span>' +
            '<span class="foodtour-dish-pill__meta">' + XQ.escapeHtml(dish.price || 'Xem chi tiết') + ' · Chi tiết →</span>' +
          '</span>' +
        '</button>'
      );
    }).join('');

    return (
      '<article class="foodtour-stop">' +
        '<div class="foodtour-stop__rail">' +
          '<span class="foodtour-stop__dot">0' + (idx + 1) + '</span>' +
        '</div>' +
        '<div class="foodtour-stop__card">' +
          '<div class="foodtour-stop__top">' +
            '<span class="foodtour-time">' + XQ.escapeHtml(stop.time) + ' · ' + XQ.escapeHtml(stop.period) + '</span>' +
            '<span class="region-tag" style="margin-bottom:0">' + XQ.icons.pin + ' ' + XQ.escapeHtml(stop.area) + '</span>' +
          '</div>' +
          '<h3 class="foodtour-stop__title">' + XQ.escapeHtml(stop.title) + '</h3>' +
          '<p class="foodtour-stop__note">' + XQ.escapeHtml(stop.note) + '</p>' +
          '<div class="foodtour-dishes">' + dishesHtml + '</div>' +
          (stop.tip
            ? '<p class="foodtour-stop__tip"><strong>Mẹo nhỏ:</strong> ' + XQ.escapeHtml(stop.tip) + '</p>'
            : '') +
        '</div>' +
      '</article>'
    );
  }).join('');

  return (
    '<div class="foodtour-summary-bar">' +
      '<div>' +
        '<span class="foodtour-summary-bar__badge">' + XQ.escapeHtml(tour.badge) + '</span>' +
        '<h3 class="foodtour-summary-bar__title">' + XQ.escapeHtml(tour.name) + '</h3>' +
        '<p class="foodtour-summary-bar__desc">' + XQ.escapeHtml(tour.summary) + '</p>' +
      '</div>' +
      '<div class="foodtour-budget">' +
        '<span class="foodtour-budget__label">Chi phí tham khảo</span>' +
        '<strong class="foodtour-budget__val">' + XQ.escapeHtml(tour.budget) + '</strong>' +
      '</div>' +
    '</div>' +
    '<div class="foodtour-timeline">' + stopsHtml + '</div>'
  );
};
