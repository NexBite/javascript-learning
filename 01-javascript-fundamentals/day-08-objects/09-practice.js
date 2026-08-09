// --- Create an object:

const student ={
name : "Rahul",
age : 21,
course : "JavaScripts",
city : "kolkata"
};
console.log(student);
// to add  email,phone
student.email = "Aditya@gmail.com";
console.log(student);
// Add:
student.phone = 9851688163;
// Change the student's age.
student.age = 25;
console.log(student);
// delete
delete student.city;
console.log(student);
// Use destructuring to get:
const { name, age, course, city } = student;
console.log(name);
console.log(age);
console.log(city);

const employee = {
  name : "Jhaone",
  age : 30,
  position : "Developer",
  salary : 50000
};
Object.keys(employee).forEach(key => {
  console.log(key,employee[key]);
});

const order = {
  orderId : 1001,
  customer : "Aditya",
  total : 850,
  status : "Preparing",
  payment : "Paid"
};
Object.entries(order).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});