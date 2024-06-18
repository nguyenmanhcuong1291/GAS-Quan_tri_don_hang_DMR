function onEdit() {
  var s = SpreadsheetApp.getActiveSheet();

    var r = s.getActiveCell();
    
    console.log(r.getValue())
    if(r.getColumn() == 14 && r.offset(0, -12).getValue()!="" && r.getValue()=="Đang xử lý") { // kiểm tra cột đang nhập dữ liệu phải cột thứ 13 hay không
    var nextCell = r.offset(0, 13); // dùng offset để ghi thời gian sang cột bên phải
    if( nextCell.getValue() === '' ) // kiểm tra xem ô điền có rỗng không
      nextCell.setValue(new Date());
    }
    else if(r.getColumn() == 14 && r.offset(0, -12).getValue()!="" && r.getValue()=="Hoàn thành") { // kiểm tra cột đang nhập dữ liệu phải cột thứ 13 hay không
    var nextCell = r.offset(0, 14); // dùng offset để ghi thời gian sang cột bên phải
    if( nextCell.getValue() === '' ) // kiểm tra xem ô điền có rỗng không
      nextCell.setValue(new Date());
    }
        else if(r.getColumn() == 14 && r.offset(0, -12).getValue()!="" && r.getValue()=="Không hỗ trợ được") { // kiểm tra cột đang nhập dữ liệu phải cột thứ 13 hay không
    var nextCell = r.offset(0, 15); // dùng offset để ghi thời gian sang cột bên phải
    if( nextCell.getValue() === '' ) // kiểm tra xem ô điền có rỗng không
      nextCell.setValue(new Date());
    }
        else if(r.getColumn() == 14 && r.offset(0, -12).getValue()!="" && r.getValue()=="Từ chối") { // kiểm tra cột đang nhập dữ liệu phải cột thứ 13 hay không
    var nextCell = r.offset(0, 16); // dùng offset để ghi thời gian sang cột bên phải
    if( nextCell.getValue() === '' ) // kiểm tra xem ô điền có rỗng không
      nextCell.setValue(new Date());
    }
  }
  