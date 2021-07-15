// Exercise: Level 1
//1. 
// let challenge = '30 Days Of JavaScript'

//2. console.log(challenge)
//3. console.log(challenge.length)
//4. console.log(challenge.toUpperCase())
//5. console.log(challenge.toLowerCase())
//6. console.log(challenge.substring(0,2))
//7. console.log(challenge.slice(3))
//8. console.log(challenge.includes('Script'))
//9. console.log(challenge.split(''))
//10. console.log(challenge.split(' '))
//11. console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))
//12. console.log(challenge.replace('JavaScript','Python'))
//13. console.log(challenge.charAt(15))
//14. console.log(challenge.charCodeAt(challenge.indexOf('J')))
//15. console.log(challenge.indexOf('a'))
//16. console.log(challenge.lastIndexOf('a'))
//17. console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
//18. console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
//19. console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))
//20. console.log(' 30 Days Of JavaScript '.trim())
//21. console.log(challenge.startsWith('30'))
//22. console.log(challenge.endsWith('JavaScript'))

//23. 
// const findAlla = /a/gi
// console.log(challenge.match(findAlla))

//24. console.log( '30 Days of'.concat(' JavaScript'))
//25. console.log(challenge.repeat(2))

// Exercise: Level 2
//1. console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
//2. console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')
//3. console.log(typeof Number('10') === typeof 10)
//4. console.log(Math.round(parseFloat('9.8')) === parseFloat(10))
//5. console.log('python'.includes('on')) ; console.log('jargon'.includes('on'))
//6. console.log('I hope this course is not full of jargon'.includes('jargon'))
//7. console.log(Math.floor(Math.random()*101))

//8. 
// let min = Math.ceil(50);
// let max = Math.floor(100);
// console.log(Math.floor(Math.random() * (max - min + 1) + min))
//9. console.log(Math.floor(Math.random()*256))
//10. console.log(Math.floor(Math.random()*'JavaScript'.length))
//11. console.log('1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 \n')

//12. 
// let para = 'You cannot end a sentence with because because because is a conjunction'
// console.log(para.substr(para.indexOf('because'),'because because because'.length))

// Exercise: Level 3
//1. 
// let pattern = /love/gi
// let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(string.match(pattern).length)

//2. 
// let pattern = /because/gi
// let string = 'You cannot end a sentence with because because because is a conjunction'
// console.log(string.match(pattern).length)

//3. 
// let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// console.log(sentence.match(/\w/g).join(''))

//4.
// let sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// sentence = sentence.match(/\d+/g)

// let result = 0
// for(let x of sentence) {
//     result += Number(x)
// }
// console.log(result)