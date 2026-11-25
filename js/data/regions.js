/**
 * Danh sách 5 khu vực ẩm thực & mô tả đặc trưng từng vùng.
 */
window.XQ = window.XQ || {};

XQ.regions = [
  {
    id: 'tp-quang-ngai',
    name: 'Trung tâm TP. Quảng Ngãi',
    short: 'TP. Quảng Ngãi',
    tagline: 'Phố thị bên dòng Trà Khúc – nơi hội tụ trăm món ngon',
    image: 'regions/tp-quang-ngai.jpg',
    description: 'Thành phố nằm bên bờ nam sông Trà Khúc, dưới bóng núi Thiên Ấn. Đây là “mâm cỗ lớn” của ẩm thực Quảng Ngãi: từ gánh bánh bèo sáng sớm, quán don ven đê đến hàng ram bắp, bánh xèo khuôn đất rộn ràng khi chiều xuống.',
    intro: [
      'Người ta vẫn bảo, muốn biết hồn ẩm thực Quảng Ngãi, hãy dậy thật sớm và đi một vòng quanh chợ Quảng Ngãi. Hơi nóng bốc lên từ nồi don, mùi thơm của bánh xèo vừa nhấc khuôn, tiếng rao lanh lảnh của gánh bánh bèo… tất cả tạo nên một bức tranh phố thị bình dị mà sống động.',
      'Thành phố là nơi các sản vật từ biển Lý Sơn, đồng bằng sông Trà và núi rừng Trà Bồng cùng hội tụ, được người dân chế biến thành những món ăn mang đậm dấu ấn riêng: vị đậm đà, cay nồng, chân chất mà tinh tế.'
    ],
    features: [
      { title: 'Ẩm thực đường phố', text: 'Bánh bèo, bò hít, gỏi da bò, ốc hút – rẻ, ngon và gắn với tuổi thơ của bao thế hệ.' },
      { title: 'Thủ phủ các loại ram', text: 'Ram bắp, ram tôm thịt, ram thịt nướng – mỗi loại một vẻ, đều giòn rụm và chấm mắm chua ngọt.' },
      { title: 'Bữa sáng no lòng', text: 'Don, mì Quảng, bún mắm nêm, bún cá – món nước nóng hổi mở đầu ngày mới.' }
    ],
    places: ['Chợ Quảng Ngãi (chợ trung tâm)', 'Đê bao và công viên ven sông Trà Khúc', 'Danh thắng Thiên Ấn Niêm Hà (Núi Ấn – Sông Trà)'],
    tips: ['Đi ăn sáng trước 8 giờ để kịp các món don, bánh bèo nóng.', 'Buổi chiều là giờ vàng của ram bắp, bánh xèo, gỏi vỉa hè.', 'Hỏi “có ớt xiêm không?” – người Quảng thích cay, bạn nên thử một chút.']
  },
  {
    id: 'an-phu-co-luy',
    name: 'Xã An Phú – Cửa biển Cổ Lũy',
    short: 'An Phú – Cổ Lũy',
    tagline: 'Nơi sông Trà gặp biển, quê hương con don và bánh xèo hải sản',
    image: 'regions/an-phu-co-luy.jpg',
    description: 'Vùng hạ lưu sông Trà Khúc gồm Nghĩa Phú, Nghĩa An cũ (nay thuộc xã An Phú) và làng chài Cổ Lũy. Nước ngọt đầu nguồn hòa nước mặn cửa biển tạo nên vùng nước lợ trù phú – nơi sinh ra con don, con ốc và những mẻ cá tươi rói.',
    intro: [
      '“Cổ Lũy cô thôn” – xóm làng cô tịch bên cửa biển – là một trong mười hai thắng cảnh nổi tiếng của Quảng Ngãi xưa. Ngày nay, làng chài vẫn giữ nhịp sống mộc mạc: tờ mờ sáng, người dân dầm mình dưới sông cào don; khi nắng lên, ghe thuyền cập bến mang theo tôm, mực, cá.',
      'Ẩm thực nơi đây vì thế mang vị “nước lợ” rất riêng: ngọt thanh của don, tươi rói của hải sản, đậm đà của mắm nêm và chân chất trong từng chiếc bánh xèo, chén bánh bèo.'
    ],
    features: [
      { title: 'Quê hương con don', text: 'Nghề cào don truyền đời trên sông Trà – nguyên liệu cho món ăn biểu tượng của Quảng Ngãi.' },
      { title: 'Hải sản cửa biển', text: 'Tôm, mực, ốc, cá ngừ tươi mỗi sáng – nhân bánh xèo, bún cá, gỏi ốc.' },
      { title: 'Làng chài bình yên', text: 'Cảnh bình minh cửa biển Cổ Lũy, thuyền thúng và bãi bồi đầy thơ mộng.' }
    ],
    places: ['Làng chài Cổ Lũy', 'Bến đò, bãi cào don ven sông Trà (Nghĩa Phú cũ)', 'Bãi biển Nghĩa An'],
    tips: ['Đến từ sáng sớm để xem người dân cào don và mua don tươi.', 'Hải sản nên mua tại bến khi ghe vừa cập để có giá tốt và tươi nhất.', 'Kết hợp ngắm hoàng hôn cửa biển rồi về phố ăn tối.']
  },
  {
    id: 'ly-son',
    name: 'Đảo Lý Sơn',
    short: 'Đảo Lý Sơn',
    tagline: '“Vương quốc tỏi” giữa biển khơi – nơi biển đảo dâng tặng sản vật',
    image: 'regions/ly-son.jpg',
    description: 'Hòn đảo núi lửa cách đất liền khoảng 30 km, nổi tiếng với những ruộng tỏi trên nền cát trắng, nước biển trong xanh và kho hải sản quý: nhum, cua huỳnh đế, rong biển. Ẩm thực Lý Sơn mặn mòi, tươi nguyên vị đại dương.',
    intro: [
      'Từ cảng Sa Kỳ, chỉ khoảng một giờ tàu cao tốc là bạn đã đặt chân đến Lý Sơn – hòn đảo hình thành từ những đợt phun trào núi lửa cổ. Đất bazan màu mỡ phủ lớp cát biển trắng là nơi người dân trồng nên thứ tỏi trứ danh khắp cả nước.',
      'Biển Lý Sơn trong vắt, nhiều rạn đá, là nhà của nhum biển, rong biển, cua huỳnh đế. Mỗi món ăn trên đảo đều giản dị trong cách chế biến, để giữ trọn vẹn vị ngọt tự nhiên của biển cả.'
    ],
    features: [
      { title: 'Tỏi Lý Sơn', text: 'Tỏi nhiều tép, tỏi cô đơn thơm dịu – và cả món gỏi tỏi độc đáo chỉ có trên đảo.' },
      { title: 'Hải sản quý', text: 'Cua huỳnh đế, nhum biển, ốc, cá – tươi sống từ biển khơi.' },
      { title: 'Rong biển & xu xoa', text: 'Rong biển mùa xuân, rong câu làm xu xoa – vị mát lành của đại dương.' }
    ],
    places: ['Cổng Tò Vò – ngắm hoàng hôn', 'Đỉnh Thới Lới – miệng núi lửa cổ', 'Chùa Hang và Đảo Bé (An Bình)', 'Âm Linh Tự – Hải đội Hoàng Sa'],
    tips: ['Tàu cao tốc xuất phát từ cảng Sa Kỳ, nên đặt vé trước vào mùa du lịch.', 'Mùa biển êm (khoảng tháng 3 – 9) thuận lợi để ra đảo và thưởng thức hải sản.', 'Mua tỏi tại vườn hoặc chợ đảo để chọn được tỏi cô đơn chuẩn.']
  },
  {
    id: 'tra-bong',
    name: 'Vùng cao Trà Bồng',
    short: 'Vùng cao Trà Bồng',
    tagline: 'Hương quế đại ngàn, vị cá suối trong veo',
    image: 'regions/tra-bong.jpg',
    description: 'Miền núi phía tây Quảng Ngãi gồm Trà Bồng, Sơn Hà, Sơn Tây – quê hương của đồng bào Cor, Hrê, Ca Dong. Núi rừng hùng vĩ, suối nguồn trong vắt mang đến những sản vật quý như quế cao sơn, cá niên, rau rừng.',
    intro: [
      'Ngược dòng sông Trà Bồng lên miền tây Quảng Ngãi, không khí bỗng trở nên trong lành và thoảng hương quế. Những cánh rừng quế xanh ngút ngàn đã gắn bó với đồng bào Cor qua bao thế hệ, trở thành cây di sản và niềm tự hào của vùng đất.',
      'Ẩm thực vùng cao mộc mạc, gần gũi với thiên nhiên: cá niên nướng kẹp tre, cơm lam, rau rừng, muối ớt xanh… mỗi món ăn đều mang hơi thở của núi rừng đại ngàn.'
    ],
    features: [
      { title: 'Quế Trà Bồng', text: 'Quế cao sơn vỏ dày, nhiều tinh dầu, cay ngọt – sản vật trứ danh miền núi.' },
      { title: 'Cá niên suối nguồn', text: 'Loài cá chỉ sống ở suối nước trong, ruột đắng nhẹ thơm, nướng mọi chấm muối ớt xanh.' },
      { title: 'Văn hóa đồng bào', text: 'Món ăn gắn với lễ hội, rượu cần, cồng chiêng của người Cor, Hrê.' }
    ],
    places: ['Rừng quế Trà Bồng', 'Các con suối đầu nguồn vùng Trà Bồng, Sơn Hà', 'Chợ phiên vùng cao'],
    tips: ['Đường lên vùng cao nhiều đèo dốc, nên đi vào mùa khô.', 'Hãy tôn trọng phong tục của đồng bào khi ghé thăm bản làng.', 'Mua quế trực tiếp từ hợp tác xã để có quế chuẩn, nhiều dầu.']
  },
  {
    id: 'lang-nghe',
    name: 'Làng nghề truyền thống',
    short: 'Làng nghề & Đồng quê',
    tagline: 'Ngọt ngào mạch nha, kẹo gương – hồn quê trong từng món quà',
    image: 'regions/lang-nghe.jpg',
    description: 'Dọc đồng bằng Tư Nghĩa, Mộ Đức, Đức Phổ là những làng nghề trăm tuổi: kẹo gương Thu Xà, mạch nha Thi Phổ, mắm nhum Mỹ Á, đường phổi xứ mía… Đây là nơi sinh ra những món quà quê mang theo tình người xứ Quảng đi khắp mọi miền.',
    intro: [
      'Quảng Ngãi xưa nổi tiếng với cây mía, nghề làm đường và những làng nghề thủ công tinh xảo. Ca dao còn lưu: “Ai về Quảng Ngãi quê ta / Mía ngon, đường ngọt trắng ngà dễ ăn”.',
      'Đến hôm nay, nhiều làng nghề vẫn bền bỉ giữ lửa: phố cổ Thu Xà với kẹo gương, làng Thi Phổ với mạch nha, làng chài Mỹ Á với mắm nhum. Mỗi món quà là kết tinh của bàn tay khéo léo và sự kiên nhẫn của bao thế hệ.'
    ],
    features: [
      { title: 'Bánh kẹo ngày Tết', text: 'Kẹo gương, bánh nổ, bánh thuẫn, bánh bó, bánh ít lá gai – hương vị sum vầy.' },
      { title: 'Xứ mía ngọt ngào', text: 'Đường phổi, đường phèn, mạch nha – di sản của vùng đất mía đường.' },
      { title: 'Quà mặn đồng quê', text: 'Cá bống sông Trà kho tiêu, mắm nhum Mỹ Á, chim mía nướng.' }
    ],
    places: ['Phố cổ Thu Xà (Tư Nghĩa)', 'Làng mạch nha Thi Phổ (Mộ Đức)', 'Làng chài Mỹ Á (Đức Phổ)'],
    tips: ['Ghé làng nghề vào những tháng cuối năm để xem không khí làm bánh kẹo Tết.', 'Hỏi người làm nghề về cách bảo quản để quà giữ được lâu khi mang đi xa.', 'Ưu tiên mua tại cơ sở sản xuất để ủng hộ người làm nghề.']
  }
];
