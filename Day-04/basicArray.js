// Day 04 - Arrays Basics

// 1. Create an array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);

// 2. Access elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// 3. Add elements
fruits.push("Orange");  // add at end
fruits.unshift("Grapes"); // add at start
console.log("After adding:", fruits);

// 4. Remove elements
fruits.pop();   // remove from end
fruits.shift(); // remove from start
console.log("After removing:", fruits);

// 5. Length of array
console.log("Total fruits:", fruits.length);

// 6. Loop through array
for(let i=0; i<fruits.length; i++){
    console.log("Fruit at index", i, "is", fruits[i]);
}

// 7. for..of loop (short way)
for(let fruit of fruits){
    console.log("Fruit:", fruit);
}
