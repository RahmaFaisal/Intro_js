console.log("=== SCOPE EXAMPLES ===");


// Global vs Local Scope
var globalVar = "I'm global";

function localScopeExample() {
    console.log("\n2. Global vs Local Scope:");
    var localVar = "I'm local";
    
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
    
    function nestedFunction() {
        console.log(globalVar); // Still accessible
        console.log(localVar);  // Still accessible (lexical scoping)
    }
    
    nestedFunction();
}


// localScopeExample();




//  Function Scope vs Block Scope
function scopeExample() {
    console.log("\n1. Function vs Block Scope:");
    
    if (true) {
        var functionScoped = "I'm function scoped";
        let blockScoped = "I'm block scoped";
        const alsoBlockScoped = "I'm also block scoped";
        console.log(blockScoped); // Error - let is block scoped
        console.log(alsoBlockScoped); // Error - const is block scoped
    }
    
    console.log(functionScoped); // Works - var is function scoped
    console.log(blockScoped); // Error - let is block scoped
    console.log(alsoBlockScoped); // Error - const is block scoped
}



// scopeExample();


console.log("\n=== HOISTING EXAMPLES ===");

// 3. Variable Hoisting
function hoistingExample() {
    console.log("\n3. Variable Hoisting:");
    
    console.log("x before declaration:", x); // undefined (not error)
    var x = 5;
    console.log("x after declaration:", x); // 5
    
    // This is what actually happens due to hoisting:
    // var x; // hoisted to top
    // console.log(x); // undefined
    // x = 5;
}
// hoistingExample();

// 4. Function Hoisting
function functionHoistingExample() {
    console.log("\n4. Function Hoisting:");
    
    // Function declarations are fully hoisted
    console.log(hoistedFunction()); // Works!
    
    function hoistedFunction() {
        return "I was called before I was declared!";
    }
    
    // Function expressions are NOT hoisted
    // console.log(notHoisted()); // Error!
    var notHoisted = function() {
        return "I'm not hoisted";
    };
}

// functionHoistingExample();

// 5. Let and Const Hoisting (Temporal Dead Zone)
function temporalDeadZoneExample() {
    console.log("\n5. Temporal Dead Zone:");
    
    // console.log(letVar); // ReferenceError: Cannot access before initialization
    // console.log(constVar); // ReferenceError: Cannot access before initialization
    
    let letVar = "I'm let";
    const constVar = "I'm const";
    
    console.log(letVar);
    console.log(constVar);
}


// temporalDeadZoneExample();

console.log("\n=== CLOSURE EXAMPLES ===");

// 6. Basic Closure
function basicClosureExample() {
    console.log("\n6. Basic Closure:");
    
    function outerFunction(x) {
        // Inner function has access to outer function's variables
        function innerFunction(y) {
            return x + y; // x is from outer scope
        }
        return innerFunction;
    }
    
    const addFive = outerFunction(5);
    console.log(addFive(3)); // 8 (5 + 3)
}

// basicClosureExample();


