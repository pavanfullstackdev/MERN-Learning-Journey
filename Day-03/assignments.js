//1. Odd or Even Checker
// Write a program that takes a number and prints whether it is Odd or Even.

const numbeCheker = (num) => {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
};

numbeCheker(5);
numbeCheker(10);
numbeCheker(0);

//02 Grade calculator
//Input marks (0–100). Print grade based on conditions:

// >=90 → A

// >=75 → B

// >=50 → C

// <50 → Fail

// Grade Calculator
const gradeCalculator = (marks) => {
  if (typeof marks !== "number" || isNaN(marks)) {
    console.log("Invalid input! Please enter a number between 0 and 100.");
  } else if (marks < 0 || marks > 100) {
    console.log("Invalid marks! Marks should be between 0 and 100.");
  } else if (marks >= 90) {
    console.log("You got A grade");
  } else if (marks >= 75) {
    console.log("You got B grade");
  } else if (marks >= 50) {
    console.log("You got C grade");
  } else {
    console.log("You got Failed!");
  }
};

// Test Cases
gradeCalculator(90);
gradeCalculator(89);
gradeCalculator(78);
gradeCalculator(65);
gradeCalculator(55);
gradeCalculator(40);
gradeCalculator(30);

gradeCalculator(89.99);
gradeCalculator(80);
gradeCalculator(79.99);
gradeCalculator(70);
gradeCalculator(69.99);
gradeCalculator(60);
gradeCalculator(59.99);
gradeCalculator(50);
gradeCalculator(49.99);
gradeCalculator(39.99);

gradeCalculator(-5);
gradeCalculator(101);
gradeCalculator("hello");
gradeCalculator(null);

// 3. Multiplication Table (Loops)
// Ask the user for a number (say 5) and print its table like

const multiplicationTable = (inputNumber) => {
  for (let i = 1; i <= 10; i++) {
    console.log(inputNumber * i);
  }
};

multiplicationTable(5);
multiplicationTable(12);

// 4. Sum of Numbers using Loop
// Write a program to calculate the sum of numbers from 1 to 100.

const addtion = () => {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i; // add i to sum each time
  }

  console.log("The sum of numbers from 1 to 100 is:", sum);
};
addtion();

// 5. Factorial Finder (!)
//Input a number n and print its factoria

const factorial = (num) => {
  let factorialSum = 1;
  for (let i = num; i >= 1; i--) {
    factorialSum *= i;
  }
  console.log(`Factorial of ${num} is ${factorialSum}`);
};
factorial(5);

// 6. FizzBuzz Classic
// Print numbers from 1 to 50:

// If divisible by 3 → print "Fizz"

// If divisible by 5 → print "Buzz"

// If divisible by both → print "FizzBuzz"

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 7. Reverse a Number

// Input: 1234
// Output: 4321

const reverseNumber = (num) => {
  let reversedNumber = 0;
  while (num > 0) {
    let digit = num % 10; // get last digit
    reversedNumber = reversedNumber * 10 + digit; // add digit in reverse place
    num = Math.floor(num / 10); // remove last digit
  }
  console.log(reversedNumber);
};

reverseNumber(1234); // Output: 4321

// 8. Palindrome Checker

// Input a string/number and check if it reads the same backward & forward.
// Example: madam, 121 → Palindrome
const isPalindrome = (input) => {
  let str = input.toString(); // convert number to string if needed
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log(`${input} is a Palindrome ✅`);
  } else {
    console.log(`${input} is NOT a Palindrome ❌`);
  }
};

isPalindrome("madam"); // Palindrome
isPalindrome(121);     // Palindrome
isPalindrome(123);     // Not a Palindrome


// 9. Pattern Printing (Star Pyramid ⭐)

//Print this pattern with loops:
// *
// **
// ***
// ****
// *****
const printStars = (rows) => {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
};

printStars(5);


//10. Guess the Number Game 🎲 (Challenge)

// Generate a random number between 1–10.
// Ask the user to guess.
// If correct → print "You guessed right 🎉"
// Else → "Try again!"
const guessNumber = () => {
  const randomNum = Math.floor(Math.random() * 10) + 1; // 1–10
  const userGuess = prompt("Guess a number between 1 and 10:"); // input from user

  if (parseInt(userGuess) === randomNum) {
    console.log("You guessed right 🎉");
  } else {
    console.log(`Try again! The number was ${randomNum}`);
  }
};

guessNumber();


