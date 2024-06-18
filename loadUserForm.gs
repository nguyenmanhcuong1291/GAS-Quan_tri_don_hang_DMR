// Chạy hàm onOpen() khi bảng được mở.
function onOpen() {
  // Tạo một menu trong Google Sheets để mở biểu mẫu.
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Biểu mẫu')
      .addItem('Mở Biểu mẫu', 'loadForm')
      .addToUi();
}

// Hàm để tải biểu mẫu lên thanh bên.
function loadForm() {
  const html = HtmlService.createHtmlOutputFromFile('form')
      .setTitle('Biểu mẫu nhập thông tin')
      .setWidth(400)
      .setHeight(600);
  SpreadsheetApp.getUi().showSidebar(html);
}

// Hàm ghi nhận thông tin submit vào sheet cố định.
function onSubmit(formData) {
  var timestamp = new Date();
  var email = Session.getActiveUser().getEmail();
  
  // Đặt tên của sheet cố định để ghi nhận dữ liệu.
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data (Không chỉnh sửa)");
  
  // Ghi nhận thông tin vào sheet.
  sheet.appendRow([timestamp, email, formData.lineName, formData.studentEmail, formData.studentaccount, formData.level, formData.product, formData.studentClass, formData.channel, formData.issue, formData.description, formData.priority]);
}
