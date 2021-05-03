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

function User(fristName,lastName,avatar) {  // chữ đầu tên function của OC ghi hoa ( quy ước chung)
    this.fristName = fristName;  // this ở đây để khi tạo model mới đều có key này NHƯ REACT
    this.lastName = lastName;
    this.avatar = avatar;
    this.getFullName = function() {
        return `${this.fristName} ${this.lastName}`  // this ở trong function tìm về fristName của chính nó
    }
}

User.prototype.className = "F8"
User.prototype.getClassName = function(){
    return this.className
}

let author = new User('Son','Dang','avatar'); // cách tạo 1 model kế thừa từ OC
let user = new User('Khoa','Phan','avatar');

author.title = 'Chia sẻ dạo tại F8';   // key value tạo ngoài ko có ảnh hưởng đến contructor
user.comment = 'Cảm ơn anh Sơn nhiều'

console.log(author.getFullName())
console.log(user)
console.log(author.className)
console.log(author.getClassName())