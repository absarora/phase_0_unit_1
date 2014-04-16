// I paired [with: Tim Howard] on this challenge.




// Pseudocode
// Test 1. define a variable called "secretNumber" and set it to any value
// Test 2. set secretNumber to a given number in the test
// Test 3. define a variable called "password" and set it to an empty string
// Test 4. set password to a given string in the test
// Test 5. define a variable called "allowedIn" and set it to a boolean value
// Test 6. set allowedIn to a given boolean value in the test
// Test 7. define a variable called "members" and set it equal to an empty array
// Test 8. set the first element in the array to a string, "John"
// Test 9. set the fourth element in the array to a string, "Mary"


// __________________________________________
// Write your code below.

var secretNumber = 0;
secretNumber = 7;
var password = '';
password = 'just open the door';
var allowedIn = true;
allowedIn = false;
var members = [];
members[0] = 'John';
members[3] = 'Mary';

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// The variable names are clear and easy to understand. The code is brief, readable, and D.R.Y.


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 

// In the beginning, I had trouble understanding as how to pass the tests. Once I got through the
// first test by setting the variable named secretNumber to zero, I was able to cruise through the
// rest of the exercise.
// I believe Test-Driven Development (TDD) is a great way to debugging your programs; this was a
// good exercise for an intro to Javascript while learning in brief about debugging as well.


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

