// // A calculator object that contains functions for the basic operations:
// add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.
import calculator from "./calculator";

test("Addition function test", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(-1, -5)).toBe(-6);
  expect(calculator.add("1", "2")).toBe(3);
  expect(() => calculator.add(1)).toThrow();
  expect(() => calculator.add("a", "b")).toThrow();
});

test("Subtraction test", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.subtract("2", 1)).toBe(1);
  expect(calculator.subtract("3", "1")).toBe(2);
  expect(calculator.subtract("-.216", "0.5")).toBe(-0.716);
  expect(() => calculator.subtract(1)).toThrow();
  expect(() => calculator.subtract("-a", "2")).toThrow();
});

test("Division test", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
  expect(calculator.divide(1, 3)).toBeCloseTo(0.333333);
  expect(calculator.divide("1", "3")).toBeCloseTo(0.333333);
  expect(calculator.divide(15.6, 3)).toBe(5.2);
  expect(() => calculator.divide(4, 0)).toThrow("Cannot divide by 0");
  expect(() => calculator.divide(1)).toThrow();
  expect(() => calculator.divide("a", "3")).toThrow();
});

test("Multiplication test", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.multiply(5.2, 3)).toBe(15.6);
  expect(calculator.multiply(-3.2, 9.1)).toBe(-29.12);
  expect(calculator.multiply("2", "3")).toBe(6);
  expect(() => calculator.multiply(1)).toThrow();
  expect(() => calculator.multiply("a", "3")).toThrow();
});
