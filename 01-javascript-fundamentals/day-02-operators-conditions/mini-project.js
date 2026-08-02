const studentName = "aditya";
const marks = 130;

console.log("--------------------Student Result--------------");
console.log("Student Name : ", studentName);
console.log("Marks : ", marks);


if (marks < 0 || marks > 100){
  console.log("Invalid marks");

}else if (marks >= 90){
  console.log("A ++");
  console.log("Result: Pass");
}else if(marks >= 80){  
  console.log("A +");
  console.log("Result: Pass");
}else if(marks >= 70){
  console.log("A");
  console.log("Result: Pass");
} else if (marks >= 60){
  console.log("B");
  console.log("Result: Pass");
} else {  

  console.log("C");
  console.log("Result: Fail");
} 