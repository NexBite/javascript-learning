//---------------------- 1. Properties -----------------
// An object stores data using key-value pairs.

const user = {
  name : "Aditya",age:25,city:"kolkata"
};
console.log(user);

// Access properties
// Dot notaion
console.log(user.name);
console.log(user.age);

// Bracket notation
console.log(user["name"]);
console.log(user["age"]);

// Modify property
// add property
user.email = "aditya@gmail.com";
console.log(user);

// Delete property

delete user.city;
console.log(user);

// --------------------------------- 2. Methods -----------------------
  // ---- A function stored inside an object is called a method.
const user = {
name : "aditya",
greet : function(){
  console.log("Hello !")
}
};
user.greet();

 // ----------- Modern JavaScript syntax:
  const user = {
    name : "Aditya",
    greet(){
      console.log("hello!");
    }
  };
  user.greet();

  // For example
  const product ={
    name : "Laptop",
    price : 60000,

    getPrice(){
      return this.price;
    }

  };
  console.log(product.getPrice());

// ----------------------------------- 3. Object Destructuring -------------------
 const {name,age,city}=user;
 console.log(name);
 console.log(age);
 console.log(city);

 // ------ Rename while destructuring -------
  const {name : userName, age:userAge }=user;
  console.log(userName);
  console.log(userAge);
  // Default value
  const { country = "India" } = user;
  console.log(country);

/// ------------------------------------ 4. Nested Objects ----------------------
  // Objects can contain other objects.
  const user = {
    name : "adity",
    age : 25,
    

    address :{
      city : "kolkata",state :"West Bengal",country : "India"
    }
  };
  // Access:
  console.log(user.address.city)
  console.log(user.address.state);

  // --------------- Nested destructuring --------------
  const {
    name,address:{city,country}
  } = user;
  console.log(name);
  console.log(city);
  console.log(country);
  // ---- for Example 
  const response = {
    id : 101,
    title: "laptop",
    seller:{
      name : "ABC Store",
      loaction: {
        city : "kolkata"
      }
    }
  };

  const {
    title,
    seller:{
      name,
      location:{city}
    }
  } = response;

  console.log(title);
  console.log(name);
  console.log(city);
// ----------------- 5. Object Methods
// ------ JavaScript provides several built-in methods for working with objects.
/* 
Object.keys()
Object.values()
Object.entries()
*/

// -------------- 6. Object.keys()
// --- Returns an array containing the object's property names.

const user = {
  name : "Aditya",
  age : 25,
  city : "kolkata"

};

const keys = Object.keys(user);
console.log(keys);

Object.keys(user).forEach(key =>{
  console.log(key);
})

// -------------------- interview question ---------
/* 
What does Object.keys() return?
Answer:
Object.keys() returns an array containing the enumerable own property names of an object.
*/


// ----------------- 7. Object.values() --------------------
// ------------ Returns an array containing the object's values.
const user = {
  name : "Aditya",
  age : 25,
  city : "kolkata"
};
const values = Object.values(user);
console.log(values);

// ---------------------- 8. Object.entries() ------------------
const user = {
  name : "Aditya",
  age : 25,
  city : "kolkata"
};
console.log(Object.entries(user));


