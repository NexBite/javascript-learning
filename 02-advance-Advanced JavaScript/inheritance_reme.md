# -- What is inheritance?
  Ans:-One object can access properties and methods from another object.
  const person = {
    greet() {
        console.log("Hello");
    }
};
const student = Object.create(person);
student.study = function () {
    console.log("Studying...");
};
student.greet();
student.study();

# -- Parent → Child
const animal = {
        eat() {
            console.log("Animal is eating");
        }

    };
    const dog = Object.create(animal);
    dog.bark = function () {
        console.log("Dog is barking");
    };
    dog.eat();
    dog.bark();
    # -- Output:
    Animal is eating
    Dog is barking
    animal
    ↑
    │ prototype
    │
    dog
  The dog can use the parent's eat() method.

  # -- Child can override parent
    const animal = {
          sound() {
              console.log("Animal sound");
          }

      };
      const dog = Object.create(animal);
      dog.sound = function () {
          console.log("Woof!");
      };
      dog.sound();
# ---  Why?
JavaScript checks the child first:
This is the same shadowing concept you learned earlier.
# -- 12️ Classes
Modern JavaScript gives us a cleaner syntax for creating objects:
  class Student {
      constructor(name, age) {
          this.name = name;
          this.age = age;
      }
      greet() {
          console.log(`Hello ${this.name}`);
      }
  }
  Create objects:
    const student1 = new Student("Aditya", 25);
    const student2 = new Student("Rahul", 28);
  Then:
  student1.greet();
  student2.greet();

# -| Constructor Function             | Class                              |
| ----------------------------------- | ------------------------------------- |
| Older/common traditional syntax     | Modern syntax                         |
| `function Student()`                | `class Student`                       |
| `this` properties in function       | `constructor()`                       |
| Methods often added to `.prototype` | Methods automatically go to prototype |
| Uses `new`                          | Uses `new`                            |
| Prototype-based                     | Still prototype-based                 |

# --- he new keyword

When you write:

const student = new Student("Aditya");

you can think of new as doing several important things:

1. Creates a new object
new object
2. Connects it to the constructor's prototype
student
   ↓
Student.prototype
3. Sets this to the new object

Inside:

function Student(name) {
    this.name = name;
}

this refers to the newly created object.

4. Returns the new object

So:

const student = new Student("Aditya");

gives you the new object.

Visualizing new
function Student(name) {
    this.name = name;
}

Student.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};

const student = new Student("Aditya");

Think:

              Student.prototype
                    │
                    │
                    ▼
              ┌─────────────┐
              │   greet()   │
              └─────────────┘
                    ▲
                    │
                 prototype
                    │
                    │
              ┌─────────────┐
              │   student   │
              │             │
              │ name=Aditya │
              └─────────────┘
 # -- Classes vs Constructor Functions

These two:

Constructor function
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};
Class
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

}

look different, but both use the prototype system.

That's a very important interview point.

Classes vs Constructor Functions

These two:

Constructor function
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};
Class
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

}

look different, but both use the prototype system.

That's a very important interview point.

🔥 Prototype inheritance with classes

Now we can combine everything.

class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

}

Now create a child class:

class Student extends Person {

    study() {
        console.log(`${this.name} is studying`);
    }

}

Create:

const student = new Student("Aditya");

student.greet();
student.study();

Output:

Hello Aditya
Aditya is studying

Where did greet() come from?

From Person.

Conceptually:

student
   ↓
Student.prototype
   ↓
Person.prototype
   ↓
Object.prototype
   ↓
null

🔥 This is prototype inheritance through classes.

extends

This:

class Student extends Person

means:

Student inherits from Person.

Therefore Student gets access to Person's methods.

super()

If the child class has its own constructor:

class Student extends Person {

    constructor(name, course) {

        super(name);

        this.course = course;
    }

}

super(name) calls the parent constructor.

Parent:

class Person {

    constructor(name) {
        this.name = name;
    }

}

Child:

class Student extends Person {

    constructor(name, course) {

        super(name);

        this.course = course;
    }

}

Then:

const student = new Student("Aditya", "JavaScript");

console.log(student.name);
console.log(student.course);

Output:

Aditya
JavaScript
🧠 Today's big picture

You can now connect everything:

             JavaScript Objects
                    │
                    ▼
              Prototype System
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
   Constructor Functions     Classes
          │                   │
          └─────────┬─────────┘
                    ↓
               Prototype
                    │
                    ↓
              Inheritance
                    │
                    ↓
              extends / super
🎯 Interview questions
# 1. What is prototype inheritance?

Prototype inheritance is JavaScript's mechanism where objects can access properties and methods from another object through the prototype chain.

# 2. What is a constructor function?

A constructor function is a function designed to create and initialize objects using the new keyword.

# 3. What does new do?

new creates a new object, links it to the constructor's prototype, sets this to that object, and returns the object.

# 4. Are JavaScript classes truly separate from prototypes?

No. JavaScript classes are primarily syntactic sugar over JavaScript's existing prototype-based inheritance system.

# 5. What does extends do?

extends establishes inheritance between a child class and a parent class.

# 6. What does super() do?

super() calls the parent class constructor and is used to initialize inherited properties when a child class defines its own constructor.


