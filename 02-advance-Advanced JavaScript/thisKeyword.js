// this keyword 
// -- this is determined mainly by how a function is called not where the function is written.
/*
const student = {
  name : "aditya",

  greet: funcation (){

    console.log(this.name);
  }
};
student.greet();

*/
/*
const empployee = {
  name : "Rahul",
  salary : 50000,

  display : function (){
    console.log(this.name)
    console.log(this.salary);
  }
}
empployee.display();
*/

/*
const personal = {
  name : "Aditya",
  greet(){
    console.log(this.name)
  }
};

const person2 = {
  name : "Rahul"
};
person2.greet = personal.greet;
person2.greet();
*/

/*
const person = {
  name : "Aditya",

  greet:() =>{
    console.log(this.name);
  }
};
person.greet();
*/

/*
// ---- call 
const person = {
  name : "Aditya",

};
function greet(){
  console.log(`Hello ${this.name}`);
}
greet.call(person);
*/
/*
// ---------- call() with arguments
const person = {
    name: "Aditya"
};

function greet(city, age) {

    console.log(
        `${this.name}, ${age}, ${city}`
    );

}

greet.call(person, "Kolkata", 30);
*/
// ---- Constructor function
function Person(name, age) {

    this.name = name;
    this.age = age;

}
// create object 
//const person1 = new Person("Aditya", 30);
//const person2 = new Person("Rahul", 25);
// now 
/*
person1
   ↓
Person.prototype
   ↓
Object.prototype
   ↓
null
*/

/*  ---- Add a method to prototype
Instead of putting the same method inside every object:
*/

/*
Person.prototype.greet = function () {

    console.log(`Hello ${this.name}`);

};
person1.greet();
person2.greet();
*/

// ------ Why prototypes are useful

  // const person1 = new Person("Aditya", 30);
  // const person2 = new Person("Rahul", 25);
  // const person3 = new Person("Amit", 28);
  // const person4 = new Person("Raj", 32);

/*
//------------ challenge 1
const student = {
  name : "Aditya",

  greet : function (){
    console.log(this.name);
  }
};
student.greet();

// -------------------- Challenge 2 — call()
const user = {
  name : "Rahul"
};

function introduce(age,city){
  console.log(`${this.name} is ${age} and lives in ${sity}`);
}
introduce.call(user,25,"kolkata")

// --------------- Challenge 3 — apply()

const user = {
  name: "Rahul"
};

function introduce(age, city) {
  console.log(`${this.name} is ${age} and lives in ${city}`);
}

introduce.apply(user, [25, "kolkata"]);
// Output: Rahul is 25 and lives in kolkata

function Student(name) {
  this.name = name;
}

Student.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name} from prototype.`);
};

const student1 = new Student("Aditya");
const student2 = new Student("Rahul");

// Shadowing: Assigning 'greet' directly to the student1 instance
student1.greet = function () {
  console.log(`Custom greeting for ${this.name}!`);
};

student1.greet(); // Output: Custom greeting for Aditya!
student2.greet(); // Output: Hello, I'm Rahul from prototype.
*/
const person = {
    name: "Aditya"
};

function greet() {
    console.log(this.name);
}

const boundGreet = greet.bind(person);

boundGreet();

greet.call(person);

greet.apply(person);