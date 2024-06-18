function addNewRow(rowData) {
  const currentDate = new Date()
  const ws = ss.getSheetByName("Data")
  const userEmail = Session.getActiveUser().getEmail()
  ws.appendRow([
                currentDate,              //Timestamp
                userEmail,                //Email người order
                rowData.lineName,         //Tên line người order
                rowData.emailStudent,     //Email học viên
                rowData.level,            //Cấp độ
                rowData.product,          //Sản phẩm
                rowData.channel,          //Kênh tiếp nhận
                rowData.issueType,        //Loại issue
                rowData.description,      //Mô tả chi tiết
                ])

  return true
}

