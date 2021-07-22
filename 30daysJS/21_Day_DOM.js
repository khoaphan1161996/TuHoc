// Exercise: Level 1
//1. 
// let fristParaQuery = document.querySelector('p')
// let fristParaTag = document.getElementsByTagName('p')
// console.log(fristParaQuery)
// console.log(fristParaTag[0])

//2. 
// let idP1 = document.getElementById('p1')
// let idP2 = document.getElementById('p2')
// let idP3 = document.getElementById('p3')
// let idP4 = document.getElementById('p4')
// console.log(idP1, idP2, idP3,idP4)

//3. 
// let paraQueryAll = document.querySelectorAll('p')
// console.log(paraQueryAll)

//4. 
// for (let i = 0; i < paraQueryAll.length; i++) {
//     console.log(paraQueryAll[i])
// }

//5. 
// paraQueryAll[3].textContent = 'Fourth Paragraph'
// console.log(paraQueryAll[3])


// Exercise: Level 3
// The year color is changing every 1 second
// let title = document.querySelector('h1')
// title.innerHTML = 'Asabeneh Yetayeh challenges in <span>2020</span>'
// let yearChange = document.querySelector('span')
// const randomColor1s = () => {
//     const color = ['red','green','blue','yellow','black']
//     const randomColor = color[Math.floor(Math.random()*color.length)]
//     return randomColor;
// }

// setInterval(function() {
//     yearChange.style.color = randomColor1s()
// }, 1000);

// The date and time background color is changing every on seconds
// let date = document.querySelector('h2')
// setInterval(function() {
//     date.style.backgroundColor = randomColor1s()
// }, 1000);

// Completed challenge has background green
// let ulItem = document.querySelectorAll('li')
// for(let i = 0; i < ulItem.length; i++) {
//     if(i == 0) {
//         ulItem[i].style.background = 'green'
//     }
//     else if (i == 1) {
//         ulItem[i].style.background = 'yellow'
//     }
//     else {
//         ulItem[i].style.background = 'red'
//     }
// }