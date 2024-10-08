const arr = [1, 2, 3, 4, 5];

console.log("Array length: ", arr.length);

console.log("Array first element: ", arr[0]);

arr.push(6);

console.log("Array after push: ", arr);

arr[0] = 0;

// arr = 1; // TypeError: Assignment to constant variable.

arr.pop();

arr.shift(); // remove first element

arr.unshift(1); // add element at the beginning

arr.splice(2, 1); // remove one element from index 2

arr.push(3);

console.log(arr.slice(2, 4)); // create a new array from index 2 to index 4

console.log("Array: ", arr);

const arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log("---------------------------------");

for (item in arr2) {
  console.log(item);
}

console.log("---------------------------------");

arr2.forEach((element) => {
  console.log(element);
});
