console.log("=== OBJECTS EXAMPLES ===");

// 1. Object Creation and Basic Operations
function objectBasicsExample() {
    console.log("\n1. Object Creation and Basic Operations:");

    // Adding properties
    const person = {
        name: "John",
        age: 30,
        city: "New York",
    };

    console.log("Person object:", person);
    console.log("Name:", person.name);
    console.log("Age:", person["age"]);

    // Adding new properties
    person.job = "Developer";
    person["salary"] = 75000;

    console.log("Updated person:", person);
}

// Call the object basics example
// objectBasicsExample();

// 2. Object Methods and 'this' keyword
function objectMethodsExample() {
    console.log("\n2. Object Methods and 'this' keyword:");

    const calculator = {
        result: 0,
        add: function (value) {
            this.result += value;
            return this;
        },
        subtract: function (value) {
            this.result -= value;
            return this;
        },
        multiply: function (value) {
            this.result *= value;
            return this;
        },
        getResult: function () {
            return this.result;
        },
        reset: function () {
            this.result = 0;
            return this;
        },
    };

    const result = calculator.add(10).multiply(2).subtract(5).getResult();
    console.log("Calculator result:", result); // 15
}

// Call the object methods example
// objectMethodsExample();

// 3. Object Destructuring
function objectDestructuringExample() {
    console.log("\n3. Object Destructuring:");

    const user = {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        address: {
            street: "123 Main St",
            city: "Boston",
            zip: "02101",
        },
    };

    // Basic destructuring
    const { name, email } = user;
    console.log("Name:", name, "Email:", email);

    // Destructuring with renaming
    const { name: userName, id: userId } = user;
    console.log("User:", userName, "ID:", userId);

    // Nested destructuring
    const {
        address: { city, zip },
    } = user;
    console.log("City:", city, "Zip:", zip);

    // Default values
    const { phone = "Not provided" } = user;
    console.log("Phone:", phone, user);
}

// Call the object destructuring example
// objectDestructuringExample();

// 4. Object.keys(), Object.values(), Object.entries()
function objectMethodsBuiltInExample() {
    console.log("\n4. Built-in Object Methods:");

    const product = {
        name: "Laptop",
        price: 999,
        brand: "TechCorp",
        inStock: true,
    };

    console.log("Object keys:", Object.keys(product));
    console.log("Object values:", Object.values(product));
    console.log("Object entries:", Object.entries(product));

    // Iterating through object
    console.log("Iterating through object:");
    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
}

// Call the built-in object methods example
// objectMethodsBuiltInExample();

console.log("\n=== ARRAYS EXAMPLES ===");

// 5. Array Creation and Basic Operations
function arrayBasicsExample() {
    console.log("\n5. Array Creation and Basic Operations:");

    // Different ways to create arrays
    const arr1 = []; // Array literal
    const arr2 = new Array(); // Constructor
    const arr3 = Array.of(1, 2, 3); // Array.of()
    const arr4 = Array.from("hello"); // Array.from()

    console.log("Array.of(1, 2, 3):", arr3);
    console.log("Array.from('hello'):", arr4);

    // Basic operations
    const fruits = ["apple", "banana", "orange"];
    console.log("Original fruits:", fruits);

    // Adding elements
    fruits.push("grape"); // Add to end
    fruits.unshift("mango"); // Add to beginning
    console.log("After adding:", fruits);

    // Removing elements
    const lastFruit = fruits.pop(); // Remove from end
    const firstFruit = fruits.shift(); // Remove from beginning
    console.log("Removed:", lastFruit, firstFruit);
    console.log("Final fruits:", fruits);
}

// Call the array basics example
// arrayBasicsExample();

// 6. Array Methods - Iteration
function arrayIterationExample() {
    console.log("\n6. Array Iteration Methods:");

    const numbers = [1, 2, 3, 4, 5];

    // forEach
    console.log("forEach - doubling each number:");
    numbers.forEach((num, index) => {
        console.log(`Index ${index}: ${num} * 2 = ${num * 2}`);
    });

    // map
    const doubled = numbers.map((num) => num * 2);
    console.log("map - doubled array:", doubled);

    // filter
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    console.log("filter - even numbers:", evenNumbers);

    // find
    const foundNumber = numbers.find((num) => num > 3);
    console.log("find - first number > 3:", foundNumber);

    // reduce
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log("reduce - sum of all numbers:", sum);
}

// Call the array iteration example
// arrayIterationExample();

// 7. Array Methods - Transformation
function arrayTransformationExample() {
    console.log("\n7. Array Transformation Methods:");

    const letters = ["a", "b", "c"];
    const moreLetters = ["d", "e", "f"];

    // concat
    const combined = letters.concat(moreLetters);
    console.log("concat:", combined);

    // slice
    const sliced = combined.slice(1, 4);
    console.log("slice(1, 4):", sliced);

    // splice (modifies original array)
    const colors = ["red", "green", "blue", "yellow"];
    const removed = colors.splice(1, 2, "purple", "orange");
    console.log("splice - removed:", removed);
    console.log("splice - modified array:", colors);

    // join
    const sentence = ["Hello", "world", "from", "JavaScript"].join(" ");
    console.log("join:", sentence);

    // reverse (modifies original)
    const reversedNumbers = [1, 2, 3, 4, 5];
    reversedNumbers.reverse();
    console.log("reverse:", reversedNumbers);

    // sort
    const names = ["Charlie", "Alice", "Bob"];
    names.sort();
    console.log("sort (alphabetical):", names);

    const scores = [85, 92, 78, 96, 88];
    scores.sort((a, b) => b - a); // Descending order
    console.log("sort (descending):", scores);
}

// Call the array transformation example
// arrayTransformationExample();

// 8. Array Destructuring
function arrayDestructuringExample() {
    console.log("\n8. Array Destructuring:");

    const coordinates = [10, 20, 30];

    // Basic destructuring
    const [x, y, z] = coordinates;
    console.log("x:", x, "y:", y, "z:", z);

    // Skipping elements
    const [first, , third] = coordinates;
    console.log("first:", first, "third:", third);

    // Rest operator
    const numbers = [1, 2, 3, 4, 5];
    const [head, ...tail] = numbers;
    console.log("head:", head, "tail:", tail);

    // Swapping variables
    let a = 1,
        b = 2;
    [a, b] = [b, a];
    console.log("After swapping - a:", a, "b:", b);
}

// Call the array destructuring example
// arrayDestructuringExample();

// 9. Multi-dimensional Arrays
function multiDimensionalArrayExample() {
    console.log("\n9. Multi-dimensional Arrays:");

    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    console.log("3x3 Matrix:");
    matrix.forEach((row, i) => {
        console.log(`Row ${i}:`, row);
    });

    // Accessing elements
    console.log("Element at [1][2]:", matrix[1][2]); // 6

    // Flattening array
    const flattened = matrix.flat();
    console.log("Flattened:", flattened);
}

// Call the multi-dimensional array example
// multiDimensionalArrayExample();

console.log("\n=== OBJECTS AND ARRAYS TOGETHER ===");