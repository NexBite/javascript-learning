const product = {
  id : 101,
  name : "Laptop",
  price : 60000,
  category : "Electronics",
  stock : 15,

  brand : {
    name : "Dell",
    country : "India"
  }
};
//  --- 1. Print product name
console.log("-----------------------product name--------------")
console.log(product.name);
// ---- 2. Print price
console.log("-----------------------product price--------------")
console.log(product.price)
// --- 3. Print brand
console.log("-----------------------print brand name--------------")
console.log(product.brand.name);
// ------4. Print all property names
console.log("-----------------------Print all property names--------------")
console.log(Object.entries(product));
