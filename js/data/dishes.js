/**
 * Dữ liệu chi tiết các món đặc sản Quảng Ngãi.
 *
 * Cấu trúc mỗi món:
 *  id          : mã định danh không dấu (dùng cho URL ?id= và tên file ảnh)
 *  name        : tên món
 *  category    : id nhóm món (xem categories.js)
 *  subgroup    : nhóm con (chỉ dùng cho nhóm Quà biếu)
 *  regions     : danh sách id khu vực (xem regions.js) – dùng cho bộ lọc
 *  area        : nhãn địa danh xuất xứ hiển thị trên thẻ
 *  bestseller  : true nếu là món best-seller
 *  featured    : thứ tự hiển thị ở mục "Món nổi bật" (null nếu không)
 *  image       : đường dẫn ảnh trong assets/images/ (thiếu ảnh sẽ tự hiển thị minh họa)
 *  short       : mô tả ngắn trên thẻ
 *  origin      : Xuất xứ & Câu chuyện
 *  ingredients : Nguyên liệu đặc trưng
 *  steps       : Cách chế biến
 *  enjoy       : Cách thưởng thức chuẩn vị
 *  where       : Gợi ý khu vực thưởng thức / mua về
 *  season      : mùa ngon
 *  price       : giá tham khảo
 *  tags        : từ khóa tìm kiếm bổ sung (không dấu)
 */
window.XQ = window.XQ || {};

XQ.dishes = [
  /* ============ NHÓM 1: MÓN CHÍNH & MÓN NƯỚC ============ */
  {
    id: 'don-song-tra',
    name: 'Don sông Trà',
    category: 'mon-chinh',
    regions: ['an-phu-co-luy', 'tp-quang-ngai'],
    area: 'Sông Trà · Nghĩa Phú · Cổ Lũy',
    bestseller: true,
    featured: 1,
    image: 'dishes/don-song-tra.jpg',
    short: 'Nước dùng ngọt thanh từ con don sông Trà, ăn kèm bánh tráng nướng bẻ vụn và ớt xiêm – món ăn “hồn quê” của người Quảng Ngãi.',
    origin: 'Con don là loài nhuyễn thể hai mảnh vỏ nhỏ, sống vùi trong cát ở vùng nước lợ hạ lưu sông Trà Khúc – nơi nước ngọt đầu nguồn gặp nước mặn từ cửa biển Cổ Lũy. Từ bao đời, người dân Nghĩa Phú, Nghĩa An (nay thuộc xã An Phú) dầm mình dưới sông với chiếc cào tre để “cào don” từ tờ mờ sáng. Don chỉ có ở vài dòng sông của Quảng Ngãi, nên với người con xa xứ, một tô don nóng là cả một miền ký ức quê nhà.',
    ingredients: [
      'Con don tươi cào từ sông Trà, vỏ xanh vàng, ruột ngọt',
      'Nước luộc don để lắng trong – linh hồn của nước dùng',
      'Hành lá, hành tím phi thơm',
      'Bánh tráng mè nướng giòn rụm',
      'Ớt xiêm xanh – loại ớt nhỏ cay nồng đặc trưng',
      'Chút tiêu, gia vị nêm vừa miệng'
    ],
    steps: [
      'Ngâm don trong nước sạch cho nhả hết cát, chà rửa nhiều lần.',
      'Luộc don đến khi vỏ hé miệng, vớt ra; nước luộc để lắng, gạn lấy phần nước trong.',
      'Đãi, lể don thủ công để tách thịt khỏi vỏ – công đoạn kỳ công nhất, thường do các bà, các mẹ đảm nhận.',
      'Xào thịt don với hành phi, nêm nếm vừa ăn cho dậy mùi thơm.',
      'Đun sôi lại nước luộc don, nêm nhạt để giữ vị ngọt tự nhiên.'
    ],
    enjoy: [
      'Cho thịt don xào vào tô, chan nước dùng nóng, rắc hành lá và tiêu.',
      'Bẻ vụn bánh tráng nướng thả vào tô cho giòn rụm, hoặc ăn kèm bánh mì, cơm, bánh ướt.',
      'Cắn kèm ớt xiêm xanh hoặc thêm ruốc ớt để thấy vị cay nồng hòa vị ngọt thanh.',
      'Ăn khi còn bốc khói, vào buổi sáng sớm như người Quảng Ngãi vẫn làm.'
    ],
    where: [
      'Các quán don ven đê sông Trà Khúc, khu vực Nghĩa Phú – Cổ Lũy (xã An Phú).',
      'Hàng don quanh chợ Quảng Ngãi và các con hẻm trung tâm TP. Quảng Ngãi.',
      'Don xào đóng hũ, hút chân không tại cửa hàng đặc sản – có thể mang về làm quà.'
    ],
    season: 'Quanh năm, ngon nhất mùa nắng',
    price: '15.000 – 30.000đ/tô',
    tags: ['hen', 'canh don', 'don xao', 'song tra', 'nuoc']
  },
  {
    id: 'mi-quang',
    name: 'Mì Quảng Quảng Ngãi',
    category: 'mon-chinh',
    regions: ['tp-quang-ngai'],
    area: 'Trung tâm TP. Quảng Ngãi',
    featured: 4,
    image: 'dishes/mi-quang.jpg',
    short: 'Kiểu Quảng Ngãi nhiều nước hơn, vị thanh nhẹ; nhân tôm thịt, gà hay cá lóc, ăn kèm rau sống và bánh tráng mè.',
    origin: 'Mì Quảng là món ăn chung của cả dải đất xứ Quảng, nhưng khi theo chân người dân vào Quảng Ngãi, tô mì đã được “địa phương hóa”: nước dùng nhiều hơn, vị thanh và ngọt từ xương hầm thay vì đậm sệt. Ở trung tâm TP. Quảng Ngãi, mì Quảng là bữa sáng quen thuộc, mỗi quán lại có một kiểu nhân riêng – từ tôm thịt truyền thống đến gà ta, cá lóc đồng.',
    ingredients: [
      'Sợi mì gạo bản to, nhuộm vàng nghệ hoặc để trắng',
      'Tôm đất, thịt ba chỉ, gà ta hoặc cá lóc',
      'Nước dùng hầm xương ngọt thanh',
      'Đậu phộng rang, hành phi, trứng cút',
      'Bánh tráng mè nướng',
      'Rau sống: xà lách, cải con, húng quế, bắp chuối bào'
    ],
    steps: [
      'Ngâm, xay bột gạo rồi tráng thành lá mì, xắt sợi bản to.',
      'Ướp tôm thịt (hoặc gà, cá lóc) với hành tím, nghệ, nước mắm rồi xào săn.',
      'Hầm xương heo lấy nước dùng, nêm thanh, cho phần nhân đã xào vào.',
      'Xếp rau sống dưới đáy tô, cho mì, nhân, chan nước dùng ngập xâm xấp.'
    ],
    enjoy: [
      'Bẻ bánh tráng mè vào tô, rắc đậu phộng, hành phi.',
      'Vắt chút chanh, thêm ớt xanh hoặc sa tế cho dậy vị.',
      'Trộn đều rau sống với mì để rau hơi tái, giữ độ giòn tươi.'
    ],
    where: [
      'Các quán mì Quảng buổi sáng ở trung tâm TP. Quảng Ngãi.',
      'Chợ Quảng Ngãi và các chợ phường có bán mì sợi tươi để mua về tự nấu.'
    ],
    season: 'Quanh năm',
    price: '20.000 – 40.000đ/tô',
    tags: ['my quang', 'ca loc', 'ga', 'tom thit', 'nuoc']
  },
  {
    id: 'banh-xeo',
    name: 'Bánh xèo Quảng Ngãi',
    category: 'mon-chinh',
    regions: ['tp-quang-ngai', 'an-phu-co-luy'],
    area: 'TP. Quảng Ngãi · Xã An Phú',
    bestseller: true,
    featured: 2,
    image: 'dishes/banh-xeo.jpg',
    short: 'Bánh nhỏ đúc khuôn đất nung, vỏ mềm thơm, nhân tôm, mực sữa, thịt hoặc vịt băm; cuốn rau sống chấm mắm nêm.',
    origin: 'Khác với chiếc bánh xèo to bản miền Nam, bánh xèo Quảng Ngãi nhỏ chừng lòng bàn tay, được đổ trong những chiếc khuôn đất nung xếp thành dãy trên bếp than hồng. Tiếng bột “xèo” khi chạm khuôn nóng chính là nguồn gốc tên gọi. Món bánh gắn với những chiều mưa xứ Quảng, nhất là ở trung tâm thành phố và vùng ven biển An Phú, nơi nhân bánh luôn có tôm, mực tươi vừa cập bến.',
    ingredients: [
      'Bột gạo xay ngâm qua đêm, pha chút nghệ và hành lá',
      'Tôm đất, mực sữa tươi từ biển Quảng Ngãi',
      'Thịt ba chỉ hoặc thịt vịt băm',
      'Giá đỗ, trứng gà hoặc trứng vịt',
      'Khuôn đất nung giữ nhiệt – bí quyết cho vỏ bánh mềm, thơm'
    ],
    steps: [
      'Gạo ngâm mềm, xay nhuyễn thành bột nước, pha nghệ, muối, hành lá.',
      'Làm nóng khuôn đất trên bếp than, quét lớp dầu mỏng.',
      'Cho nhân tôm, mực, thịt vào khuôn, xèo nhẹ rồi đổ bột, thêm giá và trứng.',
      'Đậy nắp vung đất vài phút đến khi bánh chín vàng rìa, ruột mềm.'
    ],
    enjoy: [
      'Cuốn bánh với xà lách, cải, rau thơm, khế chua, chuối chát.',
      'Chấm mắm nêm pha thơm (dứa), tỏi ớt – hoặc nước mắm ớt tỏi chua ngọt.',
      'Ăn ngay khi vừa nhấc khỏi khuôn, lúc bánh còn nóng hổi và thơm mùi gạo.'
    ],
    where: [
      'Các quán bánh xèo ở trung tâm TP. Quảng Ngãi, đông nhất vào chiều tối.',
      'Hàng bánh xèo vùng ven biển xã An Phú (Nghĩa Phú, Nghĩa An cũ) – nhân hải sản tươi.'
    ],
    season: 'Quanh năm, ngon nhất những chiều mưa',
    price: '3.000 – 10.000đ/cái',
    tags: ['banh xeo', 'khuon dat', 'muc', 'vit', 'tom']
  },
  {
    id: 'bun-ca-ngu',
    name: 'Bún cá ngừ um / Bún chả cá',
    category: 'mon-chinh',
    regions: ['an-phu-co-luy', 'tp-quang-ngai'],
    area: 'Vùng biển Nghĩa An · TP. Quảng Ngãi',
    image: 'dishes/bun-ca-ngu.jpg',
    short: 'Nước dùng đậm đà vị thơm (dứa), cà chua và cá ngừ tươi um mềm, thêm chả cá dai ngọt.',
    origin: 'Biển Quảng Ngãi cho những mẻ cá ngừ, cá thu tươi rói. Người dân làng biển Nghĩa An đem cá um với cà chua, thơm cho mềm thấm, rồi chan cùng bún tươi thành món ăn sáng dân dã. Tô bún có đủ vị chua thanh của dứa, ngọt của cá và thơm của nghệ, hành – một nét rất “biển” giữa lòng phố thị.',
    ingredients: [
      'Cá ngừ tươi cắt khúc, chả cá biển Quảng Ngãi',
      'Cà chua chín, thơm (dứa) chín cây',
      'Nghệ tươi, hành tím, sả',
      'Bún tươi sợi nhỏ',
      'Rau sống, bắp chuối bào, ớt tươi'
    ],
    steps: [
      'Cá ngừ làm sạch, cắt khúc, ướp nghệ, nước mắm, hành tỏi.',
      'Um (kho liu riu) cá với cà chua, thơm đến khi cá săn, thấm màu đỏ cam.',
      'Nấu nước dùng từ xương cá và xương heo, cho cá um và chả cá vào.',
      'Trụng bún, chan nước dùng, xếp cá, chả cá, rắc hành ngò.'
    ],
    enjoy: [
      'Ăn kèm rau sống, bắp chuối bào và vài lát ớt tươi.',
      'Thêm chút ớt bột hoặc tương ớt nhà làm, vắt chanh.',
      'Có nơi ăn kèm bánh tráng nướng để bẻ vào tô.'
    ],
    where: [
      'Chợ cá và các quán bún vùng biển Nghĩa An (xã An Phú).',
      'Quán bún cá, bún chả cá buổi sáng ở trung tâm TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm, nhiều cá tươi vào mùa biển lặng',
    price: '20.000 – 35.000đ/tô',
    tags: ['bun ca', 'cha ca', 'ca ngu', 'nuoc']
  },
  {
    id: 'bun-mam-nem',
    name: 'Bún mắm nêm',
    category: 'mon-chinh',
    regions: ['tp-quang-ngai'],
    area: 'TP. Quảng Ngãi',
    image: 'dishes/bun-mam-nem.jpg',
    short: 'Bún tươi ăn kèm thịt heo luộc, tai heo giòn, rau sống, mít non và mắm nêm pha đậm đà.',
    origin: 'Mắm nêm là “nước chấm quốc dân” của người miền Trung, và bún mắm nêm là cách người Quảng Ngãi tôn vinh nó trọn vẹn nhất. Món bún trộn mộc mạc này xuất hiện ở mọi góc phố, gánh hàng rong, từ bữa sáng đến bữa xế, mang hương vị đậm, mặn mòi nhưng cực kỳ gây thương nhớ.',
    ingredients: [
      'Bún tươi sợi nhỏ',
      'Thịt heo ba chỉ luộc, tai heo, chả heo',
      'Mắm nêm (mắm cá cơm) pha thơm, tỏi, ớt, đường',
      'Mít non luộc thái mỏng',
      'Rau sống, rau thơm, đậu phộng rang'
    ],
    steps: [
      'Luộc thịt, tai heo vừa chín tới, thái mỏng.',
      'Pha mắm nêm: mắm, thơm băm, tỏi ớt, đường, chanh – khuấy đến khi sánh.',
      'Luộc mít non, xé hoặc thái lát.',
      'Xếp bún, rau, mít, thịt vào tô; rưới mắm nêm và rắc đậu phộng.'
    ],
    enjoy: [
      'Trộn đều tô bún cho mắm nêm áo đều từng sợi.',
      'Ăn kèm thêm ớt tươi, vài lát chanh.',
      'Nhai chậm để cảm nhận vị bùi của mít non hòa cùng mắm.'
    ],
    where: [
      'Các gánh bún, quán vỉa hè quanh chợ Quảng Ngãi và trung tâm thành phố.'
    ],
    season: 'Quanh năm',
    price: '15.000 – 30.000đ/tô',
    tags: ['bun mam', 'mam nem', 'mit non', 'thit heo']
  },
  {
    id: 'com-ga',
    name: 'Cơm gà Quảng Ngãi',
    category: 'mon-chinh',
    regions: ['tp-quang-ngai'],
    area: 'TP. Quảng Ngãi',
    image: 'dishes/com-ga.jpg',
    short: 'Cơm nấu bằng nước luộc gà vàng ươm, ăn kèm gà ta xé phay, rau răm và hành tím muối.',
    origin: 'Cơm gà là món ăn quen thuộc của xứ Quảng, và ở TP. Quảng Ngãi, đĩa cơm gà mang nét giản dị riêng: gà ta thả vườn chắc thịt, hạt cơm tơi vàng nhờ nấu bằng nước luộc gà và chút nghệ. Món ăn thường xuất hiện vào bữa trưa của người đi làm, học sinh và du khách cần một bữa no mà đậm vị quê.',
    ingredients: [
      'Gà ta thả vườn',
      'Gạo ngon, nước luộc gà, nghệ, mỡ gà',
      'Hành tây, rau răm, tiêu',
      'Hành tím muối chua, đu đủ ngâm',
      'Nước mắm gừng hoặc tương ớt'
    ],
    steps: [
      'Luộc gà với gừng, hành; giữ lại nước luộc ngọt.',
      'Xào gạo với mỡ gà, tỏi rồi nấu bằng nước luộc gà pha nghệ.',
      'Xé gà, trộn gỏi với hành tây, rau răm, chanh, tiêu.',
      'Dọn cơm cùng gà xé phay và chén canh nước luộc gà.'
    ],
    enjoy: [
      'Ăn kèm hành tím muối, dưa đu đủ cho đỡ ngấy.',
      'Chấm gà với nước mắm gừng hoặc muối tiêu chanh.',
      'Húp kèm chén canh gà nóng.'
    ],
    where: [
      'Các quán cơm gà ở trung tâm TP. Quảng Ngãi, đông khách vào buổi trưa.'
    ],
    season: 'Quanh năm',
    price: '30.000 – 50.000đ/đĩa',
    tags: ['com ga', 'ga xe', 'ga ta']
  },

  /* ============ NHÓM 2: CÁC LOẠI RAM ĐẶC SẢN ============ */
  {
    id: 'ram-bap',
    name: 'Ram bắp',
    category: 'ram',
    regions: ['tp-quang-ngai'],
    area: 'Bãi bồi sông Trà · TP. Quảng Ngãi',
    featured: 5,
    image: 'dishes/ram-bap.jpg',
    short: 'Bắp non bào nhuyễn cuốn bánh tráng mỏng, chiên giòn rụm; cuốn rau sống chấm mắm chua ngọt.',
    origin: 'Những bãi bồi ven sông Trà Khúc màu mỡ phù sa là nơi người dân trồng bắp nếp. Từ thứ nguyên liệu bình dị ấy, người Quảng Ngãi sáng tạo nên ram bắp – chiếc ram nhỏ xíu, vàng ruộm, vỏ giòn tan, nhân ngọt bùi. Món ăn từng là món quà quê của các bà, các mẹ, nay đã thành đặc sản “phải thử” của thành phố.',
    ingredients: [
      'Bắp nếp non trồng trên bãi bồi sông Trà',
      'Bánh tráng mỏng (bánh tráng ram)',
      'Hành lá, hành tím, chút tôm băm (tùy nơi)',
      'Rau sống, rau thơm, bánh tráng cuốn',
      'Nước mắm chua ngọt tỏi ớt'
    ],
    steps: [
      'Bắp bào hoặc nạo thành sợi mịn, trộn hành, gia vị (có nơi thêm tôm băm).',
      'Cuốn nhân trong bánh tráng mỏng thành những cuốn nhỏ cỡ ngón tay.',
      'Chiên ngập dầu, lửa vừa đến khi vàng giòn đều.'
    ],
    enjoy: [
      'Cuốn ram với bánh tráng, xà lách, rau thơm, dưa leo.',
      'Chấm nước mắm chua ngọt pha tỏi ớt hoặc mắm nêm.',
      'Ăn khi ram vừa vớt chảo để nghe tiếng giòn rụm.'
    ],
    where: [
      'Các quán ram bắp ở trung tâm TP. Quảng Ngãi, nhộn nhịp nhất vào buổi chiều.',
      'Hàng ram ven sông Trà vào mùa bắp non.'
    ],
    season: 'Quanh năm, ngon nhất mùa bắp non',
    price: '2.000 – 5.000đ/cuốn',
    tags: ['ram bap', 'cha gio bap', 'bap', 'ngo']
  },
  {
    id: 'ram-cha-ca',
    name: 'Ram chả cá đỏ củ',
    category: 'ram',
    regions: ['an-phu-co-luy'],
    area: 'Vùng biển Quảng Ngãi',
    image: 'dishes/ram-cha-ca.jpg',
    short: 'Nhân chả cá đỏ củ dai ngọt chiên vàng, ăn kèm đồ chua và tương ớt.',
    origin: 'Cá đỏ củ là loài cá biển nhỏ thịt trắng, dai ngọt – nguyên liệu quen thuộc để làm chả cá ở các làng biển Quảng Ngãi. Người dân quết cá thành chả rồi cuốn bánh tráng chiên giòn, tạo nên món ram mang vị biển đặc trưng: vừa giòn rụm vỏ ngoài, vừa dai sần sật bên trong.',
    ingredients: [
      'Cá đỏ củ tươi quết nhuyễn',
      'Tiêu, hành tím, tỏi, nước mắm',
      'Bánh tráng ram mỏng',
      'Đồ chua: đu đủ, cà rốt ngâm',
      'Tương ớt, rau sống'
    ],
    steps: [
      'Lóc thịt cá, quết (giã) thật nhuyễn đến khi dẻo dai.',
      'Nêm tiêu, hành, nước mắm, trộn đều.',
      'Cuốn chả cá trong bánh tráng, chiên vàng giòn.'
    ],
    enjoy: [
      'Cắt xéo, ăn kèm đồ chua và rau sống.',
      'Chấm tương ớt hoặc nước mắm tỏi ớt.'
    ],
    where: [
      'Chợ và quán ăn vặt vùng biển An Phú, Sa Huỳnh.',
      'Hàng chả cá, ram cá ở chợ Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: '3.000 – 6.000đ/cuốn',
    tags: ['ram ca', 'cha ca', 'ca do cu']
  },
  {
    id: 'ram-tom-thit',
    name: 'Ram tôm thịt',
    category: 'ram',
    regions: ['tp-quang-ngai'],
    area: 'TP. Quảng Ngãi',
    image: 'dishes/ram-tom-thit.jpg',
    short: 'Nhân tôm đất tươi kết hợp thịt ba chỉ băm và hành tím Lý Sơn, chiên giòn vàng ươm.',
    origin: 'Ram tôm thịt là món không thể thiếu trong mâm cỗ ngày giỗ, ngày Tết của người Quảng Ngãi. Điểm khác biệt nằm ở con tôm đất đồng quê ngọt chắc và hành tím Lý Sơn thơm nồng – hai sản vật làm nên cái “hồn” của cuốn ram xứ Quảng.',
    ingredients: [
      'Tôm đất tươi bóc vỏ',
      'Thịt ba chỉ băm',
      'Hành tím Lý Sơn, tiêu, nấm mèo, miến (tùy nhà)',
      'Bánh tráng ram',
      'Rau sống, nước mắm chua ngọt'
    ],
    steps: [
      'Tôm băm sơ, trộn thịt ba chỉ, hành tím, gia vị.',
      'Cuốn nhân chặt tay trong bánh tráng.',
      'Chiên hai lần, lửa vừa để ram giòn lâu.'
    ],
    enjoy: [
      'Cuốn rau sống, chấm nước mắm chua ngọt hoặc mắm nêm.',
      'Ăn kèm bún tươi thành món bún ram.'
    ],
    where: [
      'Quán ăn gia đình và hàng ram ở TP. Quảng Ngãi.',
      'Chợ Quảng Ngãi có bán ram cuốn sẵn để mang về chiên.'
    ],
    season: 'Quanh năm, đặc biệt dịp lễ Tết',
    price: '3.000 – 6.000đ/cuốn',
    tags: ['ram tom', 'cha gio', 'tom dat']
  },
  {
    id: 'ram-thit-nuong',
    name: 'Ram thịt nướng',
    category: 'ram',
    regions: ['tp-quang-ngai'],
    area: 'TP. Quảng Ngãi',
    image: 'dishes/ram-thit-nuong.jpg',
    short: 'Thịt heo nướng than hồng cuốn cùng vỏ ram giòn và rau sống, chấm nước chấm đậm vị.',
    origin: 'Kết hợp hai món quen của phố thị – thịt nướng và ram – người Quảng Ngãi có món cuốn “hai trong một” vừa thơm khói than, vừa giòn rụm. Món ăn thường được bày theo mẹt để thực khách tự tay cuốn, rất hợp cho những buổi tụ họp bạn bè.',
    ingredients: [
      'Thịt heo nạc vai, ba chỉ ướp sả, mật ong, hành tỏi',
      'Ram chiên giòn',
      'Bánh tráng, bún tươi',
      'Rau sống, dưa leo, khế, chuối chát',
      'Tương đậu phộng hoặc mắm nêm'
    ],
    steps: [
      'Ướp thịt với sả, tỏi, hành, nước mắm, đường, mật ong.',
      'Xiên que, nướng trên than hồng đến khi cháy cạnh thơm.',
      'Bày thịt nướng, ram, bún, rau ra mẹt.'
    ],
    enjoy: [
      'Đặt bánh tráng, rau, bún, một miếng ram và thịt nướng rồi cuốn chặt.',
      'Chấm tương đậu phộng sệt hoặc mắm nêm tỏi ớt.'
    ],
    where: [
      'Quán nem nướng, thịt nướng ở trung tâm TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: '30.000 – 50.000đ/phần',
    tags: ['thit nuong', 'nem nuong', 'ram']
  },

  /* ============ NHÓM 3: ĂN VẶT & ẨM THỰC ĐƯỜNG PHỐ ============ */
  {
    id: 'banh-beo',
    name: 'Bánh bèo nóng',
    category: 'an-vat',
    regions: ['tp-quang-ngai', 'an-phu-co-luy'],
    area: 'TP. Quảng Ngãi · Xã An Phú',
    bestseller: true,
    featured: 3,
    image: 'dishes/banh-beo.jpg',
    short: 'Bánh đổ chén mỏng, phủ nhân ướt hoặc nhân khô (tép cháy, vụn bánh mì giòn, mỡ hẹ), chan nước mắm ngọt.',
    origin: 'Bánh bèo có mặt khắp miền Trung, nhưng bánh bèo nóng Quảng Ngãi dễ nhận ra nhờ lớp nhân khô độc đáo: tép cháy đỏ cam, vụn bánh mì chiên giòn và mỡ hẹ xanh mướt. Những gánh bánh bèo ở trung tâm thành phố và xã An Phú gắn liền với ký ức tuổi thơ của bao thế hệ – rẻ, nóng hổi và ăn hoài không chán.',
    ingredients: [
      'Bột gạo xay pha chút bột năng',
      'Tép (tôm) chấy đỏ cam',
      'Vụn bánh mì chiên giòn, tóp mỡ',
      'Mỡ hành (mỡ hẹ)',
      'Nước mắm pha ngọt, ớt'
    ],
    steps: [
      'Pha bột gạo loãng, để nghỉ cho bột nở.',
      'Xếp chén nhỏ vào xửng, đổ bột mỏng, hấp chín.',
      'Làm nhân: tép chấy khô (nhân khô) hoặc tôm thịt xào sệt (nhân ướt), phi mỡ hẹ.',
      'Phủ nhân, rắc bánh mì giòn, rưới mỡ hẹ khi bánh còn nóng.'
    ],
    enjoy: [
      'Chan nước mắm ngọt pha ớt vào từng chén.',
      'Dùng que tre hoặc thìa nhỏ xắn bánh ăn ngay tại chén.',
      'Gọi cả nhân ướt và nhân khô để so vị.'
    ],
    where: [
      'Các gánh, quán bánh bèo ở trung tâm TP. Quảng Ngãi.',
      'Hàng bánh bèo buổi chiều ở xã An Phú.'
    ],
    season: 'Quanh năm',
    price: '10.000 – 25.000đ/phần',
    tags: ['banh beo', 'tep chay', 'mo hanh', 'nhan kho']
  },
  {
    id: 'banh-trang-dap',
    name: 'Bánh tráng đập (Bánh đập)',
    category: 'an-vat',
    regions: ['tp-quang-ngai', 'an-phu-co-luy'],
    area: 'Ven sông Trà',
    image: 'dishes/banh-trang-dap.jpg',
    short: 'Bánh tráng nướng giòn kẹp bánh ướt mềm, phết mỡ hẹ, chấm mắm nêm.',
    origin: 'Bánh tráng đập (bánh đập) là món quà quê của các làng ven sông Trà. Tên gọi đến từ cách ăn: kẹp lá bánh ướt mềm vào giữa hai lớp bánh tráng nướng giòn rồi “đập” nhẹ cho bánh vỡ thành miếng vừa ăn. Một miếng bánh có đủ giòn – mềm – béo – mặn mòi, mộc mạc mà khó quên.',
    ingredients: [
      'Bánh tráng mè nướng than',
      'Bánh ướt tráng mỏng, nóng hổi',
      'Mỡ hành (mỡ hẹ)',
      'Mắm nêm pha thơm, tỏi ớt',
      'Có nơi thêm hến xào hoặc thịt'
    ],
    steps: [
      'Tráng bánh ướt trên nồi hơi.',
      'Nướng bánh tráng mè trên than cho phồng giòn.',
      'Đặt bánh ướt lên bánh tráng, phết mỡ hẹ, úp thêm một lớp bánh tráng.',
      'Đập nhẹ cho bánh vỡ thành từng miếng.'
    ],
    enjoy: [
      'Chấm ngập mắm nêm hoặc mắm cái pha.',
      'Ăn kèm hến xào nếu quán có.'
    ],
    where: [
      'Quán bánh đập ven sông Trà và khu vực An Phú.',
      'Một số quán ăn vặt ở TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: '5.000 – 15.000đ/cái',
    tags: ['banh dap', 'banh trang', 'banh uot']
  },
  {
    id: 'bo-hit',
    name: 'Bò hít',
    category: 'an-vat',
    regions: ['tp-quang-ngai'],
    area: 'TP. Quảng Ngãi',
    image: 'dishes/bo-hit.jpg',
    short: 'Gỏi đu đủ bào sợi trộn khô bò, gan bò rim cay nồng, rau răm và đậu phộng.',
    origin: 'Bò hít là món ăn vặt gắn liền với tuổi học trò Quảng Ngãi. Cái tên vui tai đến từ cảm giác khi ăn: vị cay của ớt rim xộc lên khiến ai cũng phải “hít hà” xuýt xoa. Thực chất đây là biến tấu của gỏi đu đủ khô bò, nhưng mang hương vị chua – cay – mặn – ngọt rất riêng của đất Quảng.',
    ingredients: [
      'Đu đủ xanh, cà rốt bào sợi',
      'Khô bò hoặc gan bò rim cay xé sợi',
      'Rau răm, rau quế',
      'Đậu phộng rang giã dập',
      'Nước mắm chua ngọt, ớt rim, tương ớt'
    ],
    steps: [
      'Bào đu đủ, cà rốt, ngâm nước muối loãng rồi vắt ráo cho giòn.',
      'Rim gan bò, khô bò với ớt, tỏi, đường, nước mắm cho thấm cay.',
      'Trộn đu đủ với nước mắm chua ngọt, bò và rau răm.',
      'Rắc đậu phộng, thêm tương ớt khi dọn.'
    ],
    enjoy: [
      'Xúc gỏi bằng bánh tráng nướng giòn.',
      'Trộn đều ngay trước khi ăn để đu đủ giữ độ giòn.'
    ],
    where: [
      'Xe gỏi, quán ăn vặt quanh trường học và các con phố trung tâm TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: '10.000 – 25.000đ/đĩa',
    tags: ['goi du du', 'kho bo', 'gan bo', 'bo hit']
  },
  {
    id: 'goi-da-bo',
    name: 'Gỏi da bò trộn',
    category: 'an-vat',
    regions: ['tp-quang-ngai'],
    area: 'TP. Quảng Ngãi',
    image: 'dishes/goi-da-bo.jpg',
    short: 'Da bò luộc giòn thái mỏng trộn rau thơm, đậu phộng và nước mắm chua cay.',
    origin: 'Từ phần da bò tưởng bỏ đi, người Quảng Ngãi chế biến thành món gỏi giòn sần sật đầy cuốn hút. Gỏi da bò là món nhậu, món ăn vặt bình dân ở các quán vỉa hè, nổi bật với độ giòn đặc trưng và vị chua cay hài hòa.',
    ingredients: [
      'Da bò làm sạch, luộc chín',
      'Hành tây, rau răm, rau thơm',
      'Đậu phộng rang, hành phi',
      'Chanh, tỏi, ớt, nước mắm, đường',
      'Bánh tráng nướng'
    ],
    steps: [
      'Cạo sạch da bò, luộc kỹ với gừng, sả rồi ngâm nước đá cho giòn.',
      'Thái da bò thật mỏng.',
      'Trộn với hành tây, rau thơm và nước mắm chua cay.',
      'Rắc đậu phộng, hành phi.'
    ],
    enjoy: [
      'Xúc bằng bánh tráng nướng.',
      'Thêm ớt, chanh tùy khẩu vị.'
    ],
    where: [
      'Quán gỏi, quán nhậu bình dân ở TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: '20.000 – 40.000đ/đĩa',
    tags: ['goi', 'da bo', 'mon nhau']
  },
  {
    id: 'goi-oc',
    name: 'Gỏi ốc trộn',
    category: 'an-vat',
    regions: ['tp-quang-ngai', 'an-phu-co-luy'],
    area: 'TP. Quảng Ngãi · Nghĩa An',
    image: 'dishes/goi-oc.jpg',
    short: 'Thịt ốc tươi trộn hoa chuối, rau răm, hành phi, xúc bánh tráng nướng.',
    origin: 'Vùng biển và bãi bồi Nghĩa An cho nhiều loại ốc béo ngọt. Người dân lể thịt ốc trộn cùng hoa chuối bào – thứ rau quen thuộc của vườn quê – tạo nên món gỏi vừa giòn vừa thơm, vị biển hòa vị đồng.',
    ingredients: [
      'Thịt ốc tươi (tùy mùa: ốc bươu, ốc nhảy, ốc len…)',
      'Hoa chuối bào mỏng',
      'Rau răm, hành tây, hành phi',
      'Đậu phộng, chanh, ớt, nước mắm',
      'Bánh tráng mè nướng'
    ],
    steps: [
      'Luộc ốc với sả, gừng; lể lấy thịt, thái lát.',
      'Bào hoa chuối, ngâm nước chanh cho trắng.',
      'Trộn ốc, hoa chuối, rau răm với nước mắm chua ngọt.',
      'Rắc hành phi, đậu phộng.'
    ],
    enjoy: [
      'Xúc gỏi bằng bánh tráng nướng giòn.',
      'Chấm thêm nước mắm tỏi ớt nếu thích đậm.'
    ],
    where: [
      'Quán ốc ở TP. Quảng Ngãi.',
      'Quán hải sản ven biển Nghĩa An (xã An Phú).'
    ],
    season: 'Quanh năm',
    price: '30.000 – 60.000đ/đĩa',
    tags: ['goi oc', 'hoa chuoi', 'oc']
  },
  {
    id: 'oc-hut',
    name: 'Ốc hút',
    category: 'an-vat',
    regions: ['tp-quang-ngai'],
    area: 'TP. Quảng Ngãi',
    image: 'dishes/oc-hut.jpg',
    short: 'Ốc đinh, ốc gạo xào sả ớt và nước dừa thơm béo, hút “chụt chụt” vui miệng.',
    origin: 'Ốc hút là món ăn vặt dân dã được giới trẻ Quảng Ngãi yêu thích. Những con ốc nhỏ được chặt đuôi, xào cùng sả ớt và nước dừa; khi ăn chỉ cần đưa lên miệng hút nhẹ là thịt ốc tuột ra, kèm theo nước sốt béo cay.',
    ingredients: [
      'Ốc đinh, ốc gạo tươi',
      'Sả, ớt, tỏi băm',
      'Nước cốt dừa',
      'Lá chanh, rau răm',
      'Nước mắm, đường'
    ],
    steps: [
      'Ngâm ốc nước vo gạo với ớt cho nhả nhớt, chặt đuôi.',
      'Phi thơm sả, tỏi, ớt; cho ốc vào xào lửa lớn.',
      'Thêm nước cốt dừa, nêm nếm, đun đến khi sốt sệt.'
    ],
    enjoy: [
      'Hút ốc trực tiếp hoặc dùng tăm khều.',
      'Chấm bánh mì vào phần nước sốt dừa béo cay.'
    ],
    where: [
      'Quán ốc vỉa hè ở trung tâm TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: '25.000 – 50.000đ/đĩa',
    tags: ['oc hut', 'oc xao', 'oc dinh', 'nuoc dua']
  },
  {
    id: 'xu-xoa',
    name: 'Xu xoa',
    category: 'an-vat',
    regions: ['an-phu-co-luy', 'ly-son'],
    area: 'Ven biển Quảng Ngãi',
    image: 'dishes/xu-xoa.jpg',
    short: 'Thạch rong biển tự nhiên ăn cùng nước đường gừng và đá bào – món giải nhiệt ngày hè.',
    origin: 'Rong câu mọc ven biển Quảng Ngãi được người dân phơi khô, nấu thành xu xoa – thứ thạch giòn dai, mát lành. Ngày hè nắng gắt, một ly xu xoa nước đường gừng với đá bào là món giải nhiệt quen thuộc của trẻ con lẫn người lớn miền biển.',
    ingredients: [
      'Rong câu biển phơi khô',
      'Đường phổi hoặc đường cát',
      'Gừng tươi',
      'Lá dứa (tùy nơi)',
      'Đá bào'
    ],
    steps: [
      'Ngâm rửa rong câu nhiều lần cho sạch cát, hết mùi tanh.',
      'Nấu rong với nước đến khi tan, lọc lấy nước, để nguội đông thành thạch.',
      'Nấu nước đường với gừng giã dập.',
      'Cắt thạch thành miếng, cho vào ly cùng nước đường, đá bào.'
    ],
    enjoy: [
      'Ăn lạnh vào buổi trưa hè.',
      'Có thể thêm nước cốt dừa, đậu xanh.'
    ],
    where: [
      'Chợ ven biển Quảng Ngãi, đảo Lý Sơn và các xe chè ở TP. Quảng Ngãi.',
      'Rong câu khô bán tại chợ để mang về tự nấu.'
    ],
    season: 'Ngon nhất mùa hè',
    price: '10.000 – 15.000đ/ly',
    tags: ['thach', 'rong cau', 'che', 'giai nhiet']
  },

  /* ============ NHÓM 4: HẢI SẢN & ĐẶC SẢN ĐẢO LÝ SƠN ============ */
  {
    id: 'goi-toi-ly-son',
    name: 'Gỏi tỏi Lý Sơn',
    category: 'hai-san',
    regions: ['ly-son'],
    area: 'Huyện đảo Lý Sơn',
    image: 'dishes/goi-toi-ly-son.jpg',
    short: 'Thân cây tỏi đực Lý Sơn trộn tôm thịt, đậu phộng – thơm dịu, giòn ngọt, không hăng.',
    origin: 'Trên đảo Lý Sơn, người dân tận dụng phần thân cây tỏi đực (tỏi non) để làm món gỏi độc đáo. Thân tỏi giòn, thơm dịu mà không hăng, khi trộn cùng tôm thịt lại có vị ngọt thanh hiếm thấy. Đây là món ăn mà du khách ra đảo nhất định phải thử một lần.',
    ingredients: [
      'Thân tỏi non (tỏi đực) Lý Sơn',
      'Tôm tươi, thịt ba chỉ luộc',
      'Đậu phộng rang, hành phi',
      'Rau răm, rau thơm',
      'Nước mắm, chanh, đường, ớt'
    ],
    steps: [
      'Thân tỏi rửa sạch, thái khúc hoặc chẻ sợi, ngâm nước đá cho giòn.',
      'Luộc tôm, thịt, thái mỏng.',
      'Trộn tỏi với tôm thịt và nước mắm chua ngọt.',
      'Rắc đậu phộng, hành phi, rau thơm.'
    ],
    enjoy: [
      'Xúc bằng bánh tráng nướng.',
      'Dùng làm món khai vị trong bữa hải sản trên đảo.'
    ],
    where: [
      'Các quán ăn, nhà hàng hải sản trên đảo Lý Sơn.',
      'Một số quán đặc sản ở TP. Quảng Ngãi phục vụ theo mùa.'
    ],
    season: 'Theo mùa tỏi trên đảo',
    price: '50.000 – 100.000đ/đĩa',
    tags: ['goi toi', 'toi', 'ly son']
  },
  {
    id: 'goi-rong-bien',
    name: 'Gỏi rong biển Lý Sơn',
    category: 'hai-san',
    regions: ['ly-son'],
    area: 'Huyện đảo Lý Sơn',
    image: 'dishes/goi-rong-bien.jpg',
    short: 'Rong biển tươi giòn sần sật, trộn rau húng, đậu phộng và nước mắm chanh tỏi.',
    origin: 'Vùng biển trong xanh quanh đảo Lý Sơn là nơi rong biển mọc tự nhiên trên các rạn đá. Mỗi mùa rong, phụ nữ trên đảo lội ra bãi đá thu hoạch, mang về làm gỏi – món ăn mang trọn vị mặn mòi, tươi mát của biển khơi.',
    ingredients: [
      'Rong biển tươi Lý Sơn',
      'Rau húng, rau răm',
      'Đậu phộng rang',
      'Chanh, tỏi, ớt, nước mắm',
      'Hành tím phi'
    ],
    steps: [
      'Rửa rong nhiều lần, ngâm nước đá cho giòn.',
      'Pha nước mắm chanh tỏi ớt chua ngọt.',
      'Trộn nhẹ tay rong với rau thơm và nước mắm ngay trước khi ăn.',
      'Rắc đậu phộng, hành phi.'
    ],
    enjoy: [
      'Ăn ngay sau khi trộn để rong giữ độ giòn.',
      'Xúc bánh tráng hoặc ăn kèm hải sản nướng.'
    ],
    where: [
      'Nhà hàng, quán ăn trên đảo Lý Sơn.',
      'Rong biển khô Lý Sơn bán tại cửa hàng đặc sản để mang về.'
    ],
    season: 'Mùa rong vào khoảng đầu năm',
    price: '40.000 – 80.000đ/đĩa',
    tags: ['rong bien', 'goi rong', 'ly son']
  },
  {
    id: 'nhum-bien',
    name: 'Nhum biển (Cầu gai)',
    category: 'hai-san',
    regions: ['ly-son'],
    area: 'Đảo Lý Sơn · Biển Bình Sơn',
    image: 'dishes/nhum-bien.jpg',
    short: 'Nướng mỡ hành béo ngậy hoặc nấu cháo bổ dưỡng – tinh túy của biển Lý Sơn, Bình Sơn.',
    origin: 'Nhum (cầu gai) sống bám trên các rạn đá ven đảo Lý Sơn và vùng biển Bình Sơn. Thợ lặn phải xuống tận đáy biển để bắt từng con. Phần gạch nhum vàng cam, béo ngậy được ví như “lộc biển”, chế biến thành nhiều món, nổi tiếng nhất là nhum nướng mỡ hành và cháo nhum.',
    ingredients: [
      'Nhum biển tươi còn sống',
      'Mỡ hành, đậu phộng giã',
      'Gạo (cho món cháo), hành ngò',
      'Muối tiêu chanh, rau răm'
    ],
    steps: [
      'Dùng kéo cắt phần miệng nhum, làm sạch, giữ lại gạch trong vỏ.',
      'Nướng: rưới mỡ hành, rắc đậu phộng, đặt lên than hồng đến khi sôi lăn tăn.',
      'Cháo: nấu cháo nhừ, cho gạch nhum vào cuối, nêm tiêu hành.'
    ],
    enjoy: [
      'Ăn nhum nướng khi còn nóng, dùng thìa xúc gạch trong vỏ.',
      'Chấm muối tiêu chanh, kèm rau răm.'
    ],
    where: [
      'Quán hải sản trên đảo Lý Sơn.',
      'Quán hải sản ven biển Bình Sơn.'
    ],
    season: 'Theo mùa, ngon nhất mùa biển lặng',
    price: '15.000 – 30.000đ/con',
    tags: ['nhum', 'cau gai', 'chao nhum', 'hai san']
  },
  {
    id: 'cua-huynh-de',
    name: 'Cua huỳnh đế',
    category: 'hai-san',
    regions: ['ly-son'],
    area: 'Đảo Lý Sơn',
    image: 'dishes/cua-huynh-de.jpg',
    short: 'Hải sản quý vỏ đỏ au, thịt chắc và ngọt đậm, hấp hoặc rang me.',
    origin: 'Cua huỳnh đế có hình dáng lạ mắt với chiếc mai đỏ cam, thuôn dài như tấm áo bào của vua chúa – nên mới có tên “huỳnh đế”. Tương truyền xưa kia loài cua này từng được dâng tiến vua. Ngày nay, cua huỳnh đế là đặc sản quý của biển Lý Sơn; sản lượng ít nên luôn được săn đón.',
    ingredients: [
      'Cua huỳnh đế tươi sống',
      'Muối, tiêu, chanh, lá chanh',
      'Me chua, tỏi, ớt (cho món rang me)',
      'Sả, gừng hoặc bia để hấp'
    ],
    steps: [
      'Rửa sạch cua, để nguyên con.',
      'Hấp: hấp cách thủy với sả, gừng hoặc bia khoảng 15 – 20 phút.',
      'Rang me: sên nước me với tỏi, đường, nước mắm rồi đảo cua cho thấm.'
    ],
    enjoy: [
      'Chấm muối tiêu chanh để giữ vị ngọt nguyên bản.',
      'Gạch cua béo ngậy ăn kèm bánh mì hoặc cơm nóng.'
    ],
    where: [
      'Nhà hàng hải sản trên đảo Lý Sơn.',
      'Một số nhà hàng hải sản ở TP. Quảng Ngãi.'
    ],
    season: 'Theo mùa biển, số lượng có hạn',
    price: 'Theo thời giá (hải sản cao cấp)',
    tags: ['cua', 'hai san', 'tien vua']
  },

  /* ============ NHÓM 5: ĐẶC SẢN NÚI RỪNG & ĐỒNG QUÊ ============ */
  {
    id: 'ca-nien-nuong',
    name: 'Cá niên nướng',
    category: 'nui-rung',
    regions: ['tra-bong'],
    area: 'Vùng cao Trà Bồng · Sơn Hà',
    image: 'dishes/ca-nien-nuong.jpg',
    short: 'Cá suối nướng mọi chấm muối ớt xanh, ruột cá có vị đắng nhẹ đặc trưng.',
    origin: 'Cá niên chỉ sống ở những con suối đầu nguồn nước trong vắt, chảy xiết của vùng cao Trà Bồng, Sơn Hà. Cá ăn rêu đá nên ruột có vị đắng nhẹ, thơm – vì vậy đồng bào Cor, Hrê nướng cá nguyên con, không bỏ ruột. Ăn cá niên là cảm nhận vị trong lành của núi rừng đại ngàn.',
    ingredients: [
      'Cá niên suối tươi',
      'Muối hột, ớt xanh rừng giã',
      'Lá é, rau rừng',
      'Que tre tươi để kẹp nướng'
    ],
    steps: [
      'Rửa nhẹ cá, giữ nguyên ruột.',
      'Kẹp cá vào que tre, nướng trên than củi lửa nhỏ.',
      'Trở đều tay đến khi da cá vàng, thơm mùi khói.'
    ],
    enjoy: [
      'Chấm muối ớt xanh giã cùng lá é.',
      'Ăn cả ruột để cảm nhận vị đắng nhẹ, hậu ngọt.',
      'Thưởng thức cùng cơm lam, rau rừng.'
    ],
    where: [
      'Các quán ăn đồng bào ở Trà Bồng, Sơn Hà, Sơn Tây.',
      'Chợ phiên vùng cao khi vào mùa cá.'
    ],
    season: 'Ngon nhất mùa khô, khi nước suối trong',
    price: 'Theo mùa – cá tự nhiên khá hiếm',
    tags: ['ca suoi', 'ca nien', 'nuong', 'mien nui']
  },
  {
    id: 'chim-mia',
    name: 'Chim mía nướng / rô-ti',
    category: 'nui-rung',
    regions: ['lang-nghe'],
    area: 'Vùng đồng quê Quảng Ngãi',
    image: 'dishes/chim-mia.jpg',
    short: 'Thịt ngọt, mềm xương, nướng muối ớt hoặc rô-ti ăn nguyên con.',
    origin: 'Quảng Ngãi từng là “thủ phủ mía đường” của miền Trung. Vào mùa mía, những đàn chim nhỏ làm tổ trong ruộng mía nên thịt béo, ngọt – người dân gọi là chim mía. Món chim mía nướng, rô-ti trở thành đặc sản đồng quê mỗi độ cuối năm.',
    ingredients: [
      'Chim mía làm sạch, để nguyên con',
      'Sả, tỏi, hành tím, mật ong',
      'Muối ớt, tiêu',
      'Rau răm, dưa leo, muối tiêu chanh'
    ],
    steps: [
      'Làm sạch chim, ướp sả, tỏi, muối ớt, mật ong.',
      'Nướng than hồng, hoặc chiên sơ rồi rô-ti với nước dừa, bơ tỏi.',
      'Đảo đều đến khi da vàng óng, thấm vị.'
    ],
    enjoy: [
      'Ăn nguyên con, nhai cả xương mềm.',
      'Chấm muối tiêu chanh, kèm rau răm.'
    ],
    where: [
      'Quán đặc sản đồng quê ở Tư Nghĩa, Mộ Đức và ven TP. Quảng Ngãi.'
    ],
    season: 'Mùa mía (cuối năm)',
    price: '15.000 – 25.000đ/con',
    tags: ['chim', 'ro ti', 'nuong', 'dong que']
  },

  /* ============ NHÓM 6: QUÀ BIẾU, BÁNH KẸO & GIA VỊ ============ */
  {
    id: 'ca-bong-kho-tieu',
    name: 'Cá bống sông Trà kho tiêu',
    category: 'qua-bieu',
    subgroup: 'Món mặn đóng hộp',
    regions: ['tp-quang-ngai', 'lang-nghe'],
    area: 'Sông Trà Khúc',
    featured: 6,
    image: 'dishes/ca-bong-kho-tieu.jpg',
    short: 'Cá bống cát sông Trà kho rim với tiêu, nước mắm – món quà quê trứ danh, đóng hũ mang đi xa.',
    origin: 'Cá bống sông Trà nhỏ bằng ngón tay, sống ở đáy cát sông Trà Khúc, thịt chắc và ngọt. Theo nhiều tư liệu địa phương, đây từng là sản vật tiến vua dưới triều Nguyễn. Kho trong nồi đất với tiêu và nước mắm ngon, cá săn lại, thấm đều, để được lâu – nên trở thành món quà người Quảng Ngãi luôn mang theo mỗi lần đi xa.',
    ingredients: [
      'Cá bống cát sông Trà tươi',
      'Tiêu sọ, nước mắm nhĩ',
      'Đường, hành tím, ớt',
      'Nồi đất kho lửa riu riu'
    ],
    steps: [
      'Làm sạch cá, ướp nước mắm, đường, hành tím, tiêu.',
      'Xếp cá vào nồi đất, kho liu riu nhiều giờ.',
      'Thêm tiêu khi cá săn, rim đến khi nước kẹo lại.',
      'Đóng hũ thủy tinh, hút chân không để làm quà.'
    ],
    enjoy: [
      'Ăn với cơm trắng nóng, cháo trắng hoặc bánh tráng.',
      'Kèm dưa leo, rau luộc cho cân vị.'
    ],
    where: [
      'Chợ Quảng Ngãi và các cửa hàng đặc sản trong TP. Quảng Ngãi.',
      'Quán cơm gia đình ven sông Trà.'
    ],
    season: 'Quanh năm',
    price: 'Theo hũ, tùy cơ sở sản xuất',
    tags: ['ca bong', 'kho tieu', 'qua', 'dong hop']
  },
  {
    id: 'mam-nhum-my-a',
    name: 'Mắm nhum Mỹ Á',
    category: 'qua-bieu',
    subgroup: 'Món mặn đóng hộp',
    regions: ['lang-nghe'],
    area: 'Làng chài Mỹ Á · Đức Phổ',
    image: 'dishes/mam-nhum-my-a.jpg',
    short: 'Mắm làm từ gạch nhum biển của làng chài Mỹ Á (Đức Phổ), béo bùi, đậm đà.',
    origin: 'Làng chài Mỹ Á ở Đức Phổ nổi tiếng với nghề làm mắm nhum truyền thống. Gạch nhum được tách tỉ mỉ, ướp muối theo tỉ lệ gia truyền và ủ trong hũ cho đến khi chín. Mắm nhum Mỹ Á có màu vàng cam, vị béo bùi đặc biệt – một món quà biển hiếm có.',
    ingredients: [
      'Gạch nhum biển tươi',
      'Muối biển hạt',
      'Hũ sành, hũ thủy tinh ủ mắm'
    ],
    steps: [
      'Tách gạch nhum, loại bỏ tạp chất.',
      'Trộn muối theo tỉ lệ gia truyền.',
      'Ủ trong hũ kín một thời gian cho mắm chín, dậy mùi thơm.',
      'Chiết ra hũ nhỏ để bảo quản, làm quà.'
    ],
    enjoy: [
      'Ăn với cơm nóng, cháo trắng.',
      'Pha thêm tỏi, ớt, chanh làm nước chấm cho thịt luộc, rau luộc.'
    ],
    where: [
      'Làng chài Mỹ Á (Đức Phổ).',
      'Cửa hàng đặc sản ở TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: 'Đặc sản cao cấp, tùy cơ sở',
    tags: ['mam nhum', 'my a', 'duc pho', 'mam']
  },
  {
    id: 'toi-ly-son',
    name: 'Tỏi Lý Sơn',
    category: 'qua-bieu',
    subgroup: 'Nông sản & Gia vị',
    regions: ['ly-son'],
    area: 'Đảo Lý Sơn',
    image: 'dishes/toi-ly-son.jpg',
    short: 'Tỏi nhiều tép và tỏi cô đơn (một tép) trồng trên cát biển phủ đất núi lửa – thơm dịu, cay nhẹ, hậu ngọt.',
    origin: 'Lý Sơn được mệnh danh là “vương quốc tỏi”. Người dân đảo trồng tỏi trên nền đất bazan núi lửa phủ lớp cát trắng lấy từ biển, tạo nên củ tỏi nhỏ, vỏ tím nhạt, tép trắng, mùi thơm dịu và vị cay không gắt. Đặc biệt, tỏi cô đơn (cả củ chỉ một tép) rất hiếm, thường được ngâm rượu, ngâm mật ong.',
    ingredients: [
      'Tỏi nhiều tép – gia vị hằng ngày',
      'Tỏi cô đơn (một tép) – hiếm, dùng ngâm rượu, mật ong',
      'Đất bazan núi lửa và cát biển trắng',
      'Nắng gió biển đảo'
    ],
    steps: [
      'Phủ lớp cát biển trắng lên đất bazan, gieo tép tỏi giống.',
      'Chăm sóc, tưới nước trong khoảng 3 – 4 tháng.',
      'Thu hoạch, bó thành chùm, phơi hoặc treo gác bếp cho khô.',
      'Phân loại tỏi nhiều tép và tỏi cô đơn.'
    ],
    enjoy: [
      'Ăn sống kèm hải sản, phi thơm làm gia vị.',
      'Tỏi cô đơn ngâm mật ong hoặc rượu – dùng dần.'
    ],
    where: [
      'Chợ và vườn tỏi trên đảo Lý Sơn.',
      'Cửa hàng đặc sản ở cảng Sa Kỳ, TP. Quảng Ngãi.'
    ],
    season: 'Thu hoạch chính vào khoảng đầu năm',
    price: 'Tỏi cô đơn có giá cao hơn nhiều lần tỏi thường',
    tags: ['toi', 'toi co don', 'gia vi', 'ly son']
  },
  {
    id: 'que-tra-bong',
    name: 'Quế Trà Bồng',
    category: 'qua-bieu',
    subgroup: 'Nông sản & Gia vị',
    regions: ['tra-bong'],
    area: 'Trà Bồng',
    image: 'dishes/que-tra-bong.jpg',
    short: 'Quế cao sơn vùng Trà Bồng vỏ dày, nhiều tinh dầu, vị cay ngọt, hương thơm nồng.',
    origin: 'Trà Bồng là vùng quế nổi tiếng bậc nhất miền Trung. Cây quế gắn bó với đời sống đồng bào Cor qua bao thế hệ, được xem là cây di sản, cây làm giàu của núi rừng. Quế Trà Bồng vỏ dày, nhiều dầu, vị cay ngọt, hương thơm đậm, từ lâu đã là sản vật quý của Quảng Ngãi.',
    ingredients: [
      'Vỏ quế cao sơn bóc từ cây quế lâu năm',
      'Tinh dầu quế tự nhiên',
      'Các dạng sản phẩm: quế ống, quế cuộn, quế bột'
    ],
    steps: [
      'Chọn cây quế đủ năm tuổi, bóc vỏ theo mùa.',
      'Ủ vỏ quế cho ra dầu, sau đó phơi nắng, cuộn thành thanh.',
      'Phân loại theo độ dày và lượng tinh dầu.'
    ],
    enjoy: [
      'Dùng làm gia vị cho thịt kho, phở, bánh.',
      'Pha trà quế, ngâm rượu, làm tinh dầu xông.'
    ],
    where: [
      'Các làng quế và chợ ở Trà Bồng.',
      'Cửa hàng đặc sản ở TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: 'Tùy loại quế và độ dày vỏ',
    tags: ['que', 'gia vi', 'tinh dau', 'cor']
  },
  {
    id: 'duong-phoi',
    name: 'Đường phổi & Đường phèn',
    category: 'qua-bieu',
    subgroup: 'Nông sản & Gia vị',
    regions: ['lang-nghe', 'tp-quang-ngai'],
    area: 'Quảng Ngãi',
    image: 'dishes/duong-phoi.jpg',
    short: 'Đường phổi xốp nhẹ, giòn tan như lá phổi; đường phèn trong vắt – tinh hoa xứ mía Quảng Ngãi.',
    origin: 'Quảng Ngãi xưa nổi tiếng với cây mía và nghề làm đường thủ công. Ca dao còn lưu: “Ai về Quảng Ngãi quê ta / Mía ngon, đường ngọt trắng ngà dễ ăn”. Đường phổi được nấu từ đường mía, đánh cho bông xốp nên có hình dạng như lá phổi, giòn tan, ngọt thanh; đường phèn kết tinh trong vắt, dùng nấu chè, chưng yến.',
    ingredients: [
      'Mật mía, đường cát từ mía Quảng Ngãi',
      'Bí quyết đánh đường cho bông xốp (đường phổi)',
      'Thời gian kết tinh nhiều ngày (đường phèn)'
    ],
    steps: [
      'Nấu đường mía đến độ keo vừa tới.',
      'Đường phổi: nhấc khỏi bếp, đánh mạnh tay cho đường nở bông, đổ khuôn, cắt miếng.',
      'Đường phèn: để dung dịch đường kết tinh chậm trong nhiều ngày.'
    ],
    enjoy: [
      'Đường phổi ăn trực tiếp như kẹo, nhâm nhi cùng trà xanh.',
      'Đường phèn nấu chè, chưng yến, ngâm chanh, hấp lê.'
    ],
    where: [
      'Chợ Quảng Ngãi và cửa hàng đặc sản.',
      'Các cơ sở làm đường truyền thống ở vùng quê Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: 'Giá bình dân',
    tags: ['duong', 'duong phen', 'mia']
  },
  {
    id: 'keo-guong-thu-xa',
    name: 'Kẹo gương Thu Xà',
    category: 'qua-bieu',
    subgroup: 'Bánh kẹo truyền thống',
    regions: ['lang-nghe'],
    area: 'Phố cổ Thu Xà · Tư Nghĩa',
    image: 'dishes/keo-guong-thu-xa.jpg',
    short: 'Mạch nha, đậu phộng, mè phết trên bánh tráng mỏng, trong bóng như mặt gương – đặc sản phố cổ Thu Xà.',
    origin: 'Thu Xà (Tư Nghĩa) từng là phố cảng sầm uất của người Hoa ở Quảng Ngãi. Kẹo gương ra đời từ đây, làm từ mạch nha, đường, đậu phộng, mè phết lên lá bánh tráng mỏng rồi sấy, nướng trên than. Mặt kẹo trong, bóng như gương soi nên có tên “kẹo gương” – thức quà Tết, quà biếu của bao gia đình xứ Quảng.',
    ingredients: [
      'Mạch nha',
      'Đường cát',
      'Đậu phộng rang, mè trắng',
      'Bánh tráng gạo mỏng',
      'Gừng (tùy nơi)'
    ],
    steps: [
      'Nấu mạch nha với đường đến độ sệt.',
      'Trộn đậu phộng, mè vào hỗn hợp.',
      'Phết đều lên lá bánh tráng mỏng, phơi hoặc sấy khô.',
      'Nướng sơ trên than cho kẹo giòn, thơm.'
    ],
    enjoy: [
      'Bẻ nhỏ, nhâm nhi cùng trà xanh nóng.',
      'Bảo quản nơi khô ráo, kín gió để kẹo giữ độ giòn.'
    ],
    where: [
      'Làng nghề Thu Xà (Tư Nghĩa).',
      'Cửa hàng đặc sản ở TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm, nhộn nhịp nhất dịp Tết',
    price: 'Giá bình dân',
    tags: ['keo', 'keo guong', 'thu xa', 'tu nghia']
  },
  {
    id: 'mach-nha-mo-duc',
    name: 'Mạch nha Mộ Đức',
    category: 'qua-bieu',
    subgroup: 'Bánh kẹo truyền thống',
    regions: ['lang-nghe'],
    area: 'Làng Thi Phổ · Mộ Đức',
    image: 'dishes/mach-nha-mo-duc.jpg',
    short: 'Mạch nha Thi Phổ vàng óng, dẻo quánh, ngọt thanh – nấu từ gạo nếp và mầm lúa.',
    origin: 'Làng Thi Phổ (Mộ Đức) có nghề nấu mạch nha truyền thống lâu đời. Mạch nha được nấu thủ công từ gạo nếp và mầm lúa, cô đặc thành mật vàng óng, dẻo quánh. Ngày xưa, que mạch nha cuộn đũa là món quà vặt của bao đứa trẻ quê; ngày nay mạch nha Thi Phổ là món quà không thể thiếu của du khách.',
    ingredients: [
      'Gạo nếp ngon',
      'Mầm lúa (mộng mạ) tạo men đường',
      'Nước sạch, bếp củi lửa đều',
      'Hũ thủy tinh, hũ sành'
    ],
    steps: [
      'Ủ lúa cho nảy mầm, xay nhuyễn.',
      'Nấu nếp thành cháo, trộn mầm lúa để chuyển hóa tinh bột thành đường.',
      'Lọc lấy nước, cô đặc trên bếp nhiều giờ.',
      'Rót vào hũ khi mạch nha đạt độ dẻo, vàng óng.'
    ],
    enjoy: [
      'Cuộn mạch nha bằng đôi đũa, ăn như kẹo.',
      'Kẹp bánh tráng nướng, pha nước ấm, làm nguyên liệu kẹo gương, bánh nổ.'
    ],
    where: [
      'Làng Thi Phổ (Mộ Đức).',
      'Cửa hàng đặc sản ở TP. Quảng Ngãi.'
    ],
    season: 'Quanh năm',
    price: 'Giá bình dân',
    tags: ['mach nha', 'thi pho', 'mo duc']
  },
  {
    id: 'banh-no',
    name: 'Bánh nổ',
    category: 'qua-bieu',
    subgroup: 'Bánh kẹo truyền thống',
    regions: ['lang-nghe'],
    area: 'Làng nghề Quảng Ngãi',
    image: 'dishes/banh-no.jpg',
    short: 'Nếp rang nổ trắng xốp, kết với mạch nha, đường và gừng – món bánh Tết thơm giòn, dân dã.',
    origin: 'Bánh nổ là món bánh truyền thống trong mâm cỗ Tết của người Quảng Ngãi. Hạt nếp được rang đến khi nổ bung trắng muốt, rồi trộn với mạch nha, đường và gừng, ép thành từng chiếc bánh tròn giòn thơm – món quà gói ghém cả hương vị sum vầy ngày xuân.',
    ingredients: [
      'Nếp ngon phơi khô',
      'Mạch nha, đường',
      'Gừng giã',
      'Cát nóng hoặc nồi đất để rang'
    ],
    steps: [
      'Rang nếp trong nồi cát nóng cho hạt nổ bung.',
      'Nấu mạch nha với đường, gừng.',
      'Trộn nhanh nếp nổ với mạch nha, cho vào khuôn tròn ép chặt.',
      'Để nguội, bảo quản kín.'
    ],
    enjoy: [
      'Ăn kèm trà xanh, trà gừng.',
      'Dâng cúng tổ tiên, làm quà Tết.'
    ],
    where: [
      'Các làng nghề bánh truyền thống, chợ Tết ở Quảng Ngãi.',
      'Cửa hàng đặc sản.'
    ],
    season: 'Nhiều nhất dịp Tết',
    price: 'Giá bình dân',
    tags: ['banh no', 'nep', 'banh tet']
  },
  {
    id: 'banh-it-la-gai',
    name: 'Bánh ít lá gai',
    category: 'qua-bieu',
    subgroup: 'Bánh kẹo truyền thống',
    regions: ['lang-nghe'],
    area: 'Làng quê Quảng Ngãi',
    image: 'dishes/banh-it-la-gai.jpg',
    short: 'Bánh ít đen bóng làm từ lá gai và nếp, nhân đậu xanh dừa, gói lá chuối – ngọt dẻo, thơm nồng.',
    origin: 'Bánh ít lá gai có mặt trong mọi dịp giỗ chạp, cưới hỏi, lễ Tết của người miền Trung. Ở Quảng Ngãi, bánh được gói hình chóp bằng lá chuối, vỏ đen óng ánh, dẻo thơm mùi lá gai. Bánh ít còn là lễ vật trong mâm sính lễ, biểu trưng cho sự gắn kết, son sắt.',
    ingredients: [
      'Lá gai tươi, luộc giã nhuyễn',
      'Bột nếp',
      'Đậu xanh, dừa nạo, đường',
      'Lá chuối để gói'
    ],
    steps: [
      'Luộc lá gai, giã nhuyễn rồi nhồi với bột nếp và đường.',
      'Nấu nhân đậu xanh, dừa.',
      'Nặn bánh, cho nhân, gói lá chuối hình chóp.',
      'Hấp chín khoảng 30 – 45 phút.'
    ],
    enjoy: [
      'Ăn nguội hoặc hấp lại, kèm trà xanh.'
    ],
    where: [
      'Chợ Quảng Ngãi, các làng nghề bánh truyền thống.'
    ],
    season: 'Quanh năm, nhiều vào dịp giỗ Tết',
    price: 'Giá bình dân',
    tags: ['banh it', 'la gai', 'banh la']
  },
  {
    id: 'banh-bo',
    name: 'Bánh bó',
    category: 'qua-bieu',
    subgroup: 'Bánh kẹo truyền thống',
    regions: ['lang-nghe'],
    area: 'Làng quê Quảng Ngãi',
    image: 'dishes/banh-bo.jpg',
    short: 'Bột nếp dẻo cuộn mứt bí, gừng, thơm, cà rốt, dừa – cắt lát nhiều màu, món bánh Tết xứ Quảng.',
    origin: 'Bánh bó là món bánh truyền thống gắn với mâm cỗ Tết và bàn thờ gia tiên của người Quảng Ngãi. Tên gọi đến từ cách làm: lớp bột nếp dẻo được cán mỏng, trải mứt củ quả lên rồi cuộn, “bó” chặt thành đòn. Mỗi lát bánh cắt ra rực rỡ sắc màu – trắng của nếp, đỏ của cà rốt, xanh của bí, vàng của gừng và thơm.',
    ingredients: [
      'Bột nếp xay mịn',
      'Nước đường sên dẻo',
      'Mứt bí, cà rốt, gừng, thơm (dứa)',
      'Dừa nạo'
    ],
    steps: [
      'Sên mứt củ quả với đường đến khi trong, thấm vị.',
      'Nhồi bột nếp với nước đường nóng cho dẻo mịn.',
      'Cán mỏng bột, trải đều mứt rồi cuộn chặt thành đòn.',
      'Để bánh se lại, cắt lát dày khoảng 1 cm khi ăn.'
    ],
    enjoy: [
      'Thưởng thức cùng trà xanh nóng để cân bằng vị ngọt.',
      'Bày đĩa mứt Tết, dâng cúng gia tiên.'
    ],
    where: [
      'Chợ Tết, cửa hàng đặc sản ở TP. Quảng Ngãi.'
    ],
    season: 'Nhiều nhất dịp Tết',
    price: 'Giá bình dân',
    tags: ['banh bo', 'mut', 'banh tet']
  },
  {
    id: 'banh-thuan',
    name: 'Bánh thuẫn',
    category: 'qua-bieu',
    subgroup: 'Bánh kẹo truyền thống',
    regions: ['lang-nghe'],
    area: 'Làng quê Quảng Ngãi',
    image: 'dishes/banh-thuan.jpg',
    short: 'Bánh hình hoa vàng ươm làm từ trứng, bột, đường – xốp mềm, thơm mùi trứng, món bánh ngày Tết, ngày giỗ.',
    origin: 'Bánh thuẫn là món bánh truyền thống trong ngày Tết và mâm cỗ cúng của người miền Trung. Bánh được nướng trong khuôn hình hoa, than đỏ trên dưới, cho ra những chiếc bánh vàng ươm, xốp mềm. Hình hoa nở tượng trưng cho may mắn, sum vầy.',
    ingredients: [
      'Trứng gà hoặc trứng vịt',
      'Bột năng (hoặc bột mì tùy nơi)',
      'Đường, vani, chút chanh',
      'Khuôn hình hoa'
    ],
    steps: [
      'Đánh trứng với đường đến khi bông xốp.',
      'Rây bột vào, trộn nhẹ tay.',
      'Đổ vào khuôn hoa đã làm nóng, nướng than trên dưới hoặc nướng lò.',
      'Lấy bánh ra khi vàng đều, để nguội cho giòn mặt.'
    ],
    enjoy: [
      'Ăn kèm trà, cà phê.',
      'Bày mâm cúng ngày Tết.'
    ],
    where: [
      'Chợ Quảng Ngãi, cửa hàng bánh truyền thống.'
    ],
    season: 'Quanh năm, nhiều vào dịp Tết',
    price: 'Giá bình dân',
    tags: ['banh thuan', 'banh trung', 'banh tet']
  }
];
