
console.log("=== JAVASCRIPT OPERATORS EXAMPLES ===");

// 1. Arithmetic Operators
function arithmeticOperatorsExample() {
    console.log("\n1. Arithmetic Operators:");
    
    let a = 10;
    let b = 3;
    
    console.log(`a = ${a}, b = ${b}`);
    console.log("Addition (+):", a + b); // 13
    console.log("Subtraction (-):", a - b); // 7
    console.log("Multiplication (*):", a * b); // 30
    console.log("Division (/):", a / b); // 3.333...
    console.log("Modulus (%):", a % b); // 1
    console.log("Exponentiation (**):", a ** b); // 1000
    
    // Increment and Decrement
    let x = 5;
    console.log("Original x:", x); // 5
    console.log("Pre-increment (++x):", ++x); // 6
    console.log("Post-increment (x++):", x++); // 6 (returns old value)
    console.log("After post-increment x:", x); // 7
    console.log("Pre-decrement (--x):", --x); // 6
    console.log("Post-decrement (x--):", x--); // 6 (returns old value)
    console.log("After post-decrement x:", x); // 5
}
// arithmeticOperatorsExample();

// 2. Assignment Operators
function assignmentOperatorsExample() {
    console.log("\n2. Assignment Operators:");
    
    let num = 10;
    console.log("Initial value:", num);
    
    num += 5; // num = num + 5
    console.log("After += 5:", num); // 15
    
    num -= 3; // num = num - 3
    console.log("After -= 3:", num); // 12
    
    num *= 2; // num = num * 2
    console.log("After *= 2:", num); // 24
    
    num /= 4; // num = num / 4
    console.log("After /= 4:", num); // 6
    
    num %= 4; // num = num % 4
    console.log("After %= 4:", num); // 2
    
    num **= 3; // num = num ** 3
    console.log("After **= 3:", num); // 8
    
    // Nullish coalescing assignment (ES2021)
    let value = null;
    value ??= "default value";
    console.log("Nullish coalescing assignment:", value); // "default value"
    
    // Logical assignment operators (ES2021)
    let flag = true;
    flag &&= false; // flag = flag && false
    console.log("Logical AND assignment:", flag); // false
    
    flag ||= true; // flag = flag || true
    console.log("Logical OR assignment:", flag); // true
}


// assignmentOperatorsExample();

// 3. Comparison Operators
function comparisonOperatorsExample() {
    console.log("\n3. Comparison Operators:");
    
    let a = 5;
    let b = "5";
    let c = 10;
    
    console.log(`a = ${a} (number), b = "${b}" (string), c = ${c}`);
    
    // Equality operators
    console.log("Equal (==):", a == b); // true (type coercion)
    console.log("Strict equal (===):", a === b); // false (no type coercion)
    console.log("Not equal (!=):", a != b); // false
    console.log("Strict not equal (!==):", a !== b); // true
    
    // Relational operators
    console.log("Greater than (>):", c > a); // true
    console.log("Less than (<):", a < c); // true
    console.log("Greater than or equal (>=):", a >= 5); // true
    console.log("Less than or equal (<=):", a <= 5); // true
    
    // Special cases
    console.log("null == undefined:", null == undefined); // true
    console.log("null === undefined:", null === undefined); // false
    console.log("NaN === NaN:", NaN === NaN); // false
    console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
}


// comparisonOperatorsExample();

// 4. Logical Operators
function logicalOperatorsExample() {
    console.log("\n4. Logical Operators:");
    
    let isTrue = true;
    let isFalse = false;
    let num = 0;
    let str = "hello";
    let emptyStr = "";
    let nullVal = null;
    
    // AND operator (&&)
    console.log("true && true:", isTrue && isTrue); // true
    console.log("true && false:", isTrue && isFalse); // false
    console.log("'hello' && 0:", str && num); // 0 (returns first falsy or last value)
    
    // OR operator (||)
    console.log("false || true:", isFalse || isTrue); // true
    console.log("false || false:", isFalse || isFalse); // false
    console.log("0 || 'hello':", num || str); // "hello" (returns first truthy or last value)
    
    // NOT operator (!)
    console.log("!true:", !isTrue); // false
    console.log("!false:", !isFalse); // true
    console.log("!0:", !num); // true
    console.log("!'hello':", !str); // false
    console.log("!!0:", !!num); // false (double negation for boolean conversion)
    
    // Nullish coalescing operator (??)
    console.log("null ?? 'default':", nullVal ?? "default"); // "default"
    console.log("0 ?? 'default':", num ?? "default"); // 0 (0 is not null/undefined)
    console.log("'' ?? 'default':", emptyStr ?? "default"); // "" (empty string is not null/undefined)
    
    // Short-circuit evaluation
    console.log("Short-circuit AND:", isFalse && console.log("This won't run"));
    console.log("Short-circuit OR:", isTrue || console.log("This won't run"));
}


// logicalOperatorsExample();

// 6. Ternary (Conditional) Operator
function ternaryOperatorExample() {
    console.log("\n6. Ternary (Conditional) Operator:");
    
    let age = 18;
    let status = age >= 18 ? "adult" : "minor";
    console.log(`Age: ${age}, Status: ${status}`);
    
    let score = 85;
    let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
    console.log(`Score: ${score}, Grade: ${grade}`);
    
    // With functions
    let num = -5;
    let result = num > 0 ? Math.sqrt(num) : "Cannot calculate square root of negative number";
    console.log(`Square root of ${num}:`, result);
    
    // Nested ternary (readable format)
    let weather = "sunny";
    let activity = weather === "sunny" 
        ? "Go to the beach" 
        : weather === "rainy" 
            ? "Stay inside" 
            : "Go for a walk";
    console.log(`Weather: ${weather}, Activity: ${activity}`);
}


// ternaryOperatorExample();

// 7. Type Operators
function typeOperatorsExample() {
    console.log("\n7. Type Operators:");
    
    let str = "hello";
    let num = 42;
    let bool = true;
    let obj = { name: "John" };
    let arr = [1, 2, 3];
    let func = function() {};
    let date = new Date();
    let regex = /pattern/;
    
    // typeof operator
    console.log("typeof 'hello':", typeof str); // "string"
    console.log("typeof 42:", typeof num); // "number"
    console.log("typeof true:", typeof bool); // "boolean"
    console.log("typeof {}:", typeof obj); // "object"
    console.log("typeof []:", typeof arr); // "object" (arrays are objects!)
    console.log("typeof function(){}:", typeof func); // "function"
    console.log("typeof null:", typeof null); // "object" (known quirk)
    console.log("typeof undefined:", typeof undefined); // "undefined"
    
    // instanceof operator
    console.log("[] instanceof Array:", arr instanceof Array); // true
    console.log("{} instanceof Object:", obj instanceof Object); // true
    console.log("new Date() instanceof Date:", date instanceof Date); // true
    console.log("/pattern/ instanceof RegExp:", regex instanceof RegExp); // true
    
    // Better array checking
    console.log("Array.isArray([]):", Array.isArray(arr)); // true
    console.log("Array.isArray({}):", Array.isArray(obj)); // false
}


// typeOperatorsExample();

// 8. String Operators
function stringOperatorsExample() {
    console.log("\n8. String Operators:");
    
    let firstName = "John";
    let lastName = "Doe";
    
    // Concatenation with +
    let fullName = firstName + " " + lastName;
    console.log("Concatenation (+):", fullName);
    
    // Template literals (ES6)
    let greeting = `Hello, ${firstName} ${lastName}!`;
    console.log("Template literal:", greeting);
    
    // Compound assignment with strings
    let message = "Hello";
    message += " World";
    console.log("String += operator:", message);
    
    // Comparison operators with strings
    console.log("'apple' < 'banana':", "apple" < "banana"); // true (lexicographical)
    console.log("'Apple' < 'apple':", "Apple" < "apple"); // true (uppercase comes first)
    
    // String methods that act like operators
    let text = "JavaScript";
    console.log("charAt(0):", text.charAt(0)); // "J"
    console.log("indexOf('Script'):", text.indexOf("Script")); // 4
    console.log("includes('Script'):", text.includes("Script")); // true
}


// stringOperatorsExample();

// 9. Spread and Rest Operators
function spreadRestOperatorsExample() {
    console.log("\n9. Spread and Rest Operators:");
    
    // Spread operator with arrays
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let combined = [...arr1, ...arr2];
    console.log("Spread arrays:", combined);
    
    // Spread operator with objects
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3, d: 4 };
    let mergedObj = { ...obj1, ...obj2 };
    console.log("Spread objects:", mergedObj);
    
    // Rest operator in function parameters
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    console.log("Rest in function:", sum(1, 2, 3, 4, 5)); // 15
    
    // Rest in destructuring
    let [first, second, ...rest] = [1, 2, 3, 4, 5];
    console.log("Rest in array destructuring:", { first, second, rest });
    
    let { name, age, ...otherProps } = { name: "John", age: 30, city: "NY", job: "Developer" };
    console.log("Rest in object destructuring:", { name, age, otherProps });
}


// spreadRestOperatorsExample();

// 10. Optional Chaining and Nullish Coalescing
function modernOperatorsExample() {
    console.log("\n10. Modern Operators (ES2020+):");
    
    let user = {
        name: "John",
        address: {
            street: "123 Main St",
            // city is missing
        }
    };
    
    // Optional chaining (?.)
    console.log("user.address.street:", user.address?.street); // "123 Main St"
    console.log("user.address.city:", user.address?.city); // undefined (no error)
    console.log("user.phone.number:", user.phone?.number); // undefined (no error)
    
    // Optional chaining with arrays
    let users = [
        { name: "Alice", contacts: ["email", "phone"] },
        { name: "Bob" } // no contacts array
    ];
    console.log("users[0].contacts[0]:", users[0].contacts?.[0]); // "email"
    console.log("users[1].contacts[0]:", users[1].contacts?.[0]); // undefined
    
    // Optional chaining with functions
    let calculator = {
        add: (a, b) => a + b
    };
    console.log("calculator.add?.(5, 3):", calculator.add?.(5, 3)); // 8
    console.log("calculator.multiply?.(5, 3):", calculator.multiply?.(5, 3)); // undefined
    
    // Nullish coalescing (??) vs OR (||)
    let config = {
        theme: "",
        timeout: 0,
        enabled: false
    };
    
    console.log("theme with ||:", config.theme || "default"); // "default"
    console.log("theme with ??:", config.theme ?? "default"); // ""
    console.log("timeout with ||:", config.timeout || 5000); // 5000
    console.log("timeout with ??:", config.timeout ?? 5000); // 0
}


// modernOperatorsExample();