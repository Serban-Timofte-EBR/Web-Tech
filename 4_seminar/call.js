const person = {
  greet() {
    console.log("Hello, " + this.name);
  },

  meet(age, punctuation) {
    console.log("I am " + age + " years old" + punctuation);
  },
};

const person2 = {
  name: "John",
};

// Context in JavaScript
person.greet.call(person2); // Hello, John
person.greet.call({ name: "Jane" }); // Hello, Jane

person.meet.call(person2, 24, ".");
person.meet.call(null, 24);
// TypeError: CreateListFromArrayLike called on non-object
// person.meet.apply(person2, 24, ".");
person.meet.apply(person2, [24, "."]);
const bound = person.meet.bind()
const bound2 = person.meet.bind(person2, 24, ".");
const bound3 = person.meet.bind(person2);
console.log(bound);
console.log(bound2);

bound();
bound2();   // In bound2 va ramane mereu acest context cu person2, 24 si "."
bound3(24, ".");
bound3(24, "?");
bound3(24);