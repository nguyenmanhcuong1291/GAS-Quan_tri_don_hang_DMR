function onEdit() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var r = sheet.getActiveCell();
  var col = r.getColumn();
  var columnIndexTT = getColumnByName(columnName= "Trạng thái")


  // Kiểm tra chỉnh sửa trong cột Trạng thái
  if (col == columnIndexTT & sheet.getRange(r.getRow(), 1).getValue()!="") { 
    var status = r.getValue();
    var timestampColumn = getTimestampColumn(status);
    
    if (timestampColumn !== null) {
      var timestampRange = sheet.getRange(r.getRow(), timestampColumn);
      var currentTime = new Date();
      if (timestampRange.getValue() === '') {
        timestampRange.setValue(currentTime);
    }
  }
}
}


// Hàm trả về số cột của Timestamp tương ứng với trạng thái
function getTimestampColumn(status) {
      return getColumnByName("Timestamp "+status);
  }


// Hàm trả về số cột của bảng tính dựa trên tên cột
function getColumnByName(columnName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = sheet.getRange(2, 1, 1, sheet.getLastColumn()).getValues()[0];

  for (var i = 0; i < headers.length; i++) {
    if (headers[i] === columnName) {
      return i + 1;  // Trả về số cột (A=1, B=2, ..., L=12)
      break;
    }
  }

  return null;  // Không tìm thấy tên cột
}
