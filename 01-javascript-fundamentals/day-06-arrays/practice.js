/* 1.	Create an array of 5 programming languages. 
2.	Add "TypeScript" using push(). 
3.	Remove the last language using pop(). 
4.	Remove the first language using shift(). 
5.	Add "Python" to the beginning using unshift(). 
6.	Extract the middle three items using slice(). 
7.	Replace one language using splice(). 
8.	Check if "JavaScript" exists using includes(). 
9.	Find a student with id = 3. 
10.	Filter all numbers greater than 50. 
11.	Square all numbers using map(). 
12.	Find the total using reduce(). 
13.	Sort numbers ascending and descending.
 */

//-----------1. Create an array of 5 programming languages.

const programmingLanguage = ["java","Python","C#","C++","JavaScripts"]
console.log(programmingLanguage);

// ---------------2 Add "TypeScript" using push().
const TypeScripts = programmingLanguage
programmingLanguage.push("TypeScripts");
console.log(TypeScripts);

// -------------3 Remove the last language using pop().
const lastLanguage = programmingLanguage
programmingLanguage.pop()
console.log("lastLanguage")

// ---------------4 Remove the first language using shift().
 const rls = programmingLanguage
 programmingLanguage.shift()
 console.log(rls)

// ------------------5 Add "Python" to the beginning using unshift().

const pbu = programmingLanguage
programmingLanguage.unshift()
console.log("pbu")

// ----------------6 Extract the middle three items using slice().

const middle = programmingLanguage
programmingLanguage.slice(1,4)
console.log(middle)

// ------------------7 Replace one language using splice().
const rlspl= programmingLanguage
programmingLanguage.splice(1,2)
console.log("rlsp")

// ----------------- 8-Check if "JavaScript" exists using includes().
const cjei = programmingLanguage
programmingLanguage.includes()
console.log(
   programmingLanguage.includes("JavaScript")
)


// ----------- 9 Find a student with id = 3.

  const student = [
    {id:1,name:"aditya"},
    {id:2,name:"aditya"},
    {id:3,name:"aditya"},
    {id:4,name:"aditya"}
  ];
  const sId = student.find(u=> u.id == 3);
  console.log(sId);

  // ------------- 10 Filter all numbers greater than 50.

  const fng = [20,30,70,50,80,90,60,100]
  const result = fng.filter(
      n => n > 50
  );

  console.log(result);

// ----------------- 11- Square all numbers using map().

  const snm = [5,6,7,6,8]
  const snms = snm.map(n=>n*2);

// ----------- 12 Find the total using reduce().
const total = ftr.reduce(
    (sum,current)=>{

        return sum+current;

    },
    0
);

console.log(total);

// ---------------- 13 Sort numbers ascending and descending.
const sad = [40, 100, 1, 5, 25, 10];

// 1. Sort Ascending (Smallest to Largest)
const sortedAsc = sad.sort((a, b) => a - b);
console.log(sortedAsc); 

// 2. Sort Descending (Largest to Smallest)
const sortedDesc = sad.sort((a, b) => b - a);
console.log(sortedDesc); 