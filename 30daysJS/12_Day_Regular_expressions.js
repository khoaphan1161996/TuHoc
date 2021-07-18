// Exercises: Level 1
//1. 
// const str =  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
// const pattern = /\d+/g
// const matches = str.match(pattern)
// let result = 0
// for(let money of matches) {
//     result += Number(money)
// }
// console.log(result)


// Exercises: Level 2
// paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
// const tenMostFrequentWords = (paragraph) => {
//     let matches = paragraph.match(/[a-zA-Z0-9]+/gi)
//     let setMatches = new Set(matches)

//     let result = []
    
//     for(let x of setMatches) {
//         const filterWord = matches.filter(item => item === x)
//         const counts = filterWord.length

//         result.push({
//             word: x,
//             count: counts
//         })
//     }
//     result = result.sort((a,b) => -a.count + b.count)
    
//     result.sort(function(a, b) {
//         if(a.count == b.count) {
//             if (a.word > b.word) {
//                 return 1;
//               }
//             if (a.word < b.word) {
//               return -1;
//             }
//             return 0;
//         }
//       });

//     let result2 = []
//     for(let i = 0 ; i < 10 ; i++) {
//         result2.push(result[i])
//     }
//     return result2
// }

// console.log(tenMostFrequentWords(paragraph))


// Exercises: Level 3
// sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// const cleanText = (sentence) => {
//     result = sentence.replace(/[^a-zA-Z0-9. ]/gi,'')
//     return result
// }

// console.log(cleanText(sentence))


// const sentence = "I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher"
// const findTheMostFrequentWords = (sentence) => {
//     const matches = sentence.match(/[a-zA-Z0-9]+/gi)
//     const setMatches = new Set(matches)
//     let result = []

//     for(let item of setMatches) {
//         let filterWord = matches.filter(element => element === item)
//         let counts = filterWord.length

//         result.push({
//             word: item,
//             count: counts
//         })
//     }
//     result = result.sort((a,b) => b.count-a.count)
//     return result
// }

// console.log(findTheMostFrequentWords(sentence))