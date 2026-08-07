# --- What is an Array?
An array stores multiple values in one variable.
const fruits = ["Apple", "Banana", "Orange"];

# -- Access Elements
  const fruits = ["Apple", "Banana", "Orange"];
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);
# -- a) push()
  Adds an item to the end.
    const fruits = ["Apple", "Banana"];
    fruits.push("Orange");
    console.log(fruits);
# -- b) pop()
  Removes the last item.
    const fruits = ["Apple", "Banana", "Orange"];
    fruits.pop();
    console.log(fruits);
# --c) shift()
  Removes the first item.
    const fruits = ["Apple","Banana","Orange"];
    fruits.shift();
    console.log(fruits);
# --- d) unshift()
  const fruits = ["Banana","Orange"];
  fruits.unshift("Apple");
  console.log(fruits);
# -- e) slice()
  Returns part of an array.
  Original array does not change.
    const numbers = [10,20,30,40,50];
    const result = numbers.slice(1,4);
    console.log(result);
# -- f) splice()
  Unlike slice(), splice() changes the original array.
  const numbers=[10,20,30,40,50];
  numbers.splice(2,1);
  console.log(numbers);
# -- slice() vs splice()
----------------------------------------------------------------------------
| slice()                       | splice()                                 |
| ----------------------------- | ---------------------------------------- |
| Doesn't modify original array | Modifies original array                  |
| Returns a copy                | Changes existing array                   |
| Safer for React state         | Useful when intentionally editing arrays |
----------------------------------------------------------------------------
# -- g) includes()
  Checks whether a value exists.
  const fruits=["Apple","Banana","Orange"];
  console.log(fruits.includes("Banana"));
# -- h) find()
    Returns the first matching element.
    const users = [
      {id:1,name:"John"},
      {id:2,name:"Alice"},
      {id:3,name:"David"}
  ];
  const user = users.find(u => u.id === 2);
  console.log(user);
# -- i) filter()
  Returns all matching elements.
  const numbers=[5,10,15,20,25];
  const result=numbers.filter(n=>n>=15);
  console.log(result);
# -- j) map()
  Transforms every element into something new.
  const numbers=[1,2,3,4];
  const doubled=numbers.map(n=>n*2);
  console.log(doubled);
# -- React Connection 
  products.map(product => (
  <ProductCard key={product.id} product={product} />
  ));

# -- React Connection 
    Reduces an array to a single value.

# -- k) reduce()
  Reduces an array to a single value.
  const numbers=[10,20,30];
  const total=numbers.reduce((sum,current)=>{
      return sum+current;
  },0);
  console.log(total);

# -- l) sort()
  Sort strings:
  const fruits=["Orange","Apple","Banana"];
  fruits.sort();
  console.log(fruits);

# --- Interview Questions
What is an array?
A data structure that stores multiple values in a single variable.
Difference between slice() and splice()?
slice() returns a copy and doesn't modify the original array.
splice() modifies the original array.
Difference between map() and forEach()?
map() returns a new array.
forEach() returns undefined and is used for side effects.
Difference between find() and filter()?
find() returns the first matching element.
filter() returns all matching elements in a new array.
Why is reduce() useful?
It combines all array elements into a single value, such as a sum, average, grouped object, or count.
How do you sort numbers correctly?
Use a compare function:
