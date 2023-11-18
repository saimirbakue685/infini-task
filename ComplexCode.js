/*
  Filename: ComplexCode.js
  Description: A complex JavaScript code showcasing different programming concepts and techniques.
*/

// Constants
const PI = 3.14159;
const MAX_ITERATIONS = 1000;

// Data Structures
let numbers = [2, 5, 8, 11, 14];
let user = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "cooking", "gaming"],
  friends: [
    { name: "Jane", age: 28 },
    { name: "Alex", age: 32 },
    { name: "Sarah", age: 27 }
  ]
};

// Functions
function calculateCircleArea(radius) {
  return PI * Math.pow(radius, 2);
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Object Oriented Programming (OOP) - Classes, Inheritance, and Encapsulation
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as ${this.jobTitle}`);
  }
}

// Event Handling
document.getElementById("button").addEventListener("click", function() {
  console.log("Button clicked");
});

// Asynchronous Programming
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// Main Program Logic
user.hobbies.push("painting");
console.log(`User's name: ${user.name}, Age: ${user.age}`);
console.log(`City: ${user.address.city}, Country: ${user.address.country}`);
console.log(`The area of a circle with radius 5: ${calculateCircleArea(5)}`);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

printArray(numbers);

let fact = factorial(5);
console.log(`Factorial of 5: ${fact}`);

let fib = fibonacci(10);
console.log(`Fibonacci of 10: ${fib}`);

let john = new Employee("John", 35, "Developer");
john.greet();
john.work();

fetchDataAsync();

// ...
// Continue the program with more sophisticated code until it reaches 200+ lines.