const firstnumber = 10;
const secondnumber = 20;

// console.log("Adition",firstnumber + secondnumber);
// console.log("Subtraction",firstnumber - secondnumber);
// console.log("multiplication",firstnumber * secondnumber);
// console.log("Division",firstnumber / secondnumber);
// console.log("Reminder",firstnumber % secondnumber);
// console.log("Exponentiation",firstnumber ** 2);

const number1 = 7;

// if (number1 % 2 === 0) {
//     console.log("The numbder is : ","Even Number");
// }  else {
//     console.log("The numbder is : ","Odd Number");
// }


// ============================== // Part 2: Assignment Operators
let score = 50;
score += 10; // score = score + 10
// console.log("After += 10",score); // 60

score -= 10; // score = score - 10
// console.log("After -= 10",score); // 50


score *= 2; // score = score * 2
// console.log("After *= 2",score); // 100

score /= 2; // score = score / 2
// console.log("After /= 2",score); // 50


//  =============================   Part 3: Comparison Operators

// const age = 20;
// console.log("age === 20", age === 20); // true
// console.log("age !== 20", age !== 20); // false
// console.log("age > 18", age > 18); // true
// console.log("age < 25", age < 25); // true
// console.log("age >= 20", age >= 20); // true
// console.log("age <= 20", age <= 20); // true


// =============================   Part 4: Logical Operators

const userAge =22 ;
const hasIdCard = true;

// console.log(
//   " Can enter the club : ",
//   userAge >= 18 && hasIdCard === true   
// );

// console.log(
//   "Has permission to enter the club : ",
//   userAge >= 18 || hasIdCard === true
// );

// console.log(
//   "Does not have ID card : ",
// !hasIdCard
// );

// const age = 20;

// if(age >= 18 ){
//   // console.log("You are eligible to vote");  
// }

// const age = 16;
// if (age >= 18){
//   console.log("You are eligible to vote");
// }
// else{
//   console.log("You are not eligible to vote");
// }


// const marks = 30;

// if(marks >= 90){
//   console.log("Grade A");
// }else if(marks >= 80){
//   console.log("Grade B");
// }else if(marks >= 70){
//   console.log("Grade C");
// }else if(marks >= 60){
//   console.log("Grade D");
// }else{
//   console.log("fail");
// }

//  Switch  
const day = Monday;

switch(day){  
   case "Monday":
    console.log("Today is Monday");
    break;

    case "Tuesday":
    console.log("Today is Tuesday");
    break;

    case "Wednesday":
    case "Wednesday":
      console.log("Today is Wednesday");
      break;

      default:
      console.log("Invalid Day");



}