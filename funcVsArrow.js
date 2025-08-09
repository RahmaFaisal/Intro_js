console.log("=== FUNCTIONS VS ARROW FUNCTIONS ===");

// 1. Syntax Differences
function syntaxDifferencesExample() {
    console.log("\n1. Syntax Differences:");

    // Regular function declaration
    function regularFunction(name) {
        return `Hello, ${name}!`;
    }

    // Regular function expression
    const regularFuncExpression = function (name) {
        return `Hello, ${name}!`;
    };

    // Arrow function (full syntax)
    const arrowFunction = (name) => {
        return `Hello, ${name}!`;
    };

    // Arrow function (concise syntax)
    const arrowFunctionConcise = (name) => `Hello, ${name}!`;

    // Arrow function with multiple parameters
    const arrowMultiParam = (a, b) => a + b;

    // Arrow function with no parameters
    const arrowNoParam = () => "No parameters!";

    console.log("Regular function:", regularFunction("Alice"));
    console.log("Arrow function:", arrowFunction("Bob"));
    console.log("Arrow concise:", arrowFunctionConcise("Charlie"));
    console.log("Arrow multi-param:", arrowMultiParam(5, 3));
    console.log("Arrow no param:", arrowNoParam());
}


// syntaxDifferencesExample();

// 2. 'this' Binding Differences
function thisBindingExample() {
    console.log("\n2. 'this' Binding Differences:");

    const person = {
        name: "John",
        age: 30,

        // Regular method - 'this' refers to the object
        regularMethod: function () {
            console.log("Regular method - this.name:", this.name);

            // Nested regular function - 'this' is undefined (strict mode) or global object
            function nestedRegular() {
                console.log("Nested regular - this:", this); // undefined or global
            }
            nestedRegular();

            // Arrow function inside method - inherits 'this' from parent scope
            const nestedArrow = () => {
                console.log("Nested arrow - this.name:", this.name); // "John"
            };
            nestedArrow();
        },

        // Arrow method - 'this' refers to global object, not the person object
        arrowMethod: () => {
            console.log("Arrow method - this:", this); // global object or undefined
            console.log("Arrow method - this.name:", this.name); // undefined
        },
    };

    person.regularMethod();
    person.arrowMethod();

    // Call and apply differences
    const anotherPerson = { name: "Jane", age: 25 };

    console.log("\nUsing call() and apply():");
    person.regularMethod.call(anotherPerson); // 'this' changes to anotherPerson
    person.arrowMethod.call(anotherPerson); // 'this' doesn't change
}


// thisBindingExample();


// 4. Arguments Object
function argumentsObjectExample() {
    console.log("\n4. Arguments Object:");

    // Regular function has access to 'arguments' object
    function regularWithArguments() {
        console.log("Regular function arguments:", arguments);
        console.log("Arguments length:", arguments.length);
        console.log("First argument:", arguments[0]);
    }

    // Arrow function does NOT have 'arguments' object
    const arrowWithoutArguments = () => {
        try {
            console.log("Arrow function arguments:", arguments);
        } catch (error) {
            console.log("Arrow function error:", error.message);
        }
    };

    // Arrow function using rest parameters instead
    const arrowWithRest = (...args) => {
        console.log("Arrow function with rest:", args);
        console.log("Rest length:", args.length);
    };

    regularWithArguments(1, 2, 3, "hello");
    arrowWithoutArguments(1, 2, 3, "hello");
    arrowWithRest(1, 2, 3, "hello");
}


// argumentsObjectExample();

// 5. Constructor Functions
function constructorExample() {
    console.log("\n5. Constructor Functions:");

    // Regular function can be used as constructor
    function RegularConstructor(name) {
        this.name = name;
        this.greet = function () {
            return `Hello, I'm ${this.name}`;
        };
    }

    // Arrow function CANNOT be used as constructor
    const ArrowConstructor = (name) => {
        this.name = name;
    };

    const person1 = new RegularConstructor("Alice");
    console.log("Regular constructor:", person1.greet());

    try {
        const person2 = new ArrowConstructor("Bob");
    } catch (error) {
        console.log("Arrow constructor error:", error.message);
    }
}

// constructorExample();


// 6. Method Definitions in Classes
function classMethodsExample() {
    console.log("\n6. Methods in Classes:");

    class MyClass {
        constructor(name) {
            this.name = name;
        }

        // Regular method - 'this' is bound correctly
        regularMethod() {
            return `Regular method: ${this.name}`;
        }

        // Arrow method as property - 'this' is lexically bound
        arrowMethod = () => {
            return `Arrow method: ${this.name}`;
        };
    }

    const obj = new MyClass("Test Object");
    console.log(obj.regularMethod());
    console.log(obj.arrowMethod());

    // When methods are extracted (common in event handlers)
    const extractedRegular = obj.regularMethod;
    const extractedArrow = obj.arrowMethod;

    try {
        console.log("Extracted regular:", extractedRegular()); // 'this' is lost
    } catch (error) {
        console.log("Extracted regular error:", error.message);
    }

    console.log("Extracted arrow:", extractedArrow()); // 'this' is preserved
}

// Call the class methods example
// classMethodsExample();

// 7. Performance and Use Cases
function performanceAndUseCasesExample() {
    console.log("\n7. Performance and Use Cases:");

    const numbers = [1, 2, 3, 4, 5];

    // Array methods with arrow functions (common use case)
    const doubled = numbers.map((n) => n * 2);

    console.log("Doubled:", doubled);


    // Event handlers simulation
    const button = {
        text: "Click me!",

        // Regular function - would lose 'this' context in real DOM events
        handleClickRegular: function () {
            console.log("Regular handler - button text:", this.text);
        },

        // Arrow function - preserves 'this' context
        handleClickArrow: () => {
            console.log("Arrow handler - this:", this); // Not the button object
        },

        // Solution: arrow function inside method
        setupHandler: function () {
            const arrowInside = () => {
                console.log("Arrow inside method - button text:", this.text);
            };
            arrowInside();
        },
    };

    button.handleClickRegular();
    button.handleClickArrow();
    button.setupHandler();
}

// Call the performance and use cases example
// performanceAndUseCasesExample();

// 8. When to Use Which
function whenToUseExample() {
    console.log("\n8. When to Use Which:");

    console.log("Use REGULAR FUNCTIONS when:");
    console.log("- You need 'this' to be dynamically bound");
    console.log("- Creating constructor functions");
    console.log("- Defining object methods");
    console.log("- You need the 'arguments' object");
    console.log("- Function hoisting is required");

    console.log("\nUse ARROW FUNCTIONS when:");
    console.log("- You want to preserve 'this' from enclosing scope");
    console.log("- Writing short, simple functions");
    console.log("- Using array methods (map, filter, etc.)");
    console.log("- Event handlers where you want to keep outer 'this'");
    console.log("- Functional programming patterns");
}

// Call the when to use example
// whenToUseExample();
