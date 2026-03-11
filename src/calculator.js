#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        <a> <b>           – Addition: returns the sum of a and b
 *   subtract   <a> <b>           – Subtraction: returns the difference of a minus b
 *   multiply   <a> <b>           – Multiplication: returns the product of a and b
 *   divide     <a> <b>           – Division: returns a divided by b (throws on divide-by-zero)
 *   modulo     <a> <b>           – Modulo: returns the remainder of a divided by b (throws on divide-by-zero)
 *   power      <base> <exponent> – Exponentiation: returns base raised to the exponent
 *   squareRoot <n>               – Square root: returns the square root of n (throws for negative n)
 *
 * Usage:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 8
 *   node calculator.js squareRoot 144
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

// Modulo: returns the remainder of a divided by b; throws an error if dividing by zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: returns the square root of n; throws an error for negative input
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

// CLI entry point
function main() {
  const [, , operation, rawA, rawB] = process.argv;

  const validOps = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'power', 'squareRoot'];

  if (!operation || !validOps.includes(operation)) {
    console.error(`Usage: node calculator.js <${validOps.join('|')}> <a> [b]`);
    process.exit(1);
  }

  // squareRoot only needs one argument
  const isSingleArg = operation === 'squareRoot';
  const a = parseFloat(rawA);
  const b = isSingleArg ? undefined : parseFloat(rawB);

  if (isNaN(a) || (!isSingleArg && isNaN(b))) {
    console.error(isSingleArg
      ? 'Error: Argument must be a valid number'
      : 'Error: Both arguments must be valid numbers');
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
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'power':
        result = power(a, b);
        break;
      case 'squareRoot':
        result = squareRoot(a);
        break;
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

// Only run CLI entry point when executed directly, not when imported as a module
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
