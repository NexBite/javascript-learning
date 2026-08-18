// Start with your familiar object:
const product = {
  name : "Laptop",
  brand : "Dell",
  proce : "60000",
  stock : 15
};
// Without destructuring:
const name = product.name;
const brand = product.brand;
const price = product.price;

console.log(name);
console.log(brand);
console.log(price);

const { name,brand,price} = product;
console.log(name);
console.log(brand);
console.log(price);
// ---------------- Challenge 1 — Basic Object

const employee = {
    name: "Ratan",
    age: 28,
    department: "IT",
    salary: 50000
};

const { name, age, department, salary } = employee;

console.log(name);
console.log(age);
console.log(department);
console.log(salary);


// ---------------- Challenge 2 — Renaming

const {
    name: employeeName,
    salary: employeeSalary
} = employee;

console.log(employeeName);
console.log(employeeSalary);


// ---------------- Challenge 3 — Default Value

const product = {
    name: "Laptop",
    price: 60000
};

const {
    name: productName,
    brand = "Unknown",
    price
} = product;

console.log(productName);
console.log(brand);
console.log(price);


// ---------------- Challenge 4 — Array Destructuring

const colors = ["Red", "Green", "Blue"];

const [first, , third] = colors;

console.log(first);
console.log(third);


// ---------------- Challenge 5 — Nested Object

const customer = {
    name: "Aditya",
    email: "aditya@gmail.com",
    address: {
        city: "Kolkata",
        state: "West Bengal"
    }
};

const {
    name: customerName,
    email,
    address: { city, state }
} = customer;

console.log(customerName);
console.log(email);
console.log(city);
console.log(state);


// ---------------- Challenge 6 — Function Destructuring

const productData = {
    name: "Laptop",
    price: 60000,
    brand: "Dell"
};

function displayProduct({ name, price, brand }) {
    console.log(`Product: ${name}`);
    console.log(`Brand: ${brand}`);
    console.log(`Price: ${price}`);
}

displayProduct(productData);