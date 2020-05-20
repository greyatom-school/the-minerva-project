// Imports
const calculator = require("./calculator.js");

// Gets operations & readline interface
const operations = calculator.getOperations();
const rl = calculator.getReadLineInterface()

// Prints operations & starts calculator
calculator.listOperations(operations);
calculator.start(rl, operations);
