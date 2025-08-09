
console.log("=== CONDITIONAL STATEMENTS EXAMPLES ===");

// 1. If-Else Statements
function ifElseExample() {
    console.log("\n1. If-Else Statements:");
    
    // Basic if-else
    let age = 20;
    if (age >= 18) {
        console.log(`Age ${age}: You are an adult`);
    } else {
        console.log(`Age ${age}: You are a minor`);
    }
    
    // If-else if-else chain
    let score = 85;
    if (score >= 90) {
        console.log(`Score ${score}: Grade A - Excellent!`);
    } else if (score >= 80) {
        console.log(`Score ${score}: Grade B - Good job!`);
    } else if (score >= 70) {
        console.log(`Score ${score}: Grade C - Average`);
    } else if (score >= 60) {
        console.log(`Score ${score}: Grade D - Below average`);
    } else {
        console.log(`Score ${score}: Grade F - Failed`);
    }
    
    // Nested if statements
    let weather = "sunny";
    let temperature = 25;
    
    if (weather === "sunny") {
        if (temperature > 20) {
            console.log("Perfect day for outdoor activities!");
        } else {
            console.log("Sunny but a bit cold, wear a jacket");
        }
    } else if (weather === "rainy") {
        console.log("Stay inside or bring an umbrella");
    } else {
        console.log("Check the weather forecast");
    }
    
    // Complex conditions with logical operators
    let user = {
        age: 25,
        hasLicense: true,
        hasInsurance: true
    };
    
    if (user.age >= 18 && user.hasLicense && user.hasInsurance) {
        console.log("User can drive legally");
    } else if (user.age < 18) {
        console.log("User is too young to drive");
    } else if (!user.hasLicense) {
        console.log("User needs a driver's license");
    } else if (!user.hasInsurance) {
        console.log("User needs car insurance");
    } else {
        console.log("Unknown driving eligibility status");
    }
    
    // Truthy/Falsy conditions
    let username = "";
    let email = "user@example.com";
    let phoneNumber = null;
    
    if (username) {
        console.log("Username provided:", username);
    } else {
        console.log("No username provided");
    }
    
    if (email) {
        console.log("Email provided:", email);
    }
    
    if (!phoneNumber) {
        console.log("Phone number is missing");
    }
}

// Call the if-else example
ifElseExample();

// 2. Switch-Case Statements
function switchCaseExample() {
    console.log("\n2. Switch-Case Statements:");
    
    // Basic switch statement
    let dayOfWeek = 3;
    let dayName;
    
    switch (dayOfWeek) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day";
    }
    
    console.log(`Day ${dayOfWeek} is: ${dayName}`);
    
    // Switch with multiple cases (fall-through)
    let month = 4;
    let season;
    
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Fall";
            break;
        default:
            season = "Invalid month";
    }
    
    console.log(`Month ${month} is in: ${season}`);
    
    // Switch with string values
    let userRole = "admin";
    let permissions;
    
    switch (userRole.toLowerCase()) {
        case "admin":
            permissions = ["read", "write", "delete", "manage users"];
            break;
        case "editor":
            permissions = ["read", "write"];
            break;
        case "viewer":
            permissions = ["read"];
            break;
        case "guest":
            permissions = [];
            break;
        default:
            permissions = ["unknown role"];
    }
    
    console.log(`Role '${userRole}' has permissions:`, permissions);
    
    // Switch without break (intentional fall-through)
    let grade = "B";
    console.log(`Grade ${grade} feedback:`);
    
    switch (grade) {
        case "A":
            console.log("- Outstanding performance!");
        case "B":
            console.log("- Good job, keep it up!");
        case "C":
            console.log("- You passed the course");
            break;
        case "D":
            console.log("- Below average, need improvement");
            break;
        case "F":
            console.log("- Failed, please retake the course");
            break;
        default:
            console.log("- Invalid grade");
    }
}

// Call the switch-case example
switchCaseExample();

