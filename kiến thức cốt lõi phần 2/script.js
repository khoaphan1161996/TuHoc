// Video 84: Json: Là 1 DỊNH DẠNG dữ liệu, là chuỗi (KHÔNG PHẢI KIỂU DỮ LIỆU)
// Định dạng ý nói lên cách tổ chức, sắp xếp theo một quy chuẩn, quy ước nào đó
// JSON nhẹ, cú pháp đơn giản

// Cách khai báo
// var json = '"chuỗi"'
// var json = '1'
// var json = 'true'
// var json = '["JavaScript","PHP"]'
// var json = '{"name":"Khoa", "age":18}'

// Cách mã hóa (encode - Stringify) từ javascript sang JSON
// var json = 1
// console.log(JSON.stringify(json))

// Cách giải mã (decode - Parse) từ JSON sang
// console.log(JSON.parse(json))

// Video 87: Promise: được sinh ra để giải quyết bất đồng bộ, giải quyết cách làm dài dòng callback hell
// Cách tạo ra Promise:
// 1. new Promise
// 2. Executor
// var promise = new Promise (     // từ khóa new trước objectConstructor Promise trả 1 đối tượng Promise dc tạo ra từ objectConstructor Promise
//     // Executor: PromisConstructor nhận dối số là 1 function,
//     // function này nhận vào 2 tham số: resolve, reject là 2 function 
//     function(resolve, reject){
//         // Logic xử lý
//         // Thành công: resolve()
//         // Thất bại: reject()
//         // resolve()

//         // VD: Fake call API
//         resolve(["javascript","PHP"]) // trạng thái fullfilled
//         // reject("Có lỗi")           // trạng thái reject
//     }           // Nếu trong Executor mà ko truyền resolve() hoặc reject() sẽ khiến rơi vào trạng thái pendding làm Rò rỉ bộ nhớ
// ) 

// promise
//     .then(function(course) {
//         console.log('Successfully!')
//         console.log(course)
//     })
//     .catch(function(error) {
//         console.log('Failure!')
//         console.log(error)
//     })
//     .finally(function() {
//         console.log('Done!')
//     })

// Video 89: Promise method (resolve,reject,all: chạy song song k phụ thuộc nhau)
// var promise = Promise.resolve('Success')
// // var promise = Promise.reject('Failure')

// promise
//     .then(function(result) {
//         console.log('result',data)
//     })
//     .catch(function(err) {
//         console.log('err',err)
//     })


// Video 91: fetch
// API: cổng giao tiếp giữa các phần mềm
// var postApi = 'https://jsonplaceholder.typicode.com/posts'
// fetch(postApi)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(posts) {
//         var htmls = posts.map(function(post) {
//             return `<li>
//                         <h1>${post.title}</h1>
//                         <p>${post.body}</p>
//                     </li>`
//         })

//         var html = htmls.join('')
//         var post = document.getElementById('post-block')
//         post.innerHTML = html
//     })
//     .catch(function(err) {
//         console.log(err)
//     })

// Video 92: Json Server: cài 1 npm của node để fake json server
// tạo thư mục server
// npm init -y 
// cài npm install json-server
// tạo file db.json xong tạo dữ liệu 
// vào package.json thêm "start":"json-server --watch db.json"
// npm start

// Video 93: POSTMAN
