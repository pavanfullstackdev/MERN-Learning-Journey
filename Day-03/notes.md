# 🔵 Day 3 - Conditions & Loops  

> 📅 Date: 24th August 2025  
> 🏁 Milestone: Learned how to control program flow with **conditions** and repeat tasks using **loops**  

---

## 📌 Topics Covered

### 1️⃣ Conditional Statements

- **if...else**
```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult ✅");
} else {
  console.log("You are a minor ❌");
}


- **else if**

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}


- **switch**

let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start of the week 😴");
    break;
  case "Friday":
    console.log("Weekend is near 🎉");
    break;
  default:
    console.log("Midweek hustle 💪");
}


2️⃣ Loops

- **for loop**

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

- **while loop**

let n = 1;
while (n <= 3) {
  console.log("Number:", n);
  n++;
}


- **do...while**

let x = 1;
do {
  console.log("Run at least once, value:", x);
  x++;
} while (x <= 0);


- **for...of (arrays)**

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("Color:", color);
}

- **for...in (objects)**

let person = { name: "Pavan", age: 26 };
for (let key in person) {
  console.log(key, ":", person[key]);
}

3️⃣ Break & Continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skips 3
  if (i === 5) break;   // stops loop at 5
  console.log(i);
}
// Output: 1, 2, 4

