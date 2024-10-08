function test() {
  if (true) {
    var var1 = 1;   // function scope
    let let2 = 2; // block scope
    const const3 = 3;   // block scope

    console.log("Inside if block");
    console.log("Var: ", var1);
    console.log("Let: ", let2);
    console.log("Const: ", const3);
  }

  console.log("Outside if block");
  console.log("Var: ", var1);
//   console.log("Let: ", let2);
//   console.log("Const: ", const3);
}

test();

console.log("Outside function");
console.log(var2);  // var is undefined because it is called before declaration

var var2 = 2;
