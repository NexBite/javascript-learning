// 1.	--------- Create an array of fruits. ---------------------

const fruit = ["Apple","Banana","Orange"]
console.log(fruit);
// Access Elements
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])
// length
console.log(fruit.length)
// 2.------------	Use push(). ----------------------------
  // Adds an item to the end.

  const fruits = ["Goava","pineApple"]

  fruits.push("Chery")
  console.log(fruits);

// 3.----------------	Use pop(). ------------------
  // Removes the last item.
    const drinks =["tea","coffy","wine","jusoic"]
      drinks.pop();
      console.log(drinks)


// 4.	------------Use shift(). ----------------
    // Removes the first item.
    const car = ["odey","murity","honda"]
    car.shift();
    console.log(car);
// 5.	---------------Use unshift(). -------------------
  // Adds an item to the beginning.
  const students = ["Raki","ritam","sujit"]
  students.unshift();
  console.log(students)

// 6.----------------	Use slice(). -----------------
  // Returns part of an array.
  const number = [10,20,30,40]
  const rank = number.slice(1,4)
  console.log(rank)

// 7.---------------	Use splice(). -------------------
  // Unlike slice(), splice() changes the original array.
  const number = [10,20,30,40]
  number.splice(1,2)
  console.log(number)

// 8.----------------	Check includes(). --------------------
  // Checks whether a value exists.
  const care = ["Odey","Bench","sumo"]
  console.log(car.includes("Odey"));

// 9.------------	Use find() on an array of objects. -----------
  // Returns the first matching element.
  const users = [
    {id:1,name:"aditya"},
    {id:2,name:"rima"},
    {id:3,name:"roy"},
    {id:4,name:"sujit"}
  ];
  const user = users.find(u=> u.id == 2);
  console.log(user)

// 10.-----------	Use filter() on numbers. ---------------
  // Returns all matching elements.
  const rollNo = [1,2,3,4,5,6]
  const rollNos = rollNo.filter(n=>n=5);

// 11.------------	Use map() to double numbers. ------------
  // ransforms every element into something new.
  const rank = [1,2,3,4,5]
  const doubled=rank.map(n=>n*2)
// ********* React Connection
  // React often uses map() to render components.
  CSSMathProduct.map(product =>(
    <productCard key ={product.id} product={product} />
  ))
// 12.-----------	Use reduce() to calculate a sum. ------------
  // Reduces an array to a single value.
  const plotNo =[20,30,60,70]
  const total=plotNo.reduce(Sum,current) => {
      return sum+current;
  },0);
  console.log(total)

// 13.---------------	Sort numbers ascending and descending.-----
  // Sort strings:
  const vegetable = ["patota","lady finger","cabege"]
  vegetable.sort();
  console.log(vegetable)
