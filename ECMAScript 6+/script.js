// Video 99: Arrow Function
// const sum = (a, b) => a + b // sau => bỏ luôn {} và return, nếu có {} sẽ hiểu là 1 object cần có return
// console.log(sum(2, 2))

// const sum = (a, b) => ({a: a, b: b}) // Khi muốn return ra object ta phải gói trong cặp ()
// console.log(sum(2, 2))               // Khi truyền vào 1 tham số có thể bỏ ()

// Video 100: Class: cách viết khác của constructor function
// function Course(name,price) {
//         this.name = name;
//         this.price = price;
//         this.getName = function() {
//             return this.name
//         }
// }
// let phpCourse = new Course('PHP', 1000)
// let jsCourse = new Course('JS', 2000)
// console.log(phpCourse)
// console.log(jsCourse)

// Và với class
// class Course {
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//     getName(){return this.name}
// }
// let phpCourse = new Course('PHP', 1000)
// let jsCourse = new Course('JS', 2000)
// console.log(phpCourse)
// console.log(jsCourse)

// Video 103: Destructuring
// var course = {
//     name: 'javascript',
//     price: 1000,
//     children: {
//         name: 'ReactJS'
//     }
// }

// var {name:parentName, children: {name:childrenName} , description = "defaut description" ,...rest} = course
// console.log(rest)
// console.log(parentName)
// console.log(childrenName)
// console.log(description)