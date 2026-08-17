

// --------- Challenge 1 — Error Handling
try {

    const age = 15;

    if (age < 18) {
        throw new Error("User must be 18 or older");
    }

} catch (error) {

    console.log(error.message);

}

// -------------- Challenge 2 — JSON
const employee = {
    name: "Aditya",
    department: "IT",
    salary: 50000
};
// convert employee to JSNO string 
  console.log("----------------convert employee to JSNO string------------------- ")
    const jsonData = JSON.stringify(employee);
    console.log(jsonData);
// Convert the JSON string → object
console.log("---------------- Convert the JSON string → object-------------- ")
const paserData = '{"name":"Aditya","age":30}';
const user = JSON.parse(paserData);
console.log(user.name);

console.log("------------------------------- API fetch Data--------------")

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP error! Status: ${response.status}`
            );
        }

        const users = await response.json();

        console.log(users);

        // Print name and email
        users.forEach(user => {
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
        });

    } catch (error) {

        console.error("Fetch error:", error.message);

    } finally {

        console.log("Request completed");

    }
}

getUsers();