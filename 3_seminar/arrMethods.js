console.log("Hello, World!");

arr = [123, 54, 5, 65];

console.log("Inital arr: ", arr);

const filteredArr = arr.filter((el) => el % 2 === 0);

console.log("Filtered arr: ", filteredArr);

console.log("For each: ");
arr.forEach((element) => {
  console.log(element);
});

// Map poate si returna
console.log("Map: ");
const mapArr = arr.map((element) => {
  console.log(element);
  return element;
});

console.log("Map return: ", mapArr);

// Reduce - accul e valoarea de la care incepe. By default e prima valoare din array si incepe mappingul cu al doilea element
const sumArr = arr.reduce((acc, element) => acc + element, 0); // merge si fara 0 in cazul nostru
console.log("Sum of arr: ", sumArr);

// IndexOf nu gaseste in arr NaN
console.log("Index of 5: ", arr.indexOf(5));

const elementIndex = arr.indexOf(4);
console.log("Index of 4: ", elementIndex !== -1 ? elementIndex : "Not found");

// Replace
const text = "Hello, World! I am new to World";
const reppText = text.replace("World", "JavaScript");   // Reaplce doar primul element gasit
console.log("Replaced text: ", reppText);

const reppAllText = text.replaceAll("World", "JavaScript");   // Reaplce toate elementele gasite
console.log("Replaced all text: ", reppAllText);

const foundArr = arr.find((element) => element === 5);
console.log("Found element: ", foundArr);