const readline = require('readline');
const chalk = require('chalk');

// Custom modules
const basicOperations = require('./operations/basic.js');
const advancedOperations = require('./operations/advanced.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Show the menu
function showMenu() {
    console.log('');
    console.log(chalk.blue.bold('===== My Calculator App ====='));
    console.log(chalk.cyan('1.') + ' Add two numbers');
    console.log(chalk.cyan('2.') + ' Subtract two numbers');
    console.log(chalk.cyan('3.') + ' Multiply two numbers');
    console.log(chalk.cyan('4.') + ' Divide two numbers');
    console.log(chalk.cyan('5.') + ' Calculate power');
    console.log(chalk.cyan('6.') + ' Calculate square root');
    console.log(chalk.red('7.') + chalk.bold(' Exit program'));
    console.log('');

    rl.question(chalk.yellow('What do you want to do? (1-7): '), function (choice) {
        processChoice(choice);
    });
}

function processChoice(choice) {
    const choiceNum = parseInt(choice);

    if (choiceNum === 1) {
        console.log(chalk.green('You selected Addition'));
        getInputNumbers(2, function (numbers) {
            const result = basicOperations.add(numbers[0], numbers[1]);
            console.log(chalk.green(`The result of ${numbers[0]} + ${numbers[1]} = ${result}`));
            showMenu();
        });
    } else if (choiceNum === 2) {
        console.log(chalk.green('You selected Subtraction'));
        getInputNumbers(2, function (numbers) {
            const result = basicOperations.subtract(numbers[0], numbers[1]);
            console.log(chalk.green(`The result of ${numbers[0]} - ${numbers[1]} = ${result}`));
            showMenu();
        });
    } else if (choiceNum === 3) {
        console.log(chalk.green('You selected Multiplication'));
        getInputNumbers(2, function (numbers) {
            const result = basicOperations.multiply(numbers[0], numbers[1]);
            console.log(chalk.green(`The result of ${numbers[0]} * ${numbers[1]} = ${result}`));
            showMenu();
        });
    } else if (choiceNum === 4) {
        console.log(chalk.green('You selected Division'));
        getInputNumbers(2, function (numbers) {
            if (numbers[1] === 0) {
                console.log(chalk.red('Error: Cannot divide by zero!'));
            } else {
                const result = basicOperations.divide(numbers[0], numbers[1]);
                console.log(chalk.green(`The result of ${numbers[0]} / ${numbers[1]} = ${result}`));
            }
            showMenu();
        });
    } else if (choiceNum === 5) {
        console.log(chalk.green('You selected Power'));
        getInputNumbers(2, function (numbers) {
            const result = advancedOperations.power(numbers[0], numbers[1]);
            console.log(chalk.green(`The result of ${numbers[0]} ^ ${numbers[1]} = ${result}`));
            showMenu();
        });
    } else if (choiceNum === 6) {
        console.log(chalk.green('You selected Square Root'));
        getInputNumbers(1, function (numbers) {
            if (numbers[0] < 0) {
                console.log(chalk.red('Error: Cannot find square root of negative number!'));
            } else {
                const result = advancedOperations.squareRoot(numbers[0]);
                console.log(chalk.green(`The square root of ${numbers[0]} = ${result}`));
            }
            showMenu();
        });
    } else if (choiceNum === 7) {
        console.log(chalk.magenta('Thanks for using my calculator! Goodbye!'));
        rl.close();
    } else {
        console.log(chalk.red('That\'s not a valid choice. Please try again.'));
        showMenu();
    }
}

function getInputNumbers(count, callback) {
    const numbers = [];
    let currentIndex = 0;

    function askForNumber() {
        rl.question(chalk.yellow(`Enter number ${currentIndex + 1}: `), function (input) {
            const num = parseFloat(input);
            if (isNaN(num)) {
                console.log(chalk.red('That\'s not a valid number. Please try again.'));
                askForNumber();
            } else {
                numbers.push(num);
                currentIndex++;
                if (currentIndex < count) {
                    askForNumber();
                } else {
                    callback(numbers);
                }
            }
        });
    }

    askForNumber();
}

// Start
console.log(chalk.bold.blueBright('Welcome to my Node.js Calculator!'));
console.log(chalk.gray('This program uses different types of modules:'));
console.log(chalk.gray('- Built-in module: readline (for getting user input)'));
console.log(chalk.gray('- Third-party module: chalk (for colors)'));
console.log(chalk.gray('- Custom modules: operations/basic.js and operations/advanced.js'));
showMenu();
