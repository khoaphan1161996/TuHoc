// Exercises: Level 1
//1.
// const fullName = () => {
//     console.log('Phan Minh Khoa')
// }
// fullName()

//2. 
// const fullName = ( firstName, lastName) => {
//     console.log(`${lastName} Minh ${firstName}`)
// }
// fullName("Khoa","Phan")

//3. 
// const addNumbers = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addNumbers(1,2))

//4. 
// const areaOfRectangle = ( length , width) => {
//     return area = length * width
// }
// console.log(areaOfRectangle(10,20))

//5. 
// const perimeterOfRectangle = (length , width) => {
//     return perimeter= 2*(length + width)
// }
// console.log(perimeterOfRectangle(10,20))

//6. 
// const volumeOfRectPrism = ( length , width , height) => {
//     return  volume = length * width * height
// }
// console.log(volumeOfRectPrism(10,20,15))

//7. 
// const areaOfCircle = (r) => {
//     const π = 3.14
//     return  area = π * r * r
// }
// console.log(areaOfCircle(10))

//8. 
// const circumOfCircle = (r) => {
//     const π = 3.14
//     return circumference = 2*π*r
// }
// console.log(circumOfCircle(10))

//9. 
// const density = (mass,volume) => {
//     return density= mass/volume
// }
// console.log(20,10)

//10. 
// const speed = (totalDistance,timeTaken) => {
//     return `${totalDistance/timeTaken}(m/s)`
// }
// console.log(speed(20,4))

//11. 
// const weight = (mass,gravity) => {
//     return  mass * gravity
// }
// console.log(weight(60,9.81))

//12. 
// const oFconvertCelciusToFahrenheit = (oC) => {
//     return (oC * 9/5) + 32
// }
// console.log(oFconvertCelciusToFahrenheit(30))

//13. 
// const physicalExamination = (weight,height ) => {
//     const bmi =  weight / (height * height)
//     console.log(bmi)
//     if(bmi <= 18.5) {
//         return "Underweight"
//     }
//     else if (bmi > 18.5 && bmi <= 24.9) {return "Normal weight"}
//     else if (bmi > 25 && bmi <= 29.9) {return "Overweight"}
//     else return "Obese"
// }
// console.log(physicalExamination(64,1.75))

//14. 
// const checkSeason = (season) => {
//     season = season.toLowerCase()
//     if(season==`september` || season==`october` || season==`november`) { 
//         return "Autumn"
//     }   
//     else if(season==`december` || season==`january` || season==`february`) { 
//         return "Winter"
//     }
//     else if(season==`march` || season==`april` || season==`may`) { 
//         return "Spring"
//     }
//     else if(season==`june` || season==`july` || season==`august`) { 
//         return "Summer"
//     }
//     else return `wrong season`
// }
// console.log(checkSeason("September"))

//15. 
// const findMax = (...agrs) => {
//     let max = 0
//     for(let x of agrs) {
//         if(x>max) {
//             max = x;
//         }
//     }
//     return max;
// }
// console.log(findMax(0,10,5))
// console.log(findMax(0, -10, -2))


// Exercises: Level 2
//3. 
// const printArray = (array) => {
//     for(let x in array) {
//         console.log(x)
//     }
// }
// printArray([1,2,3,4])

//4. 
// const showDateTime = () => {
//     let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0');
//     let yyyy = today.getFullYear();
//     let hour = String(today.getHours()).padStart(2, '0')
//     let min = String(today.getMinutes()).padStart(2, '0')

//     today = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + min
//     return today;
// }
// console.log(showDateTime())

//5. 
// const swapValues = (x,y) => {
    // let c
    // c = x
    // x = y
    // y = c

    // [x,y] = [y,x]

    // return `x:${x}   y:${y}`
// }
// console.log(swapValues(1,2))

//6. 
// const reverseArray = (array) => {
//     let result = []
//     for(let i = array.length - 1; i >= 0; i--) {
//         result.push(array[i])
//     }
//     return result
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))
// console.log(reverseArray(['A', 'B', 'C']))

//7. 
// const  capitalizeArray = (array) => {
//     array = array.map(item => item.toUpperCase()) 
//     return array
// }
// console.log(capitalizeArray(["a", "b","c"]))

//8. 
// const addItem = (...agrs) => {
//     let array = [1,3,4]
//     array.splice(1,0,2)
//     return array
// }
// console.log(addItem(2))

//9. 
// const removeItem = (index) => {
//     let array = [1,2,3,4]
//     array.splice(0,1)
//     return array
// }
// console.log(removeItem(0))

//10. 
// const sumOfNumbers = (...args) => {
//     return args
// }
// console.log(sumOfNumbers(1,2,3))

//11. 
// const sumOfOdds = (...args) => {
//     args = args.filter(item => item%2!=0 )
//     return args
// }
// console.log(sumOfOdds(1,2,3))

//12. 
// const sumOfEven = (...args) => {
//     args = args.filter(item => item%2==0 )
//     return args
// }
// console.log(sumOfEven(1,2,3))

//13. 
// const evensAndOdds = (positiveInteger) => {
//     let countEven = 0
//     let countOdd = 0
//     for (let i=0 ; i <= positiveInteger ; i++) {
//         if(i%2==0) {
//             countEven ++
//         }
//         else countOdd ++
//      }
//      let result = `The number of odds are ${countOdd}.\nThe number of evens are ${countEven}.`
//      return result
// }
// console.log(evensAndOdds(100))

//14. 
// const sum = (...args) => {
//     let sum = 0
//     args.forEach(item=>sum+=item)
//     return sum
// }
// console.log(sum(1, 2, 3))
// console.log(sum(1, 2, 3, 4))

// Exercises: Level 3
//8. 
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array
// }
// console.log(shuffleArray([1,2,3,4]))

//9. 
// const isEmpty = (...args) => {
//     if(args.length>0) {
//         return "have value"
//     }
//     else return "empty"
// }
// console.log(isEmpty(1,3))

//19. 
// const sevenRandomNumbers = () => {
//     let result = []
//     while(result.length < 7) {
//         let randomNumber = Math.floor(Math.random()*10)
//         let check = result.includes(randomNumber)
//         if(check===false){
//             result.push(randomNumber)
//         }
//     }
//     return result
// }
// console.log(sevenRandomNumbers())