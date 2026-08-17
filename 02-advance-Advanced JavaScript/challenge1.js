
// ---- challange1
// console.log(a);
var a =  10;
// console.log(a);
// out put -undefined ,10

// ---- challange2

// console.log(b);
let b = 20;
// c Cannot access 'b' before initialization


// ------ challange 3
function greet(){
// console.log(message);
}

var message = "hello";
greet();

// hello can access.


// --- challange4

var x = 10;
if(true){
  var x = 20;
  var y = 30;
}
// console.log(a);
// console.log(b);
// x= 20,y = 30 (value assg x = 20)

// ----- challange5
let name = "Aditya";
function outer(){
  let name = "rahul";
  function inner(){
    console.log(name);
  }
  inner();
}
outer();

// print = "rahul " becasue javaScript looks outward ,not inward.

