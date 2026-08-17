
/*
const user = {
    name: "Aditya",
    age: 30,
    city: "Delhi"
};

// 1. Store the object in localStorage
localStorage.setItem("user", JSON.stringify(user));

// 2. Retrieve it from localStorage
const storedUserString = localStorage.getItem("user");

// 3. Convert it back into a JavaScript object
const retrievedUser = JSON.parse(storedUserString);

// 4. Print the name, age, and city
console.log(`Name: ${retrievedUser.name}`);
console.log(`Age: ${retrievedUser.age}`);
console.log(`City: ${retrievedUser.city}`);

// 5. Remove the user from localStorage
localStorage.removeItem("user");
*/

/*

const localStorage = {
    store: {},
    setItem(key, value) {
        this.store[key] = String(value);
    },
    getItem(key) {
        return this.store[key] || null;
    },
    removeItem(key) {
        delete this.store[key];
    }
};

const user = {
    name: "Aditya",
    age: 30,
    city: "Delhi"
};

// 1. Store
localStorage.setItem("user", JSON.stringify(user));

// 2. Retrieve
const storedUserString = localStorage.getItem("user");

// 3. Parse
const retrievedUser = JSON.parse(storedUserString);

// 4. Print
console.log(`Name: ${retrievedUser.name}`);
console.log(`Age: ${retrievedUser.age}`);
console.log(`City: ${retrievedUser.city}`);

// 5. Remove
localStorage.removeItem("user");
*/
console.log("------------------Challenge 1 — Local Storage------------------")
// ---------------- Challenge 1 — Local Storage
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch'); // Stores data in a local folder named "scratch"

const user = {
    name: "Aditya",
    age: 30,
    city: "Delhi"
};

localStorage.setItem("user", JSON.stringify(user));
const retrievedUser = JSON.parse(localStorage.getItem("user"));

console.log(`Name: ${retrievedUser.name}`);
console.log(`Age: ${retrievedUser.age}`);
console.log(`City: ${retrievedUser.city}`);

localStorage.removeItem("user");

// -------------------- Challenge 2 — Session Storage
console.log("------------------ Challenge 2 — Session Storage------------------")
// const theme = "dark";

// // 1. Store in sessionStorage
// sessionStorage.setItem("theme",theme);


// // 2. Retrieve it
// const saveTheme = sessionStorage.getItem("theme");
// // 3. Print it
// console.log(`Theme : ${saveTheme}`);

// // 4. Remove it
// sessionStorage.removeItem("theme");

// In-memory polyfill for Node.js testing
const sessionStorage = {
    store: {},
    setItem(key, value) {
        this.store[key] = String(value);
    },
    getItem(key) {
        return this.store[key] || null;
    },
    removeItem(key) {
        delete this.store[key];
    }
};

const theme = "dark";

// 1. Store in sessionStorage
sessionStorage.setItem("theme", theme);

// 2. Retrieve it
const savedTheme = sessionStorage.getItem("theme");

// 3. Print it
console.log(`Theme: ${savedTheme}`);

// 4. Remove it
sessionStorage.removeItem("theme");

console.log("------------------ Challenge 3 — DOM Manipulation------------------")

