let test = 3;
const testC = 3;

test = '3';
// testC = '3'; // TypeError: Assignment to constant variable.

console.log(test); // is overwritten by '3'

const obj = {}

obj.name = 'Adrian';

console.log(obj.name); // { name: 'Adrian' }

// obj = {...obj, name: 'Mihai'}; // TypeError: Assignment to constant variable.

let obj2 = {}

obj2.name = 'Adrian';

console.log(obj2.name); // { name: 'Adrian' }

obj2 = {...obj2, name: 'Mihai'}; // TypeError: Assignment to constant variable.

console.log(obj2.name); // { name: 'Mihai' }   
// obj2 is not a constant, only the reference to the object is constant

