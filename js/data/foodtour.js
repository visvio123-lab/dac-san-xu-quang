/**
 * Dữ liệu 3 Lộ trình thưởng thức 1 ngày tại Quảng Ngãi (kết hợp địa chỉ quán thực tế & Google Maps).
 * Mỗi chặng được sắp xếp theo thứ tự địa lý thuận đường (hạn chế đi vòng) và gắn id món để mở Modal chi tiết.
 */
window.XQ = window.XQ || {};

XQ.foodTours = [
  {
    id: 'tp-quang-ngai-1-ngay',
    name: 'Tuyến 1: 1 ngày ăn trọn Nội thành TP. Quảng Ngãi',
    short: 'Nội thành TP. Quảng Ngãi',
    badge: 'Thuận đường · ~7 km',
    distance: 'Tổng quãng đường ~7 km (gom gọn quanh trung tâm, không phải đi vòng)',
    budget: '200.000 – 350.000đ / người (chưa tính quà)',
    summary: 'Lộ trình đi vòng tròn gọn gàng quanh trung tâm TP. Quảng Ngãi: bắt đầu từ trục Trần Hưng Đạo – Hùng Vương buổi sáng, qua Nghĩa Lộ buổi chiều, kết thúc ở Phan Đình Phùng – Nguyễn Du buổi tối và ghé chợ Quảng Ngãi mua quà.',
    stops: [
      {
        time: '06:30 – 08:00',
        period: 'Sáng sớm',
        leg: 'Điểm xuất phát (trung tâm phố cũ)',
        title: 'Khởi đầu ngày mới với Don nóng hoặc Mì Quảng',
        area: 'Trần Hưng Đạo · Hùng Vương',
        note: 'Bắt đầu ở khu trung tâm gần sông Trà Khúc. Gọi một tô don nóng bẻ bánh tráng mè, cắn trái ớt xiêm (thêm trứng vịt lộn nếu thích béo), hoặc ghé quán Mì Quảng Thu Búp cách đó chỉ 400m.',
        tip: 'Nên đi trước 8:00 để ăn lúc nước don còn ngọt trong và quán chưa quá đông.',
        places: [
          {
            name: 'Quán Don 16 Trần Hưng Đạo',
            address: '16 Trần Hưng Đạo, TP. Quảng Ngãi',
            hours: '06:00 – 10:30',
            highlight: 'Quán don lâu đời ngay ngã ba Quang Trung – Trần Hưng Đạo',
            mapQuery: '16 Tran Hung Dao, Quang Ngai, Vietnam'
          },
          {
            name: 'Mì Quảng Thu Búp',
            address: '234 Hùng Vương, TP. Quảng Ngãi',
            hours: '06:00 – 10:30',
            highlight: 'Cách quán don ~400m, sợi mì dai, nước dùng thanh đậm vị',
            mapQuery: 'Mi Quang Thu Bup, 234 Hung Vuong, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['don-song-tra', 'mi-quang']
      },
      {
        time: '11:30 – 13:00',
        period: 'Bữa trưa',
        leg: 'Di chuyển ~1 km (4 phút đi xe)',
        title: 'Bữa trưa no lòng với Cơm gà ta xứ Quảng',
        area: 'Trần Hưng Đạo · Phan Bội Châu',
        note: 'Đi thẳng dọc trục Trần Hưng Đạo xuống phía nam khoảng 1 km là tới quán cơm gà Cô Nguyệt (hoặc rẽ sang Phan Bội Châu ăn Cơm gà Nhung). Cơm vàng ươm nấu nước luộc gà, gà ta xé phay chắc thịt ăn kèm hành tím muối.',
        tip: 'Quán có không gian thoáng mát, rất hợp nghỉ chân tránh nắng trưa miền Trung.',
        places: [
          {
            name: 'Cơm Gà Cô Nguyệt',
            address: '181 – 183 Trần Hưng Đạo, TP. Quảng Ngãi',
            hours: '10:00 – 20:30',
            highlight: 'Thương hiệu cơm gà nổi tiếng lâu năm ngay trục chính',
            mapQuery: 'Com Ga Co Nguyet, 181 Tran Hung Dao, Quang Ngai, Vietnam'
          },
          {
            name: 'Cơm Gà Nhung',
            address: '267 Phan Bội Châu, TP. Quảng Ngãi',
            hours: '10:00 – 20:30',
            highlight: 'Hơn 20 năm tuổi, gà ta đất cát thơm ngọt',
            mapQuery: 'Com Ga Nhung, 267 Phan Boi Chau, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['com-ga', 'bun-mam-nem']
      },
      {
        time: '15:30 – 17:00',
        period: 'Xế chiều',
        leg: 'Di chuyển ~1,2 km (5 phút đi xe)',
        title: 'Giờ vàng ăn vặt: Bánh bèo nóng & Bò hít cay nồng',
        area: 'Khu vực Nghĩa Lộ · Nguyễn Tự Tân',
        note: 'Buổi chiều mát mẻ, ghé khu Nghĩa Lộ thưởng thức mâm bánh bèo chén nóng hổi phủ tép cháy, bánh mì giòn và mỡ hẹ, rồi chạy thêm vài trăm mét tới quán Cô Năm hít hà đĩa bò hít cay xè tuổi học trò.',
        tip: 'Mỗi món gọi phần nhỏ để còn bụng cho bữa tối bánh xèo – ốc hút.',
        places: [
          {
            name: 'Bánh Bèo Chén 264 Nguyễn Tự Tân',
            address: '264 Nguyễn Tự Tân, P. Nghĩa Lộ, TP. Quảng Ngãi',
            hours: '14:00 – 19:00',
            highlight: 'Bánh đổ chén mỏng, bán theo mâm giá bình dân',
            mapQuery: '264 Nguyen Tu Tan, Quang Ngai, Vietnam'
          },
          {
            name: 'Quán Cô Năm Bò Hít',
            address: '11 Trần Quang Diệu, TP. Quảng Ngãi',
            hours: '14:30 – 20:30',
            highlight: 'Gỏi đu đủ gan bò rim ớt cay nức mũi, xúc bánh tráng nướng',
            mapQuery: '11 Tran Quang Dieu, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['banh-beo', 'bo-hit']
      },
      {
        time: '18:30 – 20:15',
        period: 'Buổi tối',
        leg: 'Di chuyển ~1,5 km (6 phút đi xe)',
        title: 'Bánh xèo khuôn đất, Ram bắp & Tăng 2 Ốc hút đêm',
        area: 'Phan Đình Phùng · Nguyễn Du',
        note: 'Trục Phan Đình Phùng là thiên đường bánh xèo và ram bắp. Ngồi bên bếp than chờ bánh xèo vừa nhấc khuôn, cuốn ram bắp chấm mắm chua ngọt; ăn xong chạy ~1 km sang Nguyễn Du nhâm nhi đĩa ốc hút Cây Me hơn 30 năm tuổi.',
        tip: 'Nếu muốn thử bánh xèo nhân vịt độc đáo, ghé Bánh Xèo 469 Lê Lợi gần đó.',
        places: [
          {
            name: 'Bánh Xèo & Ram Bắp 124 Phan Đình Phùng',
            address: '124 Phan Đình Phùng, P. Nguyễn Nghiêm, TP. Quảng Ngãi',
            hours: '15:00 – 21:30',
            highlight: 'Có đủ cả bánh xèo khuôn đất lẫn ram bắp giòn rụm tại 1 điểm',
            mapQuery: '124 Phan Dinh Phung, Quang Ngai, Vietnam'
          },
          {
            name: 'Ông Già Quán (Bánh xèo tôm nhảy)',
            address: '400 Phan Đình Phùng, TP. Quảng Ngãi',
            hours: '15:00 – 21:30',
            highlight: 'Vỏ bánh vàng nghệ giòn thơm, tôm tươi đầy đặn',
            mapQuery: '400 Phan Dinh Phung, Quang Ngai, Vietnam'
          },
          {
            name: 'Ốc Hút Cây Me',
            address: '141 Nguyễn Du, P. Nghĩa Chánh, TP. Quảng Ngãi',
            hours: '16:00 – 22:00',
            highlight: 'Quán ốc gạo cội hơn 30 năm, xào sả ớt béo cay cực cuốn',
            mapQuery: 'Oc Hut Cay Me, 141 Nguyen Du, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['banh-xeo', 'ram-bap', 'oc-hut', 'ram-thit-nuong']
      },
      {
        time: '20:30 (hoặc sáng hôm sau)',
        period: 'Mua quà mang về',
        leg: 'Vòng về trung tâm (~1,5 km)',
        title: 'Ghé Chợ Quảng Ngãi chọn đặc sản đóng hộp làm quà',
        area: 'Chợ Quảng Ngãi · Đường Quang Trung',
        note: 'Khép lại hành trình bằng việc mua vài hũ cá bống sông Trà kho tiêu, kẹo gương Thu Xà, mạch nha Mộ Đức và đường phổi làm quà biếu người thân.',
        tip: 'Chợ trung tâm đông vui nhất vào buổi sáng; buổi tối bạn có thể ghé các cửa hàng đặc sản mở muộn dọc đường Quang Trung.',
        places: [
          {
            name: 'Chợ Quảng Ngãi (Khu đặc sản địa phương)',
            address: 'Đường Nguyễn Nghiêm, TP. Quảng Ngãi',
            hours: '06:00 – 18:30 (Cửa hàng đặc sản quanh chợ mở tới 21:00)',
            highlight: 'Tập trung đủ cá bống sông Trà, kẹo gương, mạch nha, đường phổi',
            mapQuery: 'Cho Quang Ngai, Nguyen Nghiem, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['ca-bong-kho-tieu', 'keo-guong-thu-xa', 'mach-nha-mo-duc', 'duong-phoi']
      }
    ]
  },

  {
    id: 'song-tra-my-khe-thu-xa',
    name: 'Tuyến 2: Sông Trà – Xã An Phú (Cổ Lũy) – Biển Mỹ Khê – Phố cổ Thu Xà',
    short: 'An Phú – Biển Mỹ Khê – Thu Xà',
    badge: 'Ven sông ra biển · ~28 km',
    distance: 'Cung đường 1 chiều hướng Đông ra cửa biển Cổ Lũy – Mỹ Khê rồi vòng qua phố cổ Thu Xà về TP',
    budget: '220.000 – 400.000đ / người',
    summary: 'Lộ trình kết hợp du ngoạn cảnh đẹp và ẩm thực bản địa: ăn don chính gốc ven sông Trà (Nghĩa Phú), qua cầu Cổ Lũy thưởng thức bánh bèo và hải sản biển Mỹ Khê, chiều rẽ qua phố cổ Thu Xà mua kẹo gương tận lò.',
    stops: [
      {
        time: '07:00 – 08:30',
        period: 'Sáng sớm bên cửa sông',
        leg: 'Xuất phát từ trung tâm TP đi hướng Đông ~8 km',
        title: 'Về cái nôi con don ăn Don chính gốc Nghĩa Phú',
        area: 'Xã An Phú (Nghĩa Phú cũ) · Cửa biển Cổ Lũy',
        note: 'Nghĩa Phú là quê hương của nghề cào don sông Trà. Ngồi trong không gian làng quê yên bình thưởng thức tô don 100% don tự nhiên, nước ngọt thanh không pha hến, thêm cái bánh tráng đập giòn mềm.',
        tip: 'Tiện đường chụp ảnh bình minh làng chài Cổ Lũy và cầu Cổ Lũy dây văng cực đẹp.',
        places: [
          {
            name: 'Quán Don Cô Thành (Nghĩa Phú)',
            address: 'Thôn Phú Thọ, Xã Nghĩa Phú (Xã An Phú), TP. Quảng Ngãi',
            hours: '06:00 – 11:00',
            highlight: 'Địa chỉ trứ danh về don chính gốc sông Trà Khúc',
            mapQuery: 'Quan Don Co Thanh, Nghia Phu, Quang Ngai, Vietnam'
          },
          {
            name: 'Làng chài & Cầu Cổ Lũy',
            address: 'Cửa biển Cổ Lũy, Xã An Phú, TP. Quảng Ngãi',
            hours: 'Cả ngày',
            highlight: 'Điểm ngắm sông Trà đổ ra biển và thuyền thúng làng chài',
            mapQuery: 'Cau Co Luy, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['don-song-tra', 'banh-trang-dap']
      },
      {
        time: '09:30 – 11:00',
        period: 'Sáng muộn ven biển',
        leg: 'Qua cầu Cổ Lũy hướng Bắc ~5 km (10 phút)',
        title: 'Thưởng thức Bánh bèo Bà Lợi trứ danh biển Mỹ Khê',
        area: 'Vòng xoay biển Mỹ Khê · Xã Tịnh Khê',
        note: 'Qua cầu Cổ Lũy chạy thẳng đường ven biển là tới vòng xoay biển Mỹ Khê. Ghé quán Bánh Bèo Bà Lợi hơn 25 năm tuổi để ăn bánh bèo chén nóng nhân tôm thịt sền sệt chuẩn vị vùng biển.',
        tip: 'Quán bán rất đắt vào buổi sáng, nên ghé trước 10:30 để còn đủ bánh nóng.',
        places: [
          {
            name: 'Bánh Bèo Bà Lợi (Biển Mỹ Khê)',
            address: 'Khu vực vòng xoay biển Mỹ Khê, Xã Tịnh Khê, TP. Quảng Ngãi',
            hours: '06:00 – 11:30',
            highlight: 'Thương hiệu bánh bèo nổi tiếng hơn 25 năm gần bãi biển Mỹ Khê',
            mapQuery: 'Banh Beo Ba Loi, My Khe, Tinh Khe, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['banh-beo', 'banh-xeo']
      },
      {
        time: '12:00 – 14:30',
        period: 'Trưa & Nghỉ mát biển',
        leg: 'Ngay khu vực bãi biển Mỹ Khê (~1 km)',
        title: 'Hải sản tươi sống, Bún cá ngừ & Xu xoa giải nhiệt',
        area: 'Bãi biển Mỹ Khê · Xã Tịnh Khê',
        note: 'Dùng bữa trưa ngay các quán hải sản dọc bờ biển Mỹ Khê với cá ngừ tươi, gỏi ốc hoa chuối, ram chả cá đỏ củ dai ngọt và tráng miệng ly xu xoa nước đường gừng mát rượi.',
        tip: 'Nên hỏi giá hải sản theo ký trước khi chế biến và chọn bàn hướng biển đón gió.',
        places: [
          {
            name: 'Bãi biển Mỹ Khê Quảng Ngãi',
            address: 'Xã Tịnh Khê, TP. Quảng Ngãi',
            hours: 'Cả ngày',
            highlight: 'Bãi cát mịn dài 7 km với dãy quán hải sản và chè xu xoa ven biển',
            mapQuery: 'Bai bien My Khe, Tinh Khe, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['bun-ca-ngu', 'goi-oc', 'ram-cha-ca', 'xu-xoa']
      },
      {
        time: '16:00 – 17:30',
        period: 'Chiều thăm làng nghề',
        leg: 'Quay lại phía Nam sông Trà ~12 km (20 phút)',
        title: 'Ghé Phố cổ Thu Xà mua Kẹo gương tận làng nghề',
        area: 'Phố cổ Thu Xà · Xã Nghĩa Hòa, Tư Nghĩa',
        note: 'Trên đường chiều quay về, rẽ vào phố cổ Thu Xà yên tĩnh với những ngôi nhà rêu phong, tìm hiểu nghề làm kẹo gương trăm năm và mua kẹo gương, bánh nổ mới ra lò.',
        tip: 'Kết hợp dạo phố cổ lúc nắng chiều dịu để chụp ảnh rất nên thơ.',
        places: [
          {
            name: 'Phố cổ Thu Xà – Làng nghề Kẹo Gương',
            address: 'Xã Nghĩa Hòa, Huyện Tư Nghĩa, Quảng Ngãi',
            hours: '07:00 – 18:00',
            highlight: 'Cái nôi của đặc sản Kẹo gương Thu Xà trứ danh xứ Quảng',
            mapQuery: 'Pho co Thu Xa, Tu Nghia, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['keo-guong-thu-xa', 'banh-no']
      }
    ]
  },

  {
    id: 'dao-ly-son-1-ngay',
    name: 'Tuyến 3: 1 ngày Đảo Lý Sơn – Cảng Sa Kỳ & Vương quốc Tỏi',
    short: 'Đảo Lý Sơn & Cảng Sa Kỳ',
    badge: 'Biển đảo núi lửa',
    distance: 'Di chuyển tàu cao tốc từ Cảng Sa Kỳ (~35–45 phút) + đi xe máy vòng quanh Đảo Lớn (~12 km)',
    budget: '450.000 – 850.000đ / người (tùy hải sản theo mùa)',
    summary: 'Hành trình trọn vẹn trên hòn đảo núi lửa: lên tàu sáng sớm tại Cảng Sa Kỳ, ăn trưa hải sản tươi ngay Bờ Kè Thôn Tây, ngắm hoàng hôn Cổng Tò Vò cùng nhum nướng và mua tỏi Lý Sơn tại chợ đảo trước khi về.',
    stops: [
      {
        time: '06:30 – 07:30',
        period: 'Trước chuyến tàu sáng',
        leg: 'Tập trung tại Cảng Sa Kỳ (cách TP. Quảng Ngãi ~22 km)',
        title: 'Lót dạ nhẹ nhàng tại khu vực Cảng Sa Kỳ',
        area: 'Cảng Sa Kỳ · Xã Bình Châu, Bình Sơn',
        note: 'Ăn sáng nhẹ với bún cá biển hoặc bánh bèo gần cảng để đủ năng lượng mà không bị đầy bụng khi đi tàu cao tốc ra đảo.',
        tip: 'Nên đặt vé tàu cao tốc trước và mang theo CCCD; có mặt tại cảng trước giờ tàu 30 phút.',
        places: [
          {
            name: 'Cảng Sa Kỳ (Bến tàu đi Lý Sơn)',
            address: 'Xã Bình Châu, Huyện Bình Sơn, Quảng Ngãi',
            hours: 'Tàu chạy nhiều chuyến từ 07:30 sáng',
            highlight: 'Điểm xuất phát tàu cao tốc ra đảo Lý Sơn (mất ~35–45 phút)',
            mapQuery: 'Cang Sa Ky, Binh Chau, Binh Son, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['bun-ca-ngu', 'banh-beo']
      },
      {
        time: '11:30 – 13:30',
        period: 'Bữa trưa trên đảo',
        leg: 'Cập Cầu Cảng Lý Sơn → chạy dọc Bờ Kè Thôn Tây (~1,5 km)',
        title: 'Đại tiệc Gỏi tỏi, Gỏi rong biển & Cua huỳnh đế',
        area: 'Đường Bờ Kè Thôn Tây · Cầu Cảng Lý Sơn',
        note: 'Sau buổi sáng tham quan Chùa Hang – Đỉnh Thới Lới, ghé Nhà hàng Đại Hằng (Bờ Kè Thôn Tây) hoặc Hải sản Thành Lợi (Cầu Cảng) để tự chọn hải sản tươi sống và thưởng thức gỏi tỏi non đặc trưng chỉ có ở Lý Sơn.',
        tip: 'Nhớ hỏi giá niêm yết trước khi gọi các món theo thời giá như cua huỳnh đế.',
        places: [
          {
            name: 'Nhà hàng Cơm Hải sản Đại Hằng',
            address: 'Đường Bờ Kè Ven Biển, Thôn Tây, Huyện đảo Lý Sơn, Quảng Ngãi',
            hours: '08:00 – 22:00',
            highlight: 'Top quán hải sản nổi tiếng nhất đảo với gỏi rong biển, gỏi tỏi, cua huỳnh đế',
            mapQuery: 'Nha hang Dai Hang, Ly Son, Quang Ngai, Vietnam'
          },
          {
            name: 'Hải sản Thành Lợi (Cầu Cảng)',
            address: 'Khu vực Bến khách Cầu Cảng, Huyện đảo Lý Sơn, Quảng Ngãi',
            hours: '08:00 – 22:00',
            highlight: 'Ngay sát bến cảng, hải sản tươi sống đánh bắt trong ngày',
            mapQuery: 'Hai san Thanh Loi, Ly Son, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['goi-toi-ly-son', 'goi-rong-bien', 'cua-huynh-de']
      },
      {
        time: '16:30 – 18:30',
        period: 'Chiều hoàng hôn',
        leg: 'Di chuyển hướng Tây ~2 km ra Cổng Tò Vò',
        title: 'Ngắm hoàng hôn Cổng Tò Vò, ăn Xu xoa & Nhum nướng',
        area: 'Cổng Tò Vò · Ven biển Thôn Tây, Lý Sơn',
        note: 'Đón nắng chiều buông qua vòm đá núi lửa Cổng Tò Vò, giải nhiệt bằng ly xu xoa rong biển mát lành rồi ngồi quán ven biển (hoặc tầng 2 Nhà hàng Hoàng Khuyên) thưởng thức nhum biển nướng mỡ hành nóng hổi.',
        tip: 'Cổng Tò Vò đẹp nhất vào khoảng 17:00 – 17:45; nên tới sớm chọn góc ngắm biển.',
        places: [
          {
            name: 'Cổng Tò Vò – Đảo Lý Sơn',
            address: 'Thôn Tây, Huyện đảo Lý Sơn, Quảng Ngãi',
            hours: 'Cả ngày (đẹp nhất 17:00 – 18:00)',
            highlight: 'Biểu tượng núi lửa Lý Sơn, quanh khu vực có nhiều hàng xu xoa & hải sản nướng',
            mapQuery: 'Cong To Vo, Ly Son, Quang Ngai, Vietnam'
          },
          {
            name: 'Nhà hàng Hoàng Khuyên Lý Sơn',
            address: 'Khu vực ven biển trung tâm, Huyện đảo Lý Sơn, Quảng Ngãi',
            hours: '09:00 – 22:00',
            highlight: 'View biển thoáng mát, lý tưởng ngắm hoàng hôn và ăn tối',
            mapQuery: 'Nha hang Hoang Khuyen, Ly Son, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['xu-xoa', 'nhum-bien']
      },
      {
        time: 'Sáng hôm sau (hoặc trước giờ tàu về)',
        period: 'Quà đảo mang về',
        leg: 'Quay về khu Cầu Cảng (~1,5 km)',
        title: 'Chọn Tỏi Lý Sơn & Mắm nhum tại Chợ đảo',
        area: 'Chợ Lý Sơn · Gần Cầu Cảng',
        note: 'Ngay sát bến tàu là khu chợ đảo và các sạp nông sản của người dân. Mua chùm tỏi Lý Sơn (hoặc tỏi cô đơn), rong biển khô và hũ mắm nhum mang về đất liền.',
        tip: 'Tỏi Lý Sơn chuẩn củ nhỏ vừa, vỏ trắng ngà hơi tím, tép đều và mùi thơm dịu không quá hăng.',
        places: [
          {
            name: 'Chợ Lý Sơn (Khu Cầu Cảng)',
            address: 'Trung tâm Huyện đảo Lý Sơn, Quảng Ngãi',
            hours: '05:30 – 17:30',
            highlight: 'Nơi mua tỏi nhiều tép, tỏi cô đơn và rong biển khô trực tiếp từ người dân đảo',
            mapQuery: 'Cho Ly Son, Quang Ngai, Vietnam'
          }
        ],
        dishes: ['toi-ly-son', 'mam-nhum-my-a']
      }
    ]
  }
];
