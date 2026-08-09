// Day 04 mini-project — Login Access Checker

const userName = "Aditya";
const password = "WrongPassword";
const isAccountActive = false;


console.log("----- Login Access Checker -----");


if (userName === ""){
  console.log("UserName is required.");

} else if (password === ""){
  console.log("Password is required."); 
} else if (!isAccountActive){
  console.log("Account is not active.");  
} else if (userName === userName && password === password){
 console.log(`Welcome, ${userName}! You have successfully logged in.  `);
} else {
  console.log("Invalid username or password.");
}
 
console.log("----- End of Program -----");