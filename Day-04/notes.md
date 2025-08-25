# 🔵 Day 4 - Arrays Basics  

> 📅 Date: 25th August 2025  
> 🏁 Milestone: Arrays Basics   
## What are Arrays?

- Arrays are used to store multiple values in a single variable.
- Example: `let fruits = ["Apple", "Banana", "Mango"];`

## Array Operations

1. **Create an Array**

   ```js
   let fruits = ["Apple", "Banana", "Mango"];
   ```

2. **Access Elements**

    ```js
    console.log(fruits[0]); // Apple
    console.log(fruits[1]); // Banana


3. **Add Elements**
    ```js
    push() → Add to end

    unshift() → Add to start

    fruits.push("Orange");
    fruits.unshift("Grapes");

4. **Remove Elements**
    ```js
    pop() → Remove from end

    shift() → Remove from start

    fruits.pop();
    fruits.shift();

5. **Find Array Length**

    ```js
    console.log(fruits.length);


6. **Loop Through Array**
    ```js
    For loop

    for(let i=0; i<fruits.length; i++){
        console.log(fruits[i]);
    }


7. **For..of loop**
    ```js
    for(let fruit of fruits){
        console.log(fruit);
    }