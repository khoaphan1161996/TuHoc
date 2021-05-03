// Video 13: Toán tử hậu tố và tiền tố
// gán output = ++a thì thực hiện cộng 1 cho a trước rồi gán. Còn gán output = a++ thì gán trước rồi mới cộng 1 cho a. 

// Video 22: Falsy và Truthy
// Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy 
// Ngược lại là Truthy
// 6 kiểu Falsy: 1.false; 0; '' or "" (chuỗi rỗng); null; undefined; NaN: khi kiểm tra số thì kiểm tra NaN vì NaN có typeof = Number,
// nếu không kiểm tra thì người ta truyền đối số = NaN vào sẽ check sai : isNaN() : trả ra boolean

// Video 25:
// Backslash (\): Để hiển thị được chuỗi chứa dấu gạch chéo ngược (\) ta phải thêm dấu \ vào trước hoặc sau nó.
// Làm việc với chuỗi: 
// + Cut string: Chuỗi.slice(4,6) hoặc Chuỗi.slice(4)
// + Replace string: Chuỗi.replace('JS','Javascript') hoặc dùng biểu thức 9 quy lấy tất cả 'JS' Chuỗi.replace(/JS/g,'Javascript')
// + Get character by index: Chuỗi.charAt(1) hoặc Chuỗi[1]

// Video 26
// Number.isFinite()	        : Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isInteger()	        : Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.parseFloat()	        : Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseInt()	        : Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.prototype.toFixed()	: Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// Number.prototype.toString()	: Chuyển đổi và trả về số đã cho dưới dạng chuỗi

// Video 29: Làm việc với mảng
// .pop() : xóa element cuối mảng và trả về phần tử đã xóa
// .push() : +phần tử cuối mảng và trả về độ dài mảng
// .shift() : xóa element đầu mảng và trả về phần tử đã xóa
// .unshift() : +phần tử đầu mảng và trả về độ dài mảng
// .splice() 
// .concat() : nối mảng
// .slice(): cắt mảng VD mảng.slice(1,2) cắt phần tử index 1

// Video 31: arguments( truyền đối số vào function)
// function writeLog(){
//     console.log(arguments)   // arguments là biến lưu các đối số truyền vào
// }

// function writeLog(){
//     var myString = ''
//     for (var param of arguments) {  // dùng for ... of trong object
//         myString += param + ` `
//     }
//     console.log(myString)
// }
// writeLog('Log1','Log2','Log3')

// Video 34: Các loại function
// Khi tạo ra 2 function trùng tên thì hàm sẽ chỉ thực thi function khai báo sau
// Declaration function(là function thường) ; Expression function ; Arrow function trong ES6
// Expression function : như callback
// + var showMessage = function(){} ; 
// + setTimeout(function(){},1000) ; 
// var myObject = {
// myFunction: function(){}
// }

// Video 35: Xài this trong obj

// var myInfo = {
//     name: 'Khoa',
//     age: 25,
//     getName: function() {
//         return this.name
//     }
// };
// console.log(myInfo.getName())

// Video 36: Tạo 1 Object Constructor : Xây 1 contructor và Video 37: Object Prototype : Tạo thêm thuộc tính ngoài contructor = prototype(hạn chế: không truyền tham số vào dc)

// function User(fristName,lastName,avatar) {  // chữ đầu tên function của OC ghi hoa ( quy ước chung)
//     this.fristName = fristName;  // this ở đây để khi tạo model mới đều có key này NHƯ REACT
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getFullName = function() {
//         return `${this.fristName} ${this.lastName}`  // this ở trong function tìm về fristName của chính nó
//     }
// }

// User.prototype.className = "F8"
// User.prototype.getClassName = function(){
//     return this.className
// }

// let author = new User('Son','Dang','avatar'); // cách tạo 1 model kế thừa từ OC
// let user = new User('Khoa','Phan','avatar');

// author.title = 'Chia sẻ dạo tại F8';   // key value tạo ngoài ko có ảnh hưởng đến contructor
// user.comment = 'Cảm ơn anh Sơn nhiều'

// console.log(author.getFullName())
// console.log(user)
// console.log(author.className)
// console.log(author.getClassName())