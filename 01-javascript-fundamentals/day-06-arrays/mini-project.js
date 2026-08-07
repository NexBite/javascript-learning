/* 
🛒 Mini Project — Shopping Cart

Create an array of products:

const cart = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 }
];

Implement functions to:

Display all products.
Find a product by ID.
Filter products above ₹1000.
Calculate the total price using reduce().
Sort products by price.
Add a product.
Remove a product.

This project combines al

*/

let cart = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 }
];

// 1. Display all products
function displayProducts(products = cart) {
  console.log("--- Shopping Cart Items ---");
  products.forEach(item => {
    console.log(`ID: ${item.id} | ${item.name} - ₹${item.price}`);
  });
}

// 2. Find a product by ID
function findProductById(id) {
  return cart.find(product => product.id === id) || null;
}

// 3. Filter products above ₹1000
function getProductsAbove1000() {
  return cart.filter(product => product.price > 1000);
}

// 4. Calculate total price using reduce()
function calculateTotal() {
  return cart.reduce((sum, product) => sum + product.price, 0);
}

// 5. Sort products by price (ascending by default)
function sortByPrice(ascending = true) {
  return [...cart].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

// 6. Add a product
function addProduct(name, price) {
  const newId = cart.length > 0 ? Math.max(...cart.map(p => p.id)) + 1 : 1;
  const newProduct = { id: newId, name, price };
  cart.push(newProduct);
  return newProduct;
}

// 7. Remove a product by ID
function removeProduct(id) {
  const originalLength = cart.length;
  cart = cart.filter(product => product.id !== id);
  return cart.length < originalLength; // Returns true if item was found and removed
}

displayProducts();

console.log(findProductById(2));

console.log(getProductsAbove1000());

console.log(calculateTotal());

console.log(sortByPrice());

addProduct("Headphones", 2500);

displayProducts();

removeProduct(2);

displayProducts();