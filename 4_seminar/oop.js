console.log("Hello, OOP!");

const person = {
  name: "John",
  greet() {
    console.log("Hello, " + this.name);
  },
};

console.log("Before login / logout");
console.log(person);
console.log("Prototype: " + person.hasOwnProperty());
console.log("Prototype name: " + person.hasOwnProperty("name"));

person.__proto__.age = 30;
console.log(person.age);

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

// Orice functie este o functie constructor

User.prototype.login = function () {
  this.online = true;
  console.log(this.email + " has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email + " has logged out");
};

const user1 = new User("euseb@gmail.com", "Eusebius");

user1.login();
user1.logout();

console.log("After login / logout");
console.log(user1);

// ----------------------------------------------------    OOP    ----------------------------------------------------

class Student {
  constructor(name, age, grade) {
    // Atributele sunt private
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
console
const student = new Student("John", 20, 10);
console.log(student);
student.greet();

// Inheritance

class Teacher extends Student {
  constructor(name, age, grade, subject) {
    super(name, age, grade);
    this.subject = subject; // Nu putem folosi this.subject inainte de super
  }

  teach() {
    console.log("I teach " + this.subject);
  }
}

const teacher = new Teacher("Jane", 30, 10, "Web Technologies");
console.log(teacher);
console.log(teacher.teach()); // I teach Web Technologies & undefined
console.log(teacher.greet()); // Hello, my name is Jane & undefined
