# 🟢 Day 2 - JavaScript Basics  

> 📅 Date: 23rd August 2025  
> 🏁 Milestone: Started learning **JavaScript fundamentals** 🎉  

---

## 📌 Topics Covered

### 1️⃣ Variables & Constants
- **`var`** → old way, function-scoped (avoid using it ⚠️).  
- **`let`** → modern way, block-scoped, re-assignable.  
- **`const`** → modern way, block-scoped, cannot be re-assigned.  

```javascript
let name = "Pavan";
const age = 26;
var country = "India";

console.log(name, age, country);

2️⃣ Data Types

Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

Non-primitive: Object, Array, Function.

let str = "Hello";      // String
let num = 42;           // Number
let isCool = true;      // Boolean
let empty = null;       // Null
let notDefined;         // Undefined
let bigNum = 1234567890123456789012345678901234567890n; // BigInt

let person = { name: "Pavan", age: 26 }; // Object
let colors = ["red", "green", "blue"];   // Array
function greet() { return "Hi!"; }       // Function

3️⃣ Operators

Arithmetic: + - * / % **

Comparison: ==, ===, !=, !==, >, <, >=, <=

Logical: &&, ||, !

let a = 10, b = 3;

console.log(a + b); // 13
console.log(a ** b); // 1000
console.log(a > b && b > 0); // true
