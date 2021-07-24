// Exercises Level 1
//1. 
// class Animal {
//   constructor(name, age, color, legs) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//     this.legs = legs;
//   }

//   animalSound () {
//     return `I am ${this.name}, i'm ${this.age} age,i have ${this.legs} legs`
//   }
// }
// //2. 
// const Dog = new Animal('Beo',8,"orange",4);
// const Cat = new Animal('Miu',10,"white",4);

// console.log(Dog.animalSound())
// console.log(Cat.animalSound())

// Exercises Level 2
// class Bird extends Animal {
//   constructor(name, age, color, legs, canFly = true) {
//     super(name, age, color, legs)
//     this.canFly = canFly
//   }

//   animalSound () {
//     let fly = this.canFly ? 'can' : 'can\'t'
//     return `I am ${this.name}, i'm ${this.age} age,i have ${this.legs} legs, i ${fly} fly `
//   }
// }

// let chichChoe = new Bird('Sinh',7,'black',2)

// console.log(chichChoe.animalSound())