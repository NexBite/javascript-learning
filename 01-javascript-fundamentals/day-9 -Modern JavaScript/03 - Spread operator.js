/*
1. What is the Spread Operator?
Answer
The spread operator is .... It is used to expand elements of an array or properties of an object.
Array
const numbers = [10, 20, 30];
const newNumbers = [...numbers, 40];
console.log(newNumbers);
Output:
[10, 20, 30, 40]
Here:
...numbers
expands:
10, 20, 30
So JavaScript effectively creates:
[10, 20, 30, 40]
Object
const user = {
    name: "Aditya",
    age: 25
};
const updatedUser = {
    ...user,
    city: "Kolkata"
};
console.log(updatedUser);
Result:
{
    name: "Aditya",
    age: 25,
    city: "Kolkata"
}
2. What is the difference between Spread and Rest?
🔥 Very common interview question.
Both use:
...
but their purpose is different.
Spread → expands
const numbers = [10, 20, 30];
console.log(...numbers);
Output:
10 20 30
Rest → collects
function sum(...numbers) {
    console.log(numbers);
}
sum(10, 20, 30);
Output:
[10, 20, 30]
Interview answer
Spread expands values, while Rest collects multiple values into a single array or object.
Remember:
Spread → unpack
Rest   → collect
3. How do you copy an array using Spread?
const original = [1, 2, 3];
const copy = [...original];
console.log(copy);
Output:
[1, 2, 3]
Why is this useful?
Because:
const copy = original;
doesn't create an independent array.
Both variables refer to the same array.
const original = [1, 2, 3];
const copy = original;
copy.push(4);
console.log(original);
Output:
[1, 2, 3, 4]
But:
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original);
console.log(copy);
Output:
[1, 2, 3]
[1, 2, 3, 4]
That's why spread is important.
4. How do you merge two arrays?
const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Potato"];
const food = [...fruits, ...vegetables];
console.log(food);
Output:
["Apple", "Banana", "Carrot", "Potato"]
You can think:
fruits
   ↓
["Apple", "Banana"]

vegetables
   ↓
["Carrot", "Potato"]

       ↓

[...fruits, ...vegetables]

       ↓

["Apple", "Banana", "Carrot", "Potato"]
5. How do you add an item without modifying the original array?

Very common in React.

const products = ["Laptop", "Phone"];

const updatedProducts = [
    ...products,
    "Keyboard"
];

console.log(updatedProducts);

Output:

["Laptop", "Phone", "Keyboard"]

The original remains:

console.log(products);
["Laptop", "Phone"]
6. How do you remove an item using Spread?

Spread itself doesn't remove items.

You normally combine it with filter().

const products = ["Laptop", "Phone", "Mouse"];

const updatedProducts = products.filter(
    product => product !== "Phone"
);

console.log(updatedProducts);

Output:

["Laptop", "Mouse"]
Interview point

Don't say:

Spread removes items.

It doesn't.

Spread is used to create a new array, while methods such as filter() determine which items remain.

7. How do you copy an object?
const user = {
    name: "Aditya",
    age: 25
};

const copy = {
    ...user
};

console.log(copy);

Result:

{
    name: "Aditya",
    age: 25
}
8. How do you add a property using Spread?
const user = {
    name: "Aditya",
    age: 25
};

const updatedUser = {
    ...user,
    city: "Kolkata"
};

Result:

{
    name: "Aditya",
    age: 25,
    city: "Kolkata"
}

The original object is unchanged.

9. How do you update an existing property using Spread?

🔥 Very important for React.

const user = {
    name: "Aditya",
    age: 25
};

const updatedUser = {
    ...user,
    age: 26
};

console.log(updatedUser);

Result:

{
    name: "Aditya",
    age: 26
}

Why does age become 26?

Because properties appearing later overwrite earlier properties.

Conceptually:

{
    age: 25,
    age: 26
}

The last value wins.

10. What happens if the order is reversed?

🔥 Tricky interview question.

const user = {
    name: "Aditya",
    age: 25
};

const updatedUser = {
    age: 26,
    ...user
};

console.log(updatedUser);

What is the age?

Answer:

25

Why?

Because:

age: 26

comes first, and:

...user

comes later and contains:

age: 25

So the later property wins.

Rule

When duplicate object properties exist, the later property overwrites the earlier one.

11. Does Spread create a Deep Copy?

🔥 Important interview question.

No.

Spread creates a shallow copy.

Example:

const user = {
    name: "Aditya",
    address: {
        city: "Kolkata"
    }
};

const copy = {
    ...user
};

The top-level object is copied, but the nested address object is still shared.

copy.address.city = "Delhi";

console.log(user.address.city);

Output:

Delhi

😮 Why?

Because:

user
 │
 └── address ───────┐
                    │
copy                │
 │                  │
 └── address ───────┘

Both point to the same nested object.

12. What is a shallow copy?

A shallow copy means:

Top-level properties → copied
Nested objects        → shared references

Example:

const user = {
    name: "Aditya",
    address: {
        city: "Kolkata"
    }
};

const copy = { ...user };

name is copied.

But address is still a reference to the same nested object.

13. Can Spread be used with Strings?

Yes.

Strings are iterable.

const name = "Aditya";

const letters = [...name];

console.log(letters);

Output:

["A", "d", "i", "t", "y", "a"]

🔥 This is a nice interview trick.

14. What happens with ... on an object?
const user = {
    name: "Aditya",
    age: 25
};

console.log({
    ...user
});

It expands the object's enumerable own properties.

Conceptually:

{
    name: "Aditya",
    age: 25
}

becomes the properties of the new object.

15. Can you use Spread to merge objects?

Yes.

const user = {
    name: "Aditya"
};

const details = {
    age: 25,
    city: "Kolkata"
};

const profile = {
    ...user,
    ...details
};

console.log(profile);

Result:

{
    name: "Aditya",
    age: 25,
    city: "Kolkata"
}
16. What happens when two objects have the same property?

🔥 Very common.

const user1 = {
    name: "Aditya",
    city: "Kolkata"
};

const user2 = {
    name: "Rahul",
    age: 28
};

const user = {
    ...user1,
    ...user2
};

Result:

{
    name: "Rahul",
    city: "Kolkata",
    age: 28
}

Why?

Because user2 comes later.

user1.name
    ↓
Aditya

user2.name
    ↓
Rahul

later value wins
    ↓
Rahul
17. Why is Spread important in React?

🔥🔥 Extremely important interview question.

React encourages treating state as immutable.

Suppose:

const [user, setUser] = useState({
    name: "Aditya",
    age: 25
});

To update age:

setUser({
    ...user,
    age: 26
});

Instead of directly modifying:

user.age = 26;

The spread approach creates a new object.

Conceptually:

Old state
   ↓
{name: "Aditya", age: 25}

        ...user
           ↓

New object
   ↓
{name: "Aditya", age: 26}

This is one reason you must become very comfortable with spread before moving deeper into React.

18. Spread with React arrays

Suppose:

const [products, setProducts] = useState([
    "Laptop",
    "Phone"
]);

Add:

setProducts([
    ...products,
    "Keyboard"
]);

Result:

Laptop
Phone
Keyboard

Again, we're creating a new array rather than mutating the existing one.

19. Tricky Question — Is Spread a Copy?

The best interview answer is:

Spread creates a shallow copy, not a deep copy.

For a simple array:

const a = [1, 2, 3];

const b = [...a];

b is a new array.

But with nested objects:

const a = [
    {
        name: "Laptop"
    }
];

const b = [...a];

The nested object is still shared.

20. Spread vs Object.assign()

You may encounter:

Object.assign({}, user);

and:

{ ...user }

Both can create a shallow copy.

Modern JavaScript commonly uses:

const copy = { ...user };

because it's concise and easy to read.

*/

// ------- 1. What is the Spread Operator?
    // -- The spread operator is .... It is used to expand elements of an array or properties of an object.
    const number = [10,20,30];
    const newNumber = [...number,40]
    console.log(newNumber);
    // --- Object
    const user = {
      name : "Aditya",
      age : 25
    };

    const updateUser = {
      ...user,
      city : "kolkata"
    };
    console.log(updateUser);

// ------  2. What is the difference between Spread and Rest?
  const numbers = [10, 20, 30];

  console.log(...numbers);
  // -- Rest → collects
  function sum(...numbers) {
      console.log(numbers);
  }

  sum(10, 20, 30);
// --- 4. How do you merge two arrays?
const fruit = ["Apple","Banana"];
const vegetables = ["Carrot","Potato"]

const food = [...fruit, ...vegetables]
console.log(food);

// ----- 5. How do you add an item without modifying the original array?
const product = ["Laptop","Phone"]

const updateProducts =[
  ...product,
  "keyBoard"
];
console.log(updateProducts)

// ------------ 6. How do you remove an item using Spread?

const eclectProduct = ["Laptop","Phone","Mouse"];

const updateEclectProducts = eclectProduct.filter(
  eclectProduct => eclectProduct != "Phone"
);
console.log(updateEclectProducts);

// ------------- 7. How do you copy an object?
const user = {
  name : "aditya",
  age : 25
};
const copy = {
  ...user
};
console.log(copy);

// --------------- 8. How do you add a property using Spread?
const user = {
  name : "aditya",
  age : 25
};
const copy = {
  ...user,
  city : "kolkata"

};
console.log(copy);
// ------------------ 9. How do you update an existing property using Spread?
const newUser = {
  name : "Aditya",
  age : 25
};
const updateNewUser = {
  ...newUser,
  age : 27
};
console.log(updateNewUser)
// ---------------- 10. What happens if the order is reversed?
const user = {
    name: "Aditya",
    age: 25
};

const updatedUser = {
    age: 26,
    ...user
};

console.log(updatedUser);
// What is the age?
// 25
// Why?
// ---- Rule
  // When duplicate object properties exist, the later property overwrites the earlier one.
// ----------------- 12. What is a shallow copy?
// -- Top-level properties → copied
// Nested objects        → shared references

const user = {
  name : "Aditya",
  address : {

  }
};
const copy ={...user}

// ===================================== 13. Can Spread be used with Strings?
// yes
const name = "Aditya";
const letter = [...name];
console.log(letter);

// ========================= 14. What happens with ... on an object?
  // --- It expands the object's enumerable own properties.
  const user = {
    name: "Aditya",
    age: 25
};

console.log({
    ...user
});

// ============================ 15. Can you use Spread to merge objects?
  // Yes.
  const user = {
    name: "Aditya"
};

const details = {
    age: 25,
    city: "Kolkata"
};

const profile = {
    ...user,
    ...details
};

console.log(profile);

// ========================= 16. What happens when two objects have the same property?
const user1 = {
    name: "Aditya",
    city: "Kolkata"
};

const user2 = {
    name: "Rahul",
    age: 28
};

const user = {
    ...user1,
    ...user2
};

// ========================= 17. Why is Spread important in React?
const [user, setUser] = useState({
    name: "Aditya",
    age: 25
});
// --- To update age:
setUser({
    ...user,
    age: 26
});
// ================ 18. Spread with React arrays
const [products, setProducts] = useState([
    "Laptop",
    "Phone"
]);
//... Add:
setProducts([
    ...products,
    "Keyboard"
]);

// ================= Is Spread a Copy?
//...Spread creates a shallow copy, not a deep copy.
const a = [1, 2, 3];
const b = [...a];
const a = [
    {
        name: "Laptop"
    }
];

const b = [...a];

// =========================== 20. Spread vs Object.assign()
Object.assign({}, user);
// and
Object.assign({}, user);

// Both can create a shallow copy.
// Modern JavaScript commonly uses:
const copy = { ...user };
