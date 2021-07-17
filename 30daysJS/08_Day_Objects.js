// Exercises: Level 1
//1. 
// const dog = {}
//2. 
// console.log(dog)
//3. 
// dog.name = 'beo'
// dog.legs = 4
// dog.color = 'orange'
// dog.age = 9
// dog.bark = function(){
//   return 'woof woof'
// }
//4. 
// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog.color)
// console.log(dog.age)
// console.log(dog.bark())
//5. 
// dog.breed = getDoginfo() {
//   return
// }


// Exercises: Level 2
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }
//1. 
// let skills = []
// let maxLength = 0
// let result
// for(let x of Object.values(users)) {
//   skills.push(x.skills)
// }

// for(let x of skills) {
//   if(x.length>maxLength) {
//     maxLength = x.length
//   }
// }

// let entriesUser = Object.entries(users)
// console.log(entriesUser)
// for(let i = 0 ; i < entriesUser.length;i++) {
//   if(entriesUser[i][1].skills.length === maxLength) {
//     result = entriesUser[i][0]
//   }
// }

// console.log(result)

//2. 
// let count = 0
// for(let x of Object.values(users)) {
//   if(x.points>=50) {
//     count++
//   }
// }
// console.log(count)

// let mernDev = []
// for(let i = 0 ; i < skills.length;i++) {
//   let count = 0
//   for(let j = 0 ; j <skills[i].length;j++) {
//     if(skills[i][j]=="MongoDB" || skills[i][j]=="Express" || 
//     skills[i][j]=="React" || skills[i][j]=="Node") {
//       count ++
//     }
//   }
//   if(count === 4) {
//     mernDev.push(entriesUser[i][0])
//   }
// }
// console.log(mernDev)

//4. 
// const newUsers = Object.assign(users,{Khoa: {
//   email: 'khoa@gmail.com',
//   skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//   age: 20,
//   isLoggedIn: false,
//   points: 40
// }})
// console.log(newUsers)

//5. 
// console.log(Object.keys(newUsers)) 
// console.log(Object.values(newUsers)) 


// Exercises: Level 3
// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

//   const products = [
// {
//   _id: 'eedfcf',
//   name: 'mobile phone',
//   description: 'Huawei Honor',
//   price: 200,
//   ratings: [
//     { userId: 'fg12cy', rate: 5 },
//     { userId: 'zwf8md', rate: 4.5 }
//   ],
//   likes: []
// },
// {
//   _id: 'aegfal',
//   name: 'Laptop',
//   description: 'MacPro: System Darwin',
//   price: 2500,
//   ratings: [],
//   likes: ['fg12cy']
// },
// {
//   _id: 'hedfcg',
//   name: 'TV',
//   description: 'Smart TV:Procaster',
//   price: 400,
//   ratings: [{ userId: 'fg12cy', rate: 5 }],
//   likes: ['fg12cy']
// }
// ]
//2. 
// Tạo randomID
// var randomId           = ''
// var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// var charactersLength = characters.length;
// for ( let i = 0; i < charactersLength; i++ ) {
//   randomId += characters.charAt(Math.floor(Math.random()*charactersLength));
//     if(randomId.length==6) {
//         break;
//     }
// } 

// Tạo ngày hiện tại
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

// Tạo mảng có userName và pass
// const userValidate = []
// for(let user of users) {
//   userValidate.push({
//     username:user.username,
//     password:user.password
//   })
// }

// Kiểm tra đăng kí
// const signUp = () => {
//   let createNewUser = prompt("Nhập tên")
//   const indexUser = userValidate.findIndex(user=>user.username==createNewUser)
//   if(indexUser < 0) {
//     const newUser = {
//       _id: randomId,
//       username: createNewUser,
//       email: `${createNewUser}@${createNewUser}.com`,
//       password: '1',
//       createdAt:showDateTime(),
//       isLoggedIn: false
//     }
//     users.push(newUser)
//     console.log(users)
//   }
//   else {console.log('Tài khoản đã tồn tại')}
// }
// signUp()

// Kiểm tra đăng nhập
// const signIn = () => {
//   let userName = prompt("Nhập tên")
//   const indexUser = userValidate.findIndex(user=>user.username==userName)
//   if(indexUser != -1) {
//     let userPassword = prompt("Nhập password")
//     const indexUserPassword = userValidate.findIndex(user=>user.password==userPassword)
//     if(indexUserPassword != -1) {
//       console.log('Đăng nhập thành công')
//     }
//     else console.log('Sai pass')
//   }
//   else {
//     console.log('Sai tài khoản')
//   }
// }
// signIn()

//3. 
// Get rating
// const entriesProduct = []
// const rating = [] 
// for(let product of products) {
//   entriesProduct.push(Object.entries(product))
//   rating.push(product.ratings)
// }
// console.log(entriesProduct)
// console.log(rating)

// const rateProduct = () => {
//   let result = []
//   for(let product of entriesProduct) {
//     result.push({
//       name:product[2][1],
//       totalPeopleRate: product[4][1].length
//     })
//   }
//   console.log(result)
// }
// rateProduct()

// const averageRating = () => {
//   let result = []
//   for(let product of entriesProduct) {
//     let averageRating = 0

//     let productRateLength = product[4][1].length
//     for(let i = 0 ; i < productRateLength; i++) {
//       averageRating += product[4][1][i].rate
//       if(i==productRateLength-1) {
//         averageRating = averageRating/(i+1)
//       }
//     }

//     result.push({
//       name:product[2][1],
//       averageRating : averageRating
//     })
//   }
//   console.log(result)

// }
// averageRating()