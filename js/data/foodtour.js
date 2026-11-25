/**
 * Dữ liệu Lộ trình thưởng thức 1 ngày tại Quảng Ngãi (Food Tour gợi ý).
 * Mỗi chặng gắn với mã id món trong dishes.js để người dùng bấm vào mở ngay Modal chi tiết.
 */
window.XQ = window.XQ || {};

XQ.foodTours = [
  {
    id: 'tp-song-tra',
    name: '1 ngày ăn trọn TP. Quảng Ngãi & Sông Trà',
    short: 'TP. Quảng Ngãi & Sông Trà',
    badge: 'Lộ trình kinh điển',
    summary: 'Hành trình từ sáng tinh mơ bên dòng Trà Khúc đến tối muộn giữa lòng phố thị: đủ món nước nóng hổi, ăn vặt tuổi thơ và thức quà quê mang về.',
    budget: 'Khoảng 200.000 – 350.000đ / người (chưa tính quà)',
    stops: [
      {
        time: '06:30',
        period: 'Sáng sớm',
        title: 'Đón nắng bên sông Trà với món nước nóng hổi',
        area: 'Ven đê sông Trà · Chợ Quảng Ngãi',
        note: 'Người Quảng bắt đầu ngày mới rất sớm. Ghé quán ven đê gọi tô don nóng bẻ vụn bánh tráng mè, cắn kèm trái ớt xiêm, hoặc chọn tô mì Quảng nhiều nước thanh ngọt.',
        tip: 'Đi trước 8:00 để thưởng thức nồi don, nồi mì mới nấu ngon nhất.',
        dishes: ['don-song-tra', 'mi-quang']
      },
      {
        time: '11:30',
        period: 'Bữa trưa',
        title: 'Nạp năng lượng với bữa cơm trưa đậm vị quê',
        area: 'Trung tâm TP. Quảng Ngãi',
        note: 'Giữa trưa nắng miền Trung, một đĩa cơm gà vàng ươm ăn kèm hành tím muối và chén canh gà nóng – hoặc tô bún cá ngừ um thơm cà chua, dứa – là lựa chọn vừa no vừa tròn vị.',
        tip: 'Gọi thêm ly trà đá hoặc nước sâm giải nhiệt cho buổi chiều.',
        dishes: ['com-ga', 'bun-ca-ngu', 'bun-mam-nem']
      },
      {
        time: '15:30',
        period: 'Xế chiều',
        title: 'Giờ vàng ăn vặt phố thị & ven xã An Phú',
        area: 'Các con phố trung tâm · Xã An Phú',
        note: 'Chiều xuống là lúc các gánh bánh bèo, chảo ram bắp và xe gỏi rộn ràng nhất. Xắn chén bánh bèo nhân khô rắc bánh mì giòn, cuốn ram bắp nóng rụm rồi hít hà đĩa bò hít cay nồng.',
        tip: 'Gọi mỗi món một phần nhỏ để đi vòng quanh thưởng thức được nhiều vị nhất.',
        dishes: ['banh-beo', 'ram-bap', 'bo-hit']
      },
      {
        time: '18:30',
        period: 'Buổi tối',
        title: 'Quây quần bên khuôn bánh xèo đất & mâm ốc',
        area: 'TP. Quảng Ngãi · Bờ kè sông Trà',
        note: 'Tối mát trời là lúc lý tưởng để ngồi cạnh bếp than nghe tiếng bột “xèo” trên khuôn đất, cuốn bánh xèo tôm mực chấm mắm nêm, tráng miệng thêm bánh tráng đập hoặc đĩa ốc hút sả ớt.',
        tip: 'Nếu đi nhóm bạn, gọi thêm mẹt ram thịt nướng để tự tay cuốn cực vui.',
        dishes: ['banh-xeo', 'oc-hut', 'banh-trang-dap', 'ram-thit-nuong']
      },
      {
        time: '20:30',
        period: 'Quà mang về',
        title: 'Gói ghém tình quê xứ Quảng trước khi về',
        area: 'Chợ Quảng Ngãi · Cửa hàng đặc sản',
        note: 'Đừng quên ghé chọn vài hũ cá bống sông Trà kho tiêu, phong kẹo gương Thu Xà giòn trong, hũ mạch nha Mộ Đức và bịch đường phổi ăn cùng trà nóng.',
        tip: 'Nên mua cá bống đóng hũ hút chân không và kẹo gương gói kín để đi xa không bị ỉu.',
        dishes: ['ca-bong-kho-tieu', 'keo-guong-thu-xa', 'mach-nha-mo-duc', 'duong-phoi']
      }
    ]
  },
  {
    id: 'dao-ly-son',
    name: '1 ngày ra Đảo Lý Sơn – Trọn vị biển khơi',
    short: 'Đảo Lý Sơn & Cảng Sa Kỳ',
    badge: 'Biển đảo núi lửa',
    summary: 'Hành trình từ cảng Sa Kỳ ra hòn đảo núi lửa giữa đại dương: nếm hải sản tươi sống, thưởng thức gỏi tỏi độc nhất vô nhị và mang đặc sản đảo về đất liền.',
    budget: 'Khoảng 450.000 – 800.000đ / người (tùy hải sản theo mùa)',
    stops: [
      {
        time: '06:45',
        period: 'Trước khi lên tàu',
        title: 'Lót dạ nhẹ nhàng gần vùng biển Nghĩa An – Sa Kỳ',
        area: 'Xã An Phú (Nghĩa An) · Cảng Sa Kỳ',
        note: 'Trước chuyến tàu cao tốc ra đảo, ăn một tô bún cá ngừ tươi hoặc vài chén bánh bèo nóng vừa ấm bụng vừa đủ nhẹ để đi tàu biển thoải mái.',
        tip: 'Có mặt ở cảng Sa Kỳ trước giờ tàu chạy ít nhất 30 phút.',
        dishes: ['bun-ca-ngu', 'banh-beo']
      },
      {
        time: '12:00',
        period: 'Bữa trưa trên đảo',
        title: 'Đại tiệc hải sản & gỏi tỏi “vương quốc tỏi”',
        area: 'Huyện đảo Lý Sơn',
        note: 'Khai vị bằng gỏi tỏi non thơm dịu không hăng và gỏi rong biển giòn sần sật, sau đó thưởng thức cua huỳnh đế hấp chấm muối tiêu chanh để cảm nhận độ ngọt chắc nguyên bản.',
        tip: 'Hỏi chủ quán về mùa cua huỳnh đế và gỏi tỏi tươi ngay khi tới đảo.',
        dishes: ['goi-toi-ly-son', 'goi-rong-bien', 'cua-huynh-de']
      },
      {
        time: '16:30',
        period: 'Chiều hoàng hôn',
        title: 'Giải nhiệt xu xoa & thưởng thức nhum biển nướng',
        area: 'Cổng Tò Vò · Ven biển Lý Sơn',
        note: 'Sau buổi chiều tham quan đỉnh Thới Lới, Chùa Hang, nhâm nhi ly xu xoa nước đường gừng đá bào mát lạnh, rồi ghé quán ven biển gọi vài con nhum nướng mỡ hành béo ngậy.',
        tip: 'Nhum nướng ngon nhất khi ăn nóng ngay trên vỏ, rắc chút đậu phộng và rau răm.',
        dishes: ['xu-xoa', 'nhum-bien']
      },
      {
        time: 'Trước khi về',
        period: 'Quà đảo mang về',
        title: 'Mang hương vị đại dương về đất liền',
        area: 'Chợ Lý Sơn · Cảng Sa Kỳ',
        note: 'Chọn vài chùm tỏi Lý Sơn (hoặc tỏi cô đơn quý hiếm) phơi khô, thêm hũ mắm nhum Mỹ Á đậm đà và rong biển khô để làm quà biếu.',
        tip: 'Mua tỏi tại vườn hoặc chợ đảo, ưu tiên củ nhỏ, vỏ tím nhạt, tép chắc.',
        dishes: ['toi-ly-son', 'mam-nhum-my-a']
      }
    ]
  }
];
