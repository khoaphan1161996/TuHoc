// Exercises: Level 1
//1. 
// let i = 0
// do {
//     console.log(i)
//     i++
// }while(i<=10)

//2. 
// let x = 10
// for(let x = 10 ; x >=0 ; x--) {
//     console.log(x)
// }

//4. 
// let result = ''
// for(let x = 1 ; x <= 4;x++) {
//     result += "#"
//     console.log(result)
// }

//5. 
// for(let i = 0; i <= 5; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
//   }

//6. 
// for(let i = 0; i <= 5; i++){
//     console.log(`${i}   ${i**2}  ${i**3}`)
//   }
// let i = 0

//7. 
// for(let i = 0 ; i<=100;i++){
//     if(i%2==0) console.log(i)
// }

//8. 
// for(let i = 0 ; i<=100;i++){
//     if(i%2!=0) console.log(i)
// }

//9. 
// console.log(2)
// for(let i = 3;i<=30;i++){
//     let flag = true
//     for(let j = 2 ; j<i;j++){
//         if(i % j == 0) { // ko phải
//             flag = false
//             break
//         }
//     }
//     if(flag==true) {
//         console.log(i)
//     }
//     flag = true
// }

//10. 
// let result = 0
// for(let i = 0 ; i<=100;i++){
//     result += i
// }
// console.log(`The sum of all numbers from 0 to 100 is ${result}.`)

//11. 
// let result = 0
// for(let i = 0 ; i<=100;i++){
//     if(i%2==0) {
//         result += i
//     }
// }
// console.log(`The sum of all evens from 0 to 100 is ${result}.`)
// let result = 0
// for(let i = 0 ; i<=100;i++){
//     if(i%2!=0) {
//         result += i
//     }
// }
// console.log(`The sum of all odds from 0 to 100 is ${result}.`)

//13. 
// var randoms = [...Array(4)].map(() => Math.floor(Math.random() * 9));
// console.log(randoms)

//15. 
// var result           = ''
// var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// var charactersLength = characters.length;

// for ( var i = 0; i < charactersLength; i++ ) {
//   result += characters.charAt(Math.floor(Math.random()*charactersLength));
//     if(result.length==6) {
//         break;
//     }
// }
// console.log(result)


// Exercises: Level 2
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//4.
// let newArray = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let array2 = newArray
// console.log(array2)

//6 .
// const indexCountries = [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// let newCountries = countries.map((country,index)=>[country,country.slice(0,3).toUpperCase(),indexCountries[index]])
// console.log(newCountries)

//11. 
// let result = ''
// let lengthToCompare = 0
// webTechs.forEach(x=> {
//     if(x.length>lengthToCompare){
//         lengthToCompare = x.length
//         result = x
//     }
// })
// console.log(result)

//12 .
// let newWebTechs = webTechs.map((country)=>[country,country.length])
// console.log(newWebTechs)

//13. 
// let acronym  = ""
// mernStack.forEach(element=>{acronym += element[0]})
// console.log(acronym)

//14. 
// let learnArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// learnArray.forEach(element=>console.log(element))

//15. 
// let fruitArray = ['banana', 'orange', 'mango', 'lemon']
// let newFruitArray = []
// for (let i = fruitArray.length - 1; i >= 0; i--) {
//     newFruitArray.push(fruitArray[i])
// }
// console.log(newFruitArray)

//16. 
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]

// let newFullStack = []
// for(let stack of fullStack) {
//     if(Array.isArray(stack)) {
//         for(let stackItem of stack) {
//             newFullStack.push(stackItem)
//         }
//     }
// }
// console.log(newFullStack.join('\n'))

// let newFullStack = fullStack.reduce(
//     ( accumulator, currentValue ) => accumulator.concat(currentValue),
//     []
//   )
//   console.log(newFullStack.join('\n'))

