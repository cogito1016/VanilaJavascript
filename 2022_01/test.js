var a = "Hello";

testA();
testB();

function testA() {
  console.log(a);
}

function testB() {
  console.log(a);
  var a = "Good Bye";
  console.log(a);
}

// console.log(a);
// var a = "Hello";
// console.log(a);
