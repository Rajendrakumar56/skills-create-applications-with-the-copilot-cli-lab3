/**
 * Unit tests for calculator.js
 *
 * Covers all seven arithmetic operations:
 *   - Addition
 *   - Subtraction
 *   - Multiplication
 *   - Division (including division-by-zero edge case)
 *   - Modulo (including division-by-zero edge case)
 *   - Power (exponentiation)
 *   - Square root (including negative number edge case)
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // From image: 2 + 3
  test('2 + 3 equals 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive integers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(15, -5)).toBe(10);
  });

  test('adds floating-point numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // From image: 10 - 4
  test('10 - 4 equals 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts positive integers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('result is negative when subtrahend is larger', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts floating-point numbers', () => {
    expect(subtract(5.5, 2.5)).toBeCloseTo(3.0);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe('multiply', () => {
  // From image: 45 * 2
  test('45 * 2 equals 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies positive integers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies by zero returns zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies negative numbers yields positive result', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies positive and negative numbers', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies floating-point numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });

  test('multiplies by one returns same number', () => {
    expect(multiply(8, 1)).toBe(8);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  // From image: 20 / 5
  test('20 / 5 equals 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides positive integers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('returns a decimal for non-even division', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides negative numbers', () => {
    expect(divide(-12, -4)).toBe(3);
  });

  test('divides positive by negative yields negative result', () => {
    expect(divide(15, -3)).toBe(-5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing negative number by zero', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe('modulo', () => {
  // From image: 5 % 2
  test('5 % 2 equals 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('returns correct remainder for larger divisor', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('modulo with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo of floating-point numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test('throws an error when divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Power ───────────────────────────────────────────────────────────────────
describe('power', () => {
  // From image: 2 ^ 3
  test('2 ^ 3 equals 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('any number to the power of 0 equals 1', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('any number to the power of 1 equals itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('0 to the power of any positive number equals 0', () => {
    expect(power(0, 5)).toBe(0);
  });

  test('handles negative exponents (returns fraction)', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('handles fractional exponents (square root equivalent)', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });

  test('handles large exponents', () => {
    expect(power(2, 10)).toBe(1024);
  });
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // From image: √16
  test('square root of 16 equals 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 144 equals 12', () => {
    expect(squareRoot(144)).toBe(12);
  });

  test('square root of 0 equals 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 equals 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a non-perfect square returns a decimal', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  test('square root of a large number', () => {
    expect(squareRoot(10000)).toBe(100);
  });

  // Edge case: square root of a negative number
  test('throws an error for negative input', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of a negative number');
  });

  test('throws an error for any negative number', () => {
    expect(() => squareRoot(-0.01)).toThrow('Cannot take square root of a negative number');
  });
});
