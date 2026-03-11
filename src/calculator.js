#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      <a> <b>  – Addition: returns the sum of a and b
 *   subtract <a> <b>  – Subtraction: returns the difference of a minus b
 *   multiply <a> <b>  – Multiplication: returns the product of a and b
 *   divide   <a> <b>  – Division: returns a divided by b (throws on divide-by-zero)
 *
 * Usage:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 */

// Addition: returns the sum of two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference between two numbers
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of two numbers; throws an error if dividing by zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

// CLI entry point
function main() {
  const [, , operation, rawA, rawB] = process.argv;

  const validOps = ['add', 'subtract', 'multiply', 'divide'];

  if (!operation || !validOps.includes(operation)) {
    console.error(`Usage: node calculator.js <${validOps.join('|')}> <a> <b>`);
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  let result;
  try {
    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();

module.exports = { add, subtract, multiply, divide };
