// Conditions
let age = 20;

if (age >= 18) {
  console.log("You can vote 🗳️");
} else {
  console.log("Too young to vote ❌");
}

// Switch
let fruit = "apple";
switch(fruit) {
  case "apple":
    console.log("Apples are red 🍎");
    break;
  case "banana":
    console.log("Bananas are yellow 🍌");
    break;
  default:
    console.log("Unknown fruit 🤔");
}

// Loops
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

let n = 1;
while (n <= 3) {
  console.log("While loop number:", n);
  n++;
}

let x = 1;
do {
  console.log("Do-while loop executed at least once, x =", x);
  x++;
} while (x < 1);

// For...of
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("Color is:", color);
}

// For...in
let person = { name: "Pavan", city: "Pune" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Break and Continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log("Loop value:", i);
}
