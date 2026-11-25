/**
 * Danh sách 6 nhóm món ăn.
 * Dữ liệu được gắn vào namespace toàn cục `window.XQ` để website chạy được
 * ngay cả khi mở trực tiếp file index.html (giao thức file://) mà không cần server.
 */
window.XQ = window.XQ || {};

XQ.categories = [
  {
    id: 'mon-chinh',
    name: 'Món chính & Món nước',
    short: 'Món chính',
    icon: 'bowl',
    color: '#b4462b',
    description: 'Những món ăn no, món nước nóng hổi làm nên bữa sáng, bữa trưa của người Quảng Ngãi.'
  },
  {
    id: 'ram',
    name: 'Các loại Ram đặc sản',
    short: 'Ram đặc sản',
    icon: 'roll',
    color: '#c8963e',
    description: 'Những cuốn ram nhỏ xinh, vàng ruộm, giòn rụm – niềm tự hào của phố thị bên sông Trà.'
  },
  {
    id: 'an-vat',
    name: 'Ăn vặt & Ẩm thực đường phố',
    short: 'Ăn vặt',
    icon: 'street',
    color: '#8b5a3c',
    description: 'Gánh hàng rong, xe gỏi, chén bánh bèo – hương vị tuổi thơ trên từng góc phố.'
  },
  {
    id: 'hai-san',
    name: 'Hải sản & Đặc sản đảo Lý Sơn',
    short: 'Hải sản Lý Sơn',
    icon: 'wave',
    color: '#3f6e6a',
    description: 'Tinh túy của biển khơi và “vương quốc tỏi” giữa đại dương.'
  },
  {
    id: 'nui-rung',
    name: 'Đặc sản núi rừng & Đồng quê',
    short: 'Núi rừng & Đồng quê',
    icon: 'mountain',
    color: '#5e6b3a',
    description: 'Vị trong lành của suối nguồn Trà Bồng và hương đồng nội xứ mía.'
  },
  {
    id: 'qua-bieu',
    name: 'Quà biếu, Bánh kẹo & Gia vị truyền thống',
    short: 'Quà biếu',
    icon: 'gift',
    color: '#7a3b2e',
    description: 'Món quà quê mang theo khi đi xa: kẹo gương, mạch nha, tỏi Lý Sơn, quế Trà Bồng…'
  }
];
