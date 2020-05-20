// Imports
const readline = require("readline");

// Gets all supported operations
function getOperations() {
	return {
		"1": "Add",
		"2": "Subract",
		"3": "Multiply",
		"4": "Divide",
		"5": "Exit"
	}
}

// Lists all supported operations
function listOperations(operations) {
	console.log("--------------");
	for (key in operations) {
		value = operations[key];
		console.log(key + ". " + value);
	}
	console.log("--------------");
}

// Gets readline interface
function getReadLineInterface() {
	return readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
}

// Starts calculator interface
function start(rl, operations) {
	// Accepts operation
	rl.question("\nWhat would you like to do? ", function(id) {
		// Validates input
		const err = validateOperator(operations, id)
		if (err) {
			console.log("\n" + err + "\n\n" + "--------------");
			return start(rl, operations);
		}

		// Exits in case of exit command
		if (id == "5") {
			console.log("\nBye Bye!");
			console.log("\n--------------");
			process.exit(1);
		}

		// Prints operation
		console.log("\nOperation to perform:", operations[id])

		// Accepts first number
		rl.question("Insert first number: ", function(inputA) {
			// Accepts second number
			rl.question("Insert second number: ", function(inputB) {
				// Validates input
				const err = validateNumbers(inputA, inputB)
				if (err) {
					console.log("\n" + err + "\n\n" + "--------------");
					return start(rl, operations);
				}

				// Converts input
				a = parseInt(inputA)
				b = parseInt(inputB)

				// Performs calculation
				switch(id) {
					case "1":
						result = add(a, b)
						break;
					case "2":
						result = subract(a, b)
						break;
					case "3":
						result = multiply(a, b)
						break;
					case "4":
						result = divide(a, b)
						break;
				}

				// Prints result
				console.log("\nResult is", result);
				console.log("\n--------------");

				// Starts calculator again
				return start(rl, operations);
			});
		});
	});
}

// Validates operator
function validateOperator(operations, id) {
	if (!Object.keys(operations).includes(id)) {
		return "Wrong input (operation id mismatch). Please try again!";
	}

	return null
}

// Validates numbers
function validateNumbers(inputA, inputB) {
	if (isNaN(parseInt(inputA)) || isNaN(parseInt(inputB))) {
		return "Wrong input (not number). Please try again!";
	}

	if (inputA.length > 3 || inputB.length > 3) {
		return "Wrong input (number length exceeded). Please try again!";
	}

	return null;
}

// Adds two given numbers
function add(a, b) {
	return a + b;
}

// Subracts two given numbers
function subract(a, b) {
	return a - b;
}

// Multiplies two given numbers
function multiply(a, b) {
	return a * b;
}

// Divides two given numbers
function divide(a, b) {
	return a / b;
}

// Exports
module.exports = { getOperations, listOperations, getReadLineInterface, start };
