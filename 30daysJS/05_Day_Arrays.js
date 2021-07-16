// Exercise: Level 1
//1. const emptyArray = []
//2. const array5Number = [1,2,3,4,5]
//3. console.log(array5Number)
//4. console.log(array5Number[0]);console.log(array5Number[2]);console.log(array5Number[array5Number.length-1]);

//5. const mixedDataTypes = [1,2,3,4,5,[1,2]]
// console.log(mixedDataTypes.length)

//6. const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon"]
//7. console.log(itCompanies)
//8. console.log(itCompanies.length)
//9. console.log(itCompanies[0]);console.log(itCompanies[3]);console.log(itCompanies[itCompanies.length-1]);
//10. 
// for(let x of itCompanies) {
//     console.log(x)
// }
//11. 
// for(let x of itCompanies) {
//     console.log(x.toUpperCase())
// }
//12. 
// let result = "";
// for(let x = 0 ; x < itCompanies.length-1; x++){
//     result += itCompanies[x] + ", "
// }
// console.log(result,"and Amazon are big IT companies.")

//14. 
// const newCompany = []
// for(let x = 0 ; x < itCompanies.length; x++){
//     let count = 0
//     for(let y = 0 ; y < itCompanies[x].length; y++){
//         if(itCompanies[x][y] == "o") {
//             count++
//         }
//     }
//     if(count == 2) {
//         newCompany.push(itCompanies[x])
//     }
// }
// console.log(newCompany)

//15. console.log(itCompanies.sort())
//16. console.log(itCompanies.reverse())
//17. console.log(itCompanies.slice(3))
//18. console.log(itCompanies.slice(0,length-3))
//20. itCompanies.shift()
//22. itCompanies.pop()
//23. console.log(itCompanies.splice())


// Exercise: Level 2
//1. 
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

//2. 
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// words = text.split(" ")
// console.log(words)
// console.log(words.length)

//3. 
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// shoppingCart.splice(4,1)
// shoppingCart[3] = "Green Tea"
// console.log((shoppingCart))

//4. 
// let flag = true
// for(let x of countries) {
//     if(x=="Ethiopia") {
//         console.log('ETHIOPIA')
//         flag = false
//     }
// }
// if(flag==true) {
//     countries.push('Ethiopia')
//     console.log((countries))
// }

//5. 
// let flag = true
// for(let x of webTechs) {
//     if(x=="Sass") {
//         console.log('Sass is a CSS preprocess')
//         flag = false
//     }
// }
// if(flag==true) {
//     webTechs.push('Sass')
//     console.log((webTechs))
// }

//6. 
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack = frontEnd.concat(backEnd)
// const fullStack = [...frontEnd,...backEnd]
// console.log(fullStack)

// Exercise: Level 3
//1. const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// console.log(ages.sort())
// console.log(Math.min(...ages))
// console.log(Math.max(...ages))
// const lengthAge = ages.length
// if(lengthAge%2!=0) {
//     console.log(ages[lengthAge/2])
// }
// else {
//     const result =(ages[Math.floor(lengthAge/2)] + ages[Math.floor(lengthAge/2-1)])/2
//     console.log(result)
// }

// let result = 0
// for(let i = 0 ; i<ages.length;i++) {
//     result += ages[i]
// }
// console.log(result/lengthAge)

//2. 
