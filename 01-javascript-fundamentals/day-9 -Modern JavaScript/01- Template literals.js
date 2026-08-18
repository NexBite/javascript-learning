// 1️⃣ Template Literals

// You've already used this in yesterday's practice:
/*
console.log(`${key}: ${order[key]}`);
// That's a template literal.

const name = "aditya";
const age = 25
console.log("My name is " + name + "and i am " + age + "years old .");
console.log(`My name is ${name} and i am ${age} years old .`);

const price = 500;
const quantity = 3;
console.log(`Total : ${price * quantity}`);

const age = 25;
console.log(`Status : ${age >= 18 ? "Adult" : "Minor"}`);

// Without template literals:
  const  message = 
  "hello\n" + "Welcome to javaScripts\n" + "Keep learning\n"
// With template literals
  const message = `
  Hello 
  Welcome to JavaScripts
  keep learning 

  `
*/
//Practice 1 — Template Literals
/*
const product = {
    name: "Laptop",
    price: 60000,
    brand: "Dell"
};

const message = `
Product: ${product.name}
Brand: ${product.brand}
Price: ₹${product.price}
`;

console.log(message);

const { name, price, brand } = product;

console.log(`
Product: ${name}
Brand: ${brand}
Price: ₹${price}
`);
*/
// 3️⃣ Destructuring
 //------- Array Destructuring
//  const number = [10,20,30,40]
//  const [a,b,c,d,] = number;
//  console.log(a)
//  console.log(b)
//  console.log(c)
//  console.log(d)
 //------ Skip values
//  const number = [10,20,30]
//  const [first, ,third] = number;
//  console.log(first);
//  console.log(third);
// - 4️⃣ Spread Operator ...

// const fruit = ["apple","Bannana"];
// const morefruits = [... fruit, "Mango","Orange"]
// console.log(morefruits);

// ----- Copy an array
/*
const numbers = [1,2,3,4];
const copy = [... numbers]
console.log(copy);
*/

// --------- Spread with objects
/*
const user = {
  name :"aditya",
  age :25
};
const updateUser = {
...user,
city : "kolkata"
};
console.log(updateUser);
*/

// ---------------- Updating an object

 //  -- This pattern is extremely important:
/*
    function calculateTotal(...prices){
      let total = 0;
      prices.forEach(price =>{
        total +=price;
      });
      return total;
    }
    console.log(calculateTotal(100,200,300));
*/
/*
const user = {
  name : "Aditya",
  address : {
    city : "kolkata"
  }
};
console.log(user.address.city);
*/

const response = {
  user :{
    profile :{
      address :{
        city : "kolkata"
      }
    }
  }
};
console.log(response.user?.profile?.address?.city);