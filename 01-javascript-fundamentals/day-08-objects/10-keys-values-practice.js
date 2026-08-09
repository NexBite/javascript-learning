// -------- Challenge 1 --------

const employee = {
    name: "Rahul",
    department: "IT",
    salary: 50000,
    experience: 3,
    location: "Kolkata"
};

Object.keys(employee).forEach(key => {
    console.log(`${key}: ${employee[key]}`);
});


// -------- Challenge 2 --------

console.log(Object.values(employee));


// -------- Challenge 3 --------

const product = {
    car: 50000,
    laptop: 30000,
    keyboard: 400,
    mouse: 350.50
};

let totalPrice = 0;

Object.values(product).forEach(price => {
    totalPrice += price;
});

console.log(totalPrice);


// -------- Challenge 4 --------

const order = {
    orderId: 1001,
    customer: "Aditya",
    total: 850,
    status: "Preparing",
    payment: "Paid"
};

Object.keys(order).forEach(key => {
    console.log(key);
});


// -------- Challenge 5 --------

Object.keys(order).forEach(key => {
    if (key !== "orderId" && key !== "total") {
        console.log(`${key}: ${order[key]}`);
    }
});