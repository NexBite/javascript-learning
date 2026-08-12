// What is inheritance?
// ans:-One object can access properties and methods from another object.
// const person = {
//   greet(){
//     console.log("Hello");
//   }
// };

// create object

// const student = Object.create(person);
// student.study = function (){
//   console.log("Studing......")
// };

// student.greet();
// student.study();

// ----- Parent → Child

const animal = {
  eat(){
    console.log("Animal is eating");
  }
};
const dog = Object.create(animal);
dog.bark = function (){
  console.log("Dog is barking");
};
dog.eat();
dog.bark();

// ---- 12 Classes
class Student {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello ${this.name}`);
  }

}

  const student1 = new this.student("Aditya",25);
  const student = new Student("Rahul",25);
// ---- What does constructor() do?
