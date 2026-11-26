/**
 * shops.js — Gợi ý quán ngon uy tín cho từng món + cấu hình liên hệ.
 *
 * Mỗi món (theo id trong dishes.js) có 1–3 gợi ý:
 *  - shop(): quán cụ thể có địa chỉ (đã tổng hợp từ các nguồn ẩm thực địa phương)
 *  - area(): khu vực / chợ nên tìm khi chưa có quán cụ thể (nút sẽ mở tìm kiếm Google Maps)
 *
 * Lưu ý: giờ bán & giá chỉ mang tính tham khảo, nên gọi hỏi trước khi đến.
 */
window.XQ = window.XQ || {};

/* ---- Cấu hình liên hệ cho Form đóng góp ---- */
XQ.config = {
  zalo: '0385940317',   // Số Zalo nhận đóng góp (trùng số điện thoại liên hệ)
  email: ''             // Điền email nhận đóng góp (vd: 'ten@gmail.com') để hiện nút "Gửi qua Email"
};

(function () {
  function shop(name, address, hours, mapQuery, note) {
    return { kind: 'shop', name: name, address: address, hours: hours, mapQuery: mapQuery, note: note || '' };
  }
  function area(name, address, mapQuery, note) {
    return { kind: 'area', name: name, address: address, hours: '', mapQuery: mapQuery, note: note || '' };
  }

  var SANG = 'Thường bán buổi sáng';
  var CHIEU = 'Thường bán chiều – tối';
  var CANGAY = 'Bán cả ngày';

  XQ.shops = {
    /* ---------- Nhóm 1: Món chính & Món nước ---------- */
    'don-song-tra': [
      shop('Quán Don 16 Trần Hưng Đạo', '16 Trần Hưng Đạo, TP. Quảng Ngãi', SANG, '16 Tran Hung Dao, Quang Ngai, Vietnam', 'Quán lâu đời gần ngã ba Quang Trung – Trần Hưng Đạo, thường gọi thêm trứng vịt lộn.'),
      shop('Quán Don Cô Thành', 'Thôn Phú Thọ, Nghĩa Phú (xã An Phú), TP. Quảng Ngãi', SANG, 'Quan Don Co Thanh, Nghia Phu, Quang Ngai, Vietnam', 'Vùng cái nôi con don sông Trà, ăn don chính gốc.')
    ],
    'mi-quang': [
      shop('Mì Quảng Thu Búp', '234 Hùng Vương, TP. Quảng Ngãi', SANG, 'Mi Quang Thu Bup, 234 Hung Vuong, Quang Ngai, Vietnam', 'Quán đông khách, sợi mì dai, nước dùng thanh.'),
      shop('Mì Quảng Giao Thủy', '233 Phan Bội Châu, TP. Quảng Ngãi', SANG, 'Mi Quang Giao Thuy, 233 Phan Boi Chau, Quang Ngai, Vietnam', 'Tô mì đầy đặn, nấu theo kiểu truyền thống.'),
      shop('Mì Quảng Nhất', '688 Quang Trung, TP. Quảng Ngãi', SANG, 'Mi Quang Nhat, 688 Quang Trung, Quang Ngai, Vietnam')
    ],
    'banh-xeo': [
      shop('Bánh xèo & Ram bắp 124 Phan Đình Phùng', '124 Phan Đình Phùng, P. Nguyễn Nghiêm, TP. Quảng Ngãi', CHIEU, '124 Phan Dinh Phung, Quang Ngai, Vietnam', 'Bánh xèo nhỏ giòn rụm, có cả ram bắp.'),
      shop('Ông Già Quán (bánh xèo tôm nhảy)', '400 Phan Đình Phùng, TP. Quảng Ngãi', CHIEU, '400 Phan Dinh Phung, Quang Ngai, Vietnam', 'Bánh xèo tôm tươi, vỏ vàng nghệ.'),
      shop('Bánh Xèo Tân Lợi', '88 Phan Bội Châu, TP. Quảng Ngãi', CHIEU, '88 Phan Boi Chau, Quang Ngai, Vietnam')
    ],
    'bun-ca-ngu': [
      area('Quán bún cá vùng biển Nghĩa An', 'Khu vực chợ và quán ăn Nghĩa An (xã An Phú)', 'Nghia An, Quang Ngai, Vietnam', 'Cá ngừ tươi mỗi sáng, nên đi buổi sáng.'),
      area('Quán bún cá, bún chả cá quanh Chợ Quảng Ngãi', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'bun ca Quang Ngai city, Vietnam')
    ],
    'bun-mam-nem': [
      area('Gánh bún mắm nêm quanh Chợ Quảng Ngãi', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'bun mam nem Quang Ngai city, Vietnam', 'Nhiều gánh bán buổi sáng và xế trưa.')
    ],
    'com-ga': [
      shop('Cơm Gà Cô Nguyệt', '181 – 183 Trần Hưng Đạo, TP. Quảng Ngãi', 'Thường bán trưa – tối', 'Com Ga Co Nguyet, 181 Tran Hung Dao, Quang Ngai, Vietnam', 'Quán lâu năm, không gian rộng, gà ta thả vườn.'),
      shop('Cơm Gà Nhung', '267 Phan Bội Châu, TP. Quảng Ngãi', 'Thường bán trưa – tối', 'Com Ga Nhung, 267 Phan Boi Chau, Quang Ngai, Vietnam', 'Thương hiệu hơn 20 năm.'),
      shop('Cơm Gà Quảng Châu', '300 Phan Đình Phùng, TP. Quảng Ngãi', 'Thường bán trưa – tối', 'Com Ga Quang Chau, 300 Phan Dinh Phung, Quang Ngai, Vietnam', 'Quán rộng, hợp nhóm đông.')
    ],

    /* ---------- Nhóm 2: Ram ---------- */
    'ram-bap': [
      shop('Bánh xèo & Ram bắp 124 Phan Đình Phùng', '124 Phan Đình Phùng, P. Nguyễn Nghiêm, TP. Quảng Ngãi', CHIEU, '124 Phan Dinh Phung, Quang Ngai, Vietnam', 'Ram bắp cuốn bánh tráng nóng hổi.'),
      area('Hàng ram bắp quanh trung tâm TP. Quảng Ngãi', 'Các con phố trung tâm, đông nhất buổi chiều', 'ram bap Quang Ngai city, Vietnam')
    ],
    'ram-cha-ca': [
      area('Hàng chả cá, ram cá quanh Chợ Quảng Ngãi', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'cha ca Quang Ngai market, Vietnam'),
      area('Chợ và quán ăn vặt vùng biển An Phú', 'Xã An Phú (Nghĩa An – Nghĩa Phú), TP. Quảng Ngãi', 'An Phu, Quang Ngai, Vietnam')
    ],
    'ram-tom-thit': [
      area('Quán ram và cơm gia đình ở TP. Quảng Ngãi', 'Khu vực trung tâm TP. Quảng Ngãi', 'ram tom thit Quang Ngai city, Vietnam', 'Ram cuốn sẵn có bán ở chợ để mang về chiên.')
    ],
    'ram-thit-nuong': [
      area('Quán nem nướng, thịt nướng cuốn ở trung tâm', 'Khu vực trung tâm TP. Quảng Ngãi', 'thit nuong cuon Quang Ngai city, Vietnam')
    ],

    /* ---------- Nhóm 3: Ăn vặt & Đường phố ---------- */
    'banh-beo': [
      shop('Bánh Bèo Bà Lợi (biển Mỹ Khê)', 'Khu vực vòng xoay biển Mỹ Khê, xã Tịnh Khê, TP. Quảng Ngãi', SANG, 'Banh Beo Ba Loi, My Khe, Tinh Khe, Quang Ngai, Vietnam', 'Thương hiệu hơn 20 năm, rất đông buổi sáng.'),
      shop('Bánh Bèo Cô Xí', 'Đường Nguyễn Tự Tân, TP. Quảng Ngãi', 'Thường bán chiều', 'Banh Beo Co Xi, Nguyen Tu Tan, Quang Ngai, Vietnam', 'Quán bình dân, sạch sẽ.'),
      shop('Bánh bèo chén 264 Nguyễn Tự Tân', '264 Nguyễn Tự Tân, P. Nghĩa Lộ, TP. Quảng Ngãi', 'Thường bán chiều', '264 Nguyen Tu Tan, Quang Ngai, Vietnam', 'Bán theo mâm, giá bình dân.')
    ],
    'banh-trang-dap': [
      area('Quán bánh đập ven sông Trà', 'Khu vực ven sông Trà – An Phú', 'banh dap Quang Ngai, Vietnam', 'Thường bán kèm hến xào hoặc mắm nêm.')
    ],
    'bo-hit': [
      shop('Quán Cô Năm Bò Hít', '11 Trần Quang Diệu, TP. Quảng Ngãi', 'Thường bán chiều – tối', '11 Tran Quang Dieu, Quang Ngai, Vietnam', 'Bò hít cay nồng, xúc bằng bánh tráng nướng.'),
      area('Xe gỏi quanh công viên và trường học', 'Khu vực công viên, quảng trường TP. Quảng Ngãi', 'bo hit Quang Ngai city, Vietnam')
    ],
    'goi-da-bo': [
      area('Quán gỏi, quán nhậu bình dân ở TP. Quảng Ngãi', 'Khu vực trung tâm TP. Quảng Ngãi', 'goi da bo Quang Ngai city, Vietnam')
    ],
    'goi-oc': [
      area('Quán ốc trong TP. Quảng Ngãi', 'Khu vực trung tâm TP. Quảng Ngãi', 'quan oc Quang Ngai city, Vietnam'),
      area('Quán hải sản ven biển Nghĩa An', 'Xã An Phú (Nghĩa An), TP. Quảng Ngãi', 'Nghia An, Quang Ngai, Vietnam')
    ],
    'oc-hut': [
      shop('Ốc Hút Cây Me', '141 Nguyễn Du, P. Nghĩa Chánh, TP. Quảng Ngãi', CHIEU, 'Oc Hut Cay Me, 141 Nguyen Du, Quang Ngai, Vietnam', 'Quán gạo cội hơn 30 năm, ốc xào sả ớt béo cay.'),
      shop('Quán Ốc Hàu Sữa', '26 Huỳnh Thúc Kháng, P. Nghĩa Lộ, TP. Quảng Ngãi', CHIEU, '26 Huynh Thuc Khang, Quang Ngai, Vietnam', 'Nhiều món ốc xào me, hấp sả.'),
      shop('Ốc Đêm Quảng Ngãi', '56 Lê Lợi, TP. Quảng Ngãi', CHIEU, '56 Le Loi, Quang Ngai, Vietnam', 'Không gian thoáng, nhiều loại ốc và hải sản.')
    ],
    'xu-xoa': [
      area('Hàng xu xoa ven biển Lý Sơn', 'Khu vực Cổng Tò Vò, đảo Lý Sơn', 'Cong To Vo, Ly Son, Quang Ngai, Vietnam', 'Giải nhiệt sau khi ngắm hoàng hôn.'),
      area('Xe chè xu xoa ở TP. Quảng Ngãi', 'Khu vực trung tâm TP. Quảng Ngãi', 'xu xoa Quang Ngai city, Vietnam')
    ],

    /* ---------- Nhóm 4: Hải sản & Lý Sơn ---------- */
    'goi-toi-ly-son': [
      shop('Nhà hàng Cơm Hải sản Đại Hằng', 'Đường Bờ Kè Ven Biển, Thôn Tây, huyện đảo Lý Sơn', CANGAY, 'Nha hang Dai Hang, Ly Son, Quang Ngai, Vietnam', 'Thực đơn hải sản phong phú, có gỏi rong biển, nhum, cua huỳnh đế.'),
      shop('Nhà hàng Hoàng Khuyên', 'Khu vực ven biển trung tâm, huyện đảo Lý Sơn', CANGAY, 'Nha hang Hoang Khuyen, Ly Son, Quang Ngai, Vietnam', 'View biển và hải đăng, hợp ngắm hoàng hôn.')
    ],
    'goi-rong-bien': [
      shop('Nhà hàng Cơm Hải sản Đại Hằng', 'Đường Bờ Kè Ven Biển, Thôn Tây, huyện đảo Lý Sơn', CANGAY, 'Nha hang Dai Hang, Ly Son, Quang Ngai, Vietnam'),
      shop('Hải sản Biển Nhớ', 'Thôn Đông, xã An Vĩnh, huyện đảo Lý Sơn', CANGAY, 'Hai san Bien Nho, Ly Son, Quang Ngai, Vietnam', 'Nổi tiếng cháo nhum, gỏi rong biển.')
    ],
    'nhum-bien': [
      shop('Hải sản Biển Nhớ', 'Thôn Đông, xã An Vĩnh, huyện đảo Lý Sơn', CANGAY, 'Hai san Bien Nho, Ly Son, Quang Ngai, Vietnam', 'Có cháo nhum biển.'),
      shop('Hải sản Thành Lợi', 'Khu vực Bến khách Cầu Cảng, huyện đảo Lý Sơn', CANGAY, 'Hai san Thanh Loi, Ly Son, Quang Ngai, Vietnam', 'Sát cảng, hải sản tươi sống.')
    ],
    'cua-huynh-de': [
      shop('Nhà hàng Cơm Hải sản Đại Hằng', 'Đường Bờ Kè Ven Biển, Thôn Tây, huyện đảo Lý Sơn', CANGAY, 'Nha hang Dai Hang, Ly Son, Quang Ngai, Vietnam', 'Nên hỏi giá niêm yết trước khi gọi.'),
      shop('Hải sản Phát Hải', 'Gần Khách sạn Mường Thanh Lý Sơn, huyện đảo Lý Sơn', CANGAY, 'Hai san Phat Hai, Ly Son, Quang Ngai, Vietnam', 'Hải sản bày sẵn để tự chọn.')
    ],

    /* ---------- Nhóm 5: Núi rừng & Đồng quê ---------- */
    'ca-nien-nuong': [
      area('Quán ăn đồng bào vùng cao Trà Bồng', 'Huyện Trà Bồng, Quảng Ngãi', 'Tra Bong, Quang Ngai, Vietnam', 'Cá niên suối là món theo mùa, nên hỏi trước.'),
      area('Quán ăn vùng Sơn Hà', 'Huyện Sơn Hà, Quảng Ngãi', 'Son Ha, Quang Ngai, Vietnam')
    ],
    'chim-mia': [
      area('Quán đặc sản đồng quê Tư Nghĩa – Mộ Đức', 'Vùng Tư Nghĩa, Mộ Đức, ven TP. Quảng Ngãi', 'chim mia nuong Quang Ngai, Vietnam', 'Ngon nhất vào mùa mía cuối năm.')
    ],

    /* ---------- Nhóm 6: Quà biếu ---------- */
    'ca-bong-kho-tieu': [
      area('Cửa hàng đặc sản quanh Chợ Quảng Ngãi', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'Cho Quang Ngai, Nguyen Nghiem, Quang Ngai, Vietnam', 'Chọn hũ hút chân không để mang đi xa.')
    ],
    'mam-nhum-my-a': [
      area('Làng chài Mỹ Á', 'Xã Phổ Thạnh (Đức Phổ), Quảng Ngãi', 'My A, Duc Pho, Quang Ngai, Vietnam', 'Mua trực tiếp tại cơ sở làm mắm nhum.'),
      area('Cửa hàng đặc sản TP. Quảng Ngãi', 'Khu vực trung tâm TP. Quảng Ngãi', 'dac san Quang Ngai city, Vietnam')
    ],
    'toi-ly-son': [
      area('Chợ Lý Sơn', 'Trung tâm huyện đảo Lý Sơn', 'Cho Ly Son, Quang Ngai, Vietnam', 'Ưu tiên củ nhỏ, vỏ tím nhạt, tép chắc.'),
      area('Cửa hàng đặc sản gần cảng Sa Kỳ', 'Khu vực cảng Sa Kỳ, Bình Sơn', 'Cang Sa Ky, Binh Son, Quang Ngai, Vietnam')
    ],
    'que-tra-bong': [
      area('Làng quế và chợ Trà Bồng', 'Huyện Trà Bồng, Quảng Ngãi', 'Tra Bong, Quang Ngai, Vietnam', 'Mua tại hợp tác xã để có quế chuẩn.'),
      area('Cửa hàng đặc sản TP. Quảng Ngãi', 'Khu vực trung tâm TP. Quảng Ngãi', 'dac san Quang Ngai city, Vietnam')
    ],
    'duong-phoi': [
      area('Chợ Quảng Ngãi', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'Cho Quang Ngai, Nguyen Nghiem, Quang Ngai, Vietnam')
    ],
    'keo-guong-thu-xa': [
      area('Phố cổ Thu Xà – làng nghề kẹo gương', 'Xã Nghĩa Hòa, huyện Tư Nghĩa, Quảng Ngãi', 'Pho co Thu Xa, Tu Nghia, Quang Ngai, Vietnam', 'Mua tận nơi làm kẹo, thường nhộn nhịp dịp Tết.')
    ],
    'mach-nha-mo-duc': [
      area('Làng mạch nha Thi Phổ', 'Xã Đức Phong – Thi Phổ, huyện Mộ Đức, Quảng Ngãi', 'Thi Pho, Mo Duc, Quang Ngai, Vietnam')
    ],
    'banh-no': [
      area('Chợ và cửa hàng bánh truyền thống', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'Cho Quang Ngai, Nguyen Nghiem, Quang Ngai, Vietnam', 'Nhiều nhất dịp Tết.')
    ],
    'banh-it-la-gai': [
      area('Chợ Quảng Ngãi (quầy bánh truyền thống)', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'Cho Quang Ngai, Nguyen Nghiem, Quang Ngai, Vietnam')
    ],
    'banh-bo': [
      area('Chợ Tết và cửa hàng đặc sản', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'Cho Quang Ngai, Nguyen Nghiem, Quang Ngai, Vietnam')
    ],
    'banh-thuan': [
      area('Cửa hàng bánh truyền thống', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'Cho Quang Ngai, Nguyen Nghiem, Quang Ngai, Vietnam')
    ],

    /* ---------- Bổ sung 16 món mở rộng theo khu vực ---------- */
    'heo-ky-tra-bong': [
      area('Quán ẩm thực đồng bào vùng cao Trà Bồng', 'Trung tâm huyện Trà Bồng & Sơn Tây, Quảng Ngãi', 'Tra Bong, Quang Ngai, Vietnam', 'Nên đặt trước nếu đi nhóm đông.')
    ],
    'rau-don-xao-toi': [
      area('Quán cơm & đặc sản vùng cao Trà Bồng – Ba Tơ', 'Huyện Trà Bồng, Ba Tơ, Minh Long, Quảng Ngãi', 'Tra Bong, Quang Ngai, Vietnam')
    ],
    'ca-chach-suoi-kho-nghe': [
      area('Quán ăn đặc sản vùng Sơn Hà – Ba Tơ', 'Huyện Sơn Hà & Ba Tơ, Quảng Ngãi', 'Son Ha, Quang Ngai, Vietnam')
    ],
    'mang-rung-xao': [
      area('Chợ & quán ăn vùng cao Trà Bồng – Sơn Hà', 'Huyện Trà Bồng, Quảng Ngãi', 'Tra Bong, Quang Ngai, Vietnam')
    ],
    'ruou-can-tra-bong': [
      area('Cơ sở đặc sản đồng bào Cor Trà Bồng', 'Huyện Trà Bồng, Quảng Ngãi', 'Tra Bong, Quang Ngai, Vietnam', 'Có thể mua ché nhỏ mang về làm quà.')
    ],
    'oc-tuong-ly-son': [
      shop('Nhà hàng Cơm Hải sản Đại Hằng', 'Đường Bờ Kè Ven Biển, Thôn Tây, huyện đảo Lý Sơn', CANGAY, 'Nha hang Dai Hang, Ly Son, Quang Ngai, Vietnam', 'Hải sản tươi tự chọn, hỏi giá trước khi chế biến.'),
      shop('Hải sản Thành Lợi', 'Khu vực Bến khách Cầu Cảng, huyện đảo Lý Sơn', CANGAY, 'Hai san Thanh Loi, Ly Son, Quang Ngai, Vietnam')
    ],
    'oc-cu-ly-son': [
      shop('Hải sản Biển Nhớ', 'Thôn Đông, xã An Vĩnh, huyện đảo Lý Sơn', CANGAY, 'Hai san Bien Nho, Ly Son, Quang Ngai, Vietnam'),
      area('Dãy quán hải sản bờ kè Thôn Tây', 'Đường Bờ Kè, huyện đảo Lý Sơn', 'Ly Son, Quang Ngai, Vietnam')
    ],
    'cha-ca-ly-son': [
      area('Chợ Lý Sơn & Cảng Sa Kỳ', 'Cầu Cảng Lý Sơn hoặc khu vực Cảng Sa Kỳ', 'Cang Sa Ky, Binh Son, Quang Ngai, Vietnam', 'Có bán chả cá hút chân không mang về.')
    ],
    'hanh-tim-ly-son': [
      area('Chợ Lý Sơn & Vườn hành trên đảo', 'Huyện đảo Lý Sơn, Quảng Ngãi', 'Cho Ly Son, Quang Ngai, Vietnam')
    ],
    'ca-duc-kho-tieu': [
      area('Dãy quán hải sản Bãi biển Mỹ Khê', 'Xã Tịnh Khê, TP. Quảng Ngãi', 'Bai bien My Khe, Tinh Khe, Quang Ngai, Vietnam'),
      area('Khu ẩm thực ven biển Sa Huỳnh', 'Phường Phổ Thạnh, TX. Đức Phổ, Quảng Ngãi', 'Sa Huynh, Duc Pho, Quang Ngai, Vietnam')
    ],
    'muc-mot-nang-sa-huynh': [
      area('Chợ cá & đặc sản biển Sa Huỳnh', 'Phường Phổ Thạnh, TX. Đức Phổ, Quảng Ngãi', 'Sa Huynh, Duc Pho, Quang Ngai, Vietnam'),
      area('Cửa hàng hải sản đặc sản TP. Quảng Ngãi', 'Trung tâm TP. Quảng Ngãi', 'dac san Quang Ngai city, Vietnam')
    ],
    'banh-canh-cha-ca': [
      area('Quán bánh canh quanh Chợ Quảng Ngãi & Quang Trung', 'Trung tâm TP. Quảng Ngãi', 'banh canh cha ca Quang Ngai, Vietnam', 'Đông khách vào buổi sáng và xế chiều.')
    ],
    'muoi-sa-huynh': [
      area('Cánh đồng muối Sa Huỳnh', 'Phường Phổ Thạnh, TX. Đức Phổ, Quảng Ngãi', 'Canh dong muoi Sa Huynh, Duc Pho, Quang Ngai, Vietnam', 'Nên ghé mùa nắng để ngắm ruộng muối và mua tận nơi.')
    ],
    'banh-tet-quang-ngai': [
      area('Chợ Quảng Ngãi & Làng quê Mộ Đức – Tư Nghĩa', 'Khu vực Chợ Quảng Ngãi hoặc huyện Mộ Đức', 'Cho Quang Ngai, Nguyen Nghiem, Quang Ngai, Vietnam')
    ],
    'banh-trang-cuon-thit-heo': [
      area('Quán bánh tráng cuốn thịt heo TP. Quảng Ngãi', 'Trung tâm TP. Quảng Ngãi', 'banh trang cuon thit heo Quang Ngai, Vietnam')
    ],
    'che-xoa-xoa-hat-luu': [
      area('Khu chè Chợ Quảng Ngãi & Quán chè trung tâm', 'Khu vực Chợ Quảng Ngãi, TP. Quảng Ngãi', 'quan che Quang Ngai city, Vietnam')
    ]
  };
})();
