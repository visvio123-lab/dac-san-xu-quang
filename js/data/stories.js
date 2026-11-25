/**
 * Nội dung các bài viết Góc Văn hóa & Làng nghề.
 * body: mảng các khối { type: 'p' | 'h' | 'quote' | 'list', text | items }
 */
window.XQ = window.XQ || {};

XQ.stories = [
  {
    id: 'mua-don-song-tra',
    title: 'Mùa Don sông Trà – Vị ngọt từ lòng sông',
    category: 'Mùa nào thức nấy',
    excerpt: 'Tờ mờ sáng, những chiếc cào tre lại rẽ nước sông Trà. Hành trình từ con don nhỏ bé đến tô don nóng hổi là câu chuyện về sự cần mẫn của người dân ven sông.',
    image: 'stories/mua-don-song-tra.jpg',
    readTime: 5,
    date: '2026-06-12',
    related: ['don-song-tra', 'banh-trang-dap', 'banh-beo'],
    body: [
      { type: 'p', text: 'Khi trời còn chưa sáng hẳn, mặt sông Trà Khúc đoạn chảy qua Nghĩa Phú, Cổ Lũy đã lấp lóa bóng người. Họ lội xuống dòng nước ngang ngực, hai tay đẩy chiếc cào tre có gắn lưới, chậm rãi “cào” lớp cát dưới đáy sông. Đó là nghề cào don – nghề đã nuôi sống bao thế hệ người dân vùng hạ lưu.' },
      { type: 'h', text: 'Con don – sản vật của vùng nước lợ' },
      { type: 'p', text: 'Don là loài nhuyễn thể hai mảnh vỏ nhỏ, sống ở vùng nước lợ nơi sông gặp biển. Người Quảng Ngãi vẫn tự hào rằng con don là sản vật hiếm có, gắn bó với dòng sông Trà như một phần của quê hương. Don có quanh năm, nhưng vào mùa nắng, khi nước sông trong và ổn định, don nhiều và béo nhất.' },
      { type: 'quote', text: 'Một tô don nóng buổi sớm, bẻ thêm miếng bánh tráng giòn, cắn trái ớt xiêm – vậy là đủ thấy cả quê hương trong lòng.' },
      { type: 'h', text: 'Từ dòng sông đến bếp lửa' },
      { type: 'p', text: 'Don mang về được ngâm cho nhả cát, luộc chín rồi lể lấy thịt. Công đoạn lể don đòi hỏi sự tỉ mỉ, thường do các bà, các mẹ làm từ khuya. Nước luộc don được để lắng, gạn lấy phần trong – đó chính là “linh hồn” làm nên vị ngọt thanh của tô don.' },
      { type: 'list', items: ['Sáng sớm: cào don trên sông', 'Trưa: ngâm, rửa, luộc don', 'Chiều tối: lể don, xào thịt', 'Rạng sáng hôm sau: gánh don ra chợ, ra quán'] },
      { type: 'p', text: 'Ngày nay, don còn được xào sẵn, đóng hũ hút chân không để những người con xa xứ có thể mang theo hương vị quê nhà. Nhưng với người Quảng Ngãi, ngon nhất vẫn là tô don bên bờ sông, nơi gió Trà Khúc thổi mát và bóng núi Ấn in trên mặt nước.' }
    ]
  },
  {
    id: 'keo-guong-thu-xa',
    title: 'Làng nghề kẹo gương Thu Xà – Ngọt trong như gương soi',
    category: 'Làng nghề',
    excerpt: 'Giữa phố cổ Thu Xà rêu phong, những tấm kẹo gương trong veo vẫn được làm thủ công như cách đây hàng trăm năm.',
    image: 'stories/keo-guong-thu-xa.jpg',
    readTime: 4,
    date: '2026-01-18',
    related: ['keo-guong-thu-xa', 'mach-nha-mo-duc', 'banh-no'],
    body: [
      { type: 'p', text: 'Thu Xà (Tư Nghĩa) từng là phố cảng sầm uất của người Hoa trên đất Quảng Ngãi. Những hội quán, dãy nhà cổ còn lại đến hôm nay là chứng tích của một thời giao thương nhộn nhịp – và cũng là nơi lưu giữ một món quà quê độc đáo: kẹo gương.' },
      { type: 'h', text: 'Vì sao gọi là kẹo gương?' },
      { type: 'p', text: 'Kẹo được làm từ mạch nha, đường, đậu phộng và mè, phết mỏng lên lá bánh tráng rồi phơi, nướng. Khi hoàn thành, mặt kẹo trong suốt, bóng loáng như mặt gương soi – cái tên “kẹo gương” ra đời giản dị như vậy.' },
      { type: 'quote', text: 'Kẹo gương ngon là kẹo trong, giòn, ngọt thanh, ăn không dính răng – bí quyết nằm ở mẻ mạch nha và ngọn lửa than.' },
      { type: 'h', text: 'Giữ lửa nghề xưa' },
      { type: 'p', text: 'Làm kẹo gương cần sự kiên nhẫn: nấu mạch nha đúng độ, phết kẹo thật đều tay, canh nắng để phơi và canh lửa để nướng. Những tháng giáp Tết là lúc làng nghề rộn ràng nhất, khi đơn hàng từ khắp nơi đổ về.' },
      { type: 'p', text: 'Ngày nay, kẹo gương Thu Xà đã có mặt ở nhiều cửa hàng đặc sản, trở thành món quà biếu mang đậm hồn quê Quảng Ngãi. Một miếng kẹo giòn tan bên chén trà xanh là cách để cảm nhận sự ngọt ngào của mảnh đất này.' }
    ]
  },
  {
    id: 'hanh-trinh-toi-ly-son',
    title: 'Hành trình tỏi Lý Sơn – Từ cát biển đến mâm cơm',
    category: 'Sản vật biển đảo',
    excerpt: 'Trên hòn đảo núi lửa giữa biển khơi, người Lý Sơn đã biến những bãi cát trắng thành “vương quốc tỏi” nổi tiếng khắp cả nước.',
    image: 'stories/hanh-trinh-toi-ly-son.jpg',
    readTime: 6,
    date: '2026-03-02',
    related: ['toi-ly-son', 'goi-toi-ly-son', 'goi-rong-bien'],
    body: [
      { type: 'p', text: 'Đứng trên đỉnh Thới Lới nhìn xuống, đảo Lý Sơn hiện ra như một tấm thảm kẻ ô: những thửa ruộng tỏi xanh mướt trải dài đến tận bờ biển. Ít ai biết rằng, để có được những ruộng tỏi ấy, người dân đảo đã phải gánh từng gánh cát biển phủ lên nền đất bazan suốt bao thế hệ.' },
      { type: 'h', text: 'Bí mật của đất và cát' },
      { type: 'p', text: 'Đất Lý Sơn là đất bazan núi lửa giàu khoáng chất. Lớp cát trắng phủ bên trên giúp giữ ẩm, thoát nước và tạo nên điều kiện đặc biệt cho cây tỏi. Nhờ vậy, tỏi Lý Sơn có củ nhỏ, tép trắng, mùi thơm dịu và vị cay không gắt.' },
      { type: 'quote', text: 'Tỏi Lý Sơn không chỉ là gia vị – đó là mồ hôi, là nắng gió và là niềm tự hào của người dân đảo.' },
      { type: 'h', text: 'Mùa tỏi trên đảo' },
      { type: 'p', text: 'Cuối năm là lúc người Lý Sơn xuống giống. Sau khoảng ba đến bốn tháng chăm sóc, những củ tỏi đầu tiên được thu hoạch, bó thành từng chùm, treo phơi khắp hiên nhà. Trong mỗi mùa tỏi, người dân còn tìm được những củ “tỏi cô đơn” chỉ có một tép – loại tỏi hiếm, được ngâm rượu, ngâm mật ong như vị thuốc quý.' },
      { type: 'list', items: ['Tỏi nhiều tép: gia vị cho mọi món ăn', 'Tỏi cô đơn: ngâm mật ong, ngâm rượu', 'Thân tỏi non: nguyên liệu cho món gỏi tỏi độc đáo'] },
      { type: 'p', text: 'Từ cánh đồng cát, tỏi Lý Sơn theo tàu vào đất liền, có mặt trên mâm cơm của khắp mọi miền. Mỗi tép tỏi mang theo vị mặn mòi của biển và câu chuyện bền bỉ của những con người bám đảo.' }
    ]
  },
  {
    id: 'que-tra-bong',
    title: 'Quế Trà Bồng – Hương rừng đại ngàn',
    category: 'Sản vật núi rừng',
    excerpt: 'Giữa đại ngàn phía tây Quảng Ngãi, những cánh rừng quế xanh thẳm gắn bó với đồng bào Cor như một phần máu thịt.',
    image: 'stories/que-tra-bong.jpg',
    readTime: 4,
    date: '2026-08-20',
    related: ['que-tra-bong', 'ca-nien-nuong', 'duong-phoi'],
    body: [
      { type: 'p', text: 'Ngược sông Trà Bồng lên miền núi, không khí bỗng thoảng một mùi hương cay nồng, ấm áp. Đó là hương quế – thứ hương đã gắn với vùng đất Trà Bồng qua bao thế hệ.' },
      { type: 'h', text: 'Cây di sản của đồng bào Cor' },
      { type: 'p', text: 'Với đồng bào Cor, cây quế không chỉ là nguồn sinh kế mà còn là tài sản để lại cho con cháu. Những gốc quế lâu năm vỏ dày, nhiều tinh dầu được xem như báu vật của gia đình. Quế Trà Bồng nổi tiếng với vị cay ngọt, mùi thơm đậm, vượt trội so với nhiều vùng quế khác.' },
      { type: 'quote', text: 'Ai về Trà Bồng mà xem, hương quế thơm lừng cả một vùng núi non.' },
      { type: 'h', text: 'Từ rừng quế đến căn bếp' },
      { type: 'p', text: 'Vỏ quế sau khi bóc được ủ cho ra dầu, phơi nắng rồi cuộn thành thanh. Quế được dùng làm gia vị cho những món kho, món hầm, pha trà, ngâm rượu hay chiết tinh dầu. Một thanh quế Trà Bồng trong căn bếp là cả hơi thở của núi rừng.' },
      { type: 'p', text: 'Khi ghé Trà Bồng, đừng quên thưởng thức món cá niên nướng chấm muối ớt xanh – một món ăn khác mang trọn vị trong lành của suối nguồn đại ngàn.' }
    ]
  }
];
