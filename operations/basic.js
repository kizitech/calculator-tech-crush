// This file has the basic calculator operations

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    return a / b;
}

// Export for the functions
module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};