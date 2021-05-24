// Video 67: HTML DOM:
// Trình duyệt sẽ đọc code ta gửi lên sau đó convert ra cây DOM thể hiện trang web, 
// DOM gồm 3 thành phần: element,attribute,text

// Video 70: Get Element Method:
// By ID, By Class Name, By Tag Name, HTML collection    (ví dụ lấy 1 cái trong nhìu cái form document.forms[form])
// By CSS selectors: document.querySelector('.class') document.querySelectorAll('.class')

// Video 74: DOM attribute
// var headingElement = document.querySelector('h1')

// Add attribute
// C1 : headingElement.title = 'heading'
// C2 : headingElement.setAttribute('class','heading)

// Get attribute: khi đã có attribute
// C1 : headingElement.getAttribute('class')

// Video 75: 
// innerText: trả cho đoạn text thật sự nhìn thấy
// textContent: trả cho text và cả những text node trong đoạn text, bao gồm các khoảng trống và các style hay code trong thẻ style hay script

// Video 76: innerHTML: cho phép truyền vào cả thẻ html (dùng nhiều)

// Video 77: .tagName, .nextElementSibling, .childNodes[0]

// Video 78: DOM style: để set css = dom
// headingElement.style.tên của property muốn Css = 'value'

// Cách Css nhiều style 1 lúc: chú ý tạo ra inline css
// Object.assign(headingElement.style, {
//     property: value
// })

// Video 79: classList property
// add() :  headingElement.classList.add('') 
// contains(): headingElement.classList.contains('')  ==> hàm trả boolean, kiểm tra có tồn tại class đó ko 
// remove(): headingElement.classList.remove('')
// toggle(): headingElement.classList.toggle('') , kiểm tra nếu có class thì xóa, nếu không có class thì thêm

// Video 80: DOM events
// for(let i = 0 ; i < headingElement.length ; i++){
//     headingElement[i].onclick = function(e){     // e là tham số của callback này
//         console.log(e.target)                    // target trả lại element đang lắng nghe dom event này
//     }
// }

// VD: var input = document.querySelector('input[type="text"]')
// input.onchange = function (e) {         // onchange lắng nghe value của input khác với value ban đầu, blur ra ngoài khỏi input thì onchange thực thi
//     console.log(e.target.value)
// }

// input.oninput = function (e) {         // oninput lắng nghe value của input khác với value ban đầu, gõ tới đâu lấy tới đó
//     console.log(e.target.value)
// }

// Ngoài ra còn onkeyup(khi nhấc phím lên, nên dùng), onkeydown(khi ấn vào phím )

// Video 82: 
// 1. preventDefault: ngăn chặn hành vi mặc định của thẻ trên trình duyệt
// var aElemnts = document.links (cách query tất cả thẻ a nhanh)
// for(let i = 0 ; i < aElemnts.length; i++){
//     aElemnts[i].onclick = function (e) { 
//         if(!e.target.href.startsWith('https://f8.edu.vn')){   // startsWith() hàm tìm chuỗi bắt đầu bằng trên ES6
//             e.preventDefault()
//         }
//     }
// }

// 2. stopPropagation: ngăn chặn hành vi nổi bọt, sau này dùng nhiều khi click vào thằng con
// để làm điều gì mà k mún thằng cha cũng làm việc đó, thằng cha làm việc khác

// Cách dùng: viết hàm e.stopPropagation() trong thằng con

// Video 83: EventListener: có add và remove
// Dùng DOM events khi không cần gỡ bỏ các sự kiện, cú pháp ngắn gọn
// Dùng EventListener khi cần muốn hủy bỏ, viết code bóc tách dễ nhìn