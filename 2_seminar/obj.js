const stundet = {
    name: 'Ivan',
    email: 'adrian@ase.ro',
    yearsOld: 25,
    meet: function() {
        console.log('Hello, my name is', this.name);
    },
    // bye => () => console.log('Goodbye, my name is', this.name)  // Arrow function but without access to this
    bye: function() {
        console.log('Goodbye!');
    }
}

console.log('Our student loged as object: ', stundet);
console.log('Our student name: ', stundet.name);
console.log('Our student email: ', stundet['email']);
console.log('Our student years old: ', stundet.yearsOld);

stundet.meet();

// Functions

/**
 * 
 * @param {String} name 
 */
async function test1(name) {
    console.log('Hello, my name is', name);
}

/**
 * 
 * @param {String} name2 
 */
const test2 = async (name2) => {
    console.log('Hello, my name is', name2, ' but this time from an arrow function');
}

const testArrow2 = name3 => console.log('Hello, my name is', name3, ' but this time from an arrow function without parenthesis');

test1('Gabriel');
test2('Gabriel');
testArrow2('Gabriel');

stundet.bye();