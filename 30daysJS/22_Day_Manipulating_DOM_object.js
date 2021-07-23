// Exercises: Level 1
//1. 
// // Tạo ul cha
// let block = document.createElement('ul')
// block.style.width = '700px'
// document.body.appendChild(block)

// // li con
// let blockItems = []
// for(let i = 0; i < 102; i++) {
//     blockItems.push(`<li>${i}</li>`)
// }
// let blockItem = blockItems.join('')
// block.innerHTML = blockItem

// // css li 
// let li = document.querySelectorAll('li')
// for(let i = 0; i < li.length; i++) {

//     li[i].style.display = 'inline-block'
//     li[i].style.width = '100px'
//     li[i].style.height = '50px'
//     li[i].style.margin = '2px'
//     li[i].style.textAlign = 'center'
//     li[i].style.lineHeight = '50px'
//     li[i].style.color = 'white'
//     li[i].style.fontSize = '24px'
//     if(Number(li[i].textContent) % 2 !== 0) {
//         li[i].style.background = 'yellow'
//     }
//     else {
//         li[i].style.background = 'green'
//     }
//     if(checkPrimeNum(Number(li[i].textContent)) === true) {
//         li[i].style.background = 'red'
//     }
// }

// // hàm check prime number
// function checkPrimeNum(n) {
//     let flag = true;
 
//     if (n < 2){
//         flag = false;
//     }
//     else{
//         for (let i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }

//     return flag;    
// }