// Exercises: Level 1
//1.
// let userAge = Number(prompt("Enter your age:"))
// userAge  >= 18 ? console.log("You are old enough to drive.") : console.log(`You are left with ${18-userAge} years to drive.`)

//2.
// let yourAge = Number(prompt("Enter your age:"))
// yourAge  <= 25 ? console.log(`You are ${25-yourAge} years elder than me.`) : console.log(`You are ${-25+yourAge} years older than me.`)

//3. 
// let a = 4;let b = 3
// a>b ? console.log(`a is greater than b`) : console.log(`a is less than b`)
// if(a>b) { console.log(`a is greater than b`)}
// else console.log(`a is less than b`)

//4. 
// let number = Number(prompt("Enter a number"))
// number%2===0 ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number.`)


// Exercises: Level 2
//1. 
// let score = Number(prompt("Enter your score"))
// if(score>=80 && score<=100) { 
//     console.log("A")
// }
// else if(score>=70 && score<80) { 
//     console.log("B")
// }
// else if(score>=60 && score<70) { 
//     console.log("C")
// }
// else if(score>=50 && score<60) { 
//     console.log("D")
// }
// else { console.log("E")}

//2. 
// let season = prompt("Enter your month").toLowerCase()
// if(season==`september` || season==`october` || season==`november`) { 
//     console.log("Autumn")
// }
// else if(season==`december` || season==`january` || season==`february`) { 
//     console.log("Winter")
// }
// else if(season==`march` || season==`april` || season==`may`) { 
//     console.log("Spring")
// }
// else if(season==`june` || season==`july` || season==`august`) { 
//     console.log("Summer")
// }
// else console.log(`wrong season`)

//3.
// let day = prompt("What is the day today?").toLowerCase();
// console.log(day)
// if(day=="saturday" || day=="sunday") {
//     console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend`)
// }
// else {
//     console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day`)
// }


// Exercises: Level 3
// let month = prompt("Enter a month").toLowerCase();
// switch(month){
//     case "january":
//     case "march":
//     case "may":
//     case "july":
//     case "august":
//     case "october":
//     case "december":
//         console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`)
//         break
//     case "january" :
//     case "april":
//     case "june":
//     case "september":
//     case "november" :
//         console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`)
//         break
//     case "february" :
//         console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days.`)
//         break
//     default:
//         console.log("not a month")
// }

// Kiểm tra năm nhuận
// let year = prompt("Input year: ");
// if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
//     console.log(year + " la nam nhuan.") ;
// } 
// else{
//     console.log( year + " la nam khong nhuan.");
// }