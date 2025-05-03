// This file has the advanced calculator operations

// Function to calculate power
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to calculate square root
function squareRoot(number) {
    return Math.sqrt(number);
}

// Export for the functions 
module.exports = {
    power: power,
    squareRoot: squareRoot
};