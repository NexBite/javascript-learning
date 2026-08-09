// ---- 1️⃣ Object.keys()
// Object.keys() gives you an array of all property names.

const student = {
  name : "Rahul",
  age : 25,
  course : "JavaScripts",
  email:"Aditya",
  phone : "9851688163",
};
const keys = Object.keys(student);
console.log(keys);

// ----- 2️⃣ Loop through Object.keys()
Object.keys(student).forEach(key => {
  console.log(key);
});

// -------- 3️⃣ Get the value using the key

Object.keys(student).forEach(key =>{
  console.log(key,student[key]);
});

const keys = Object.keys(student);
console.log(keys);