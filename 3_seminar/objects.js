const person = {
  name: "Ivan",
  age: 40,
};

console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Ivan", 40]
console.log(Object.entries(person)); // [["name", "Ivan"], ["age", 40]]

// Rest param
function sum(a, b, ...rest) {
  console.log(a, b, rest);
}

sum(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]

const { name } = person;
console.log(name); // Ivan

// Literals
const yearsOld = 25;

console.log("I am " + yearsOld + " years old"); // I am 25 years old
console.log(`I am ${yearsOld} years old`); // I am 25 years old
