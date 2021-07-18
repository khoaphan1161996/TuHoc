// Exercises: Level 1]
//1. 
// const constants = [2.72, 3.14, 9.81, 37, 100]
// const [ e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

//2. 
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const [ fin, est, sw, den, nor] = countries

//3. 
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
//   }
// const {width, height,area,perimeter} = rectangle


// Exercises: Level 2
//1. 
// const users = [
//     {
//       name:'Brook',
//       scores:75,
//       skills:['HTM', 'CSS', 'JS'],
//       age:16
//     },
//     {
//       name:'Alex',
//       scores:80,
//       skills:['HTM', 'CSS', 'JS'],
//       age:18
//     },
//     {
//       name:'David',
//       scores:75,
//       skills:['HTM', 'CSS'],
//       age:22
//     },
//     {
//       name:'John',
//       scores:85,
//       skills:['HTML'],
//       age:25
//     },
//     {
//       name:'Sara',
//       scores:95,
//       skills:['HTM', 'CSS', 'JS'],
//       age: 26
//     },
//     {
//       name:'Martha',
//       scores:80,
//       skills:['HTM', 'CSS', 'JS'],
//       age:18
//     },
//     {
//       name:'Thomas',
//       scores:90,
//       skills:['HTM', 'CSS', 'JS'],
//       age:20
//     }
//     ]

// for(let {name, scores,skills, age} of users) {
//     console.log(name, scores,skills, age)
// }
//2. 
// for(let {name,skills} of users) {
//     if(skills.length<2){
//         console.log(name)
//     }
// }


// Exercises: Level 3
//3.
// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//   ]

// const convertArrayToObject = (students) => {
//     let result = []
//     for(let [name,skills,scores] of students) {
//         result.push({
//             name,
//             skills,
//             scores
//         })
//     }
//     return result
// }

// console.log(convertArrayToObject(students))

//4. 
// const student = {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         { skill: 'HTML', level: 10 },
//         { skill: 'CSS', level: 8 },
//         { skill: 'JS', level: 8 },
//         { skill: 'React', level: 9 }
//       ],
//       backEnd: [
//         { skill: 'Node',level: 7 },
//         { skill: 'GraphQL', level: 8 },
//       ],
//       dataBase:[
//         { skill: 'MongoDB', level: 7.5 },
//       ],
//       dataScience:['Python', 'R', 'D3.js']
//     }
// }
// const newStudent = {...student}
// const {skills} = newStudent
// const {frontEnd,backEnd,dataBase,dataScience} = skills

// frontEnd.push({
//     skills:"Bootstrap",
//     level:8
// })
// backEnd.push({
//     skills:"Express",
//     level:9
// })
// dataBase.push({
//     skills:"SQL",
//     level:8
// })
// dataScience.push("SQL")

// console.log(newStudent)