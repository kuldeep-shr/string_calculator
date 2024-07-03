import { stringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("should return the number itself for a single number string", () => {
    expect(stringCalculator("1")).toBe(1);
    expect(stringCalculator("42")).toBe(42);
  });

  test("should return the sum of two numbers", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  test("should handle new lines as delimiters", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  test("should handle custom delimiters", () => {
    expect(stringCalculator("//[*][%]\n1*$$$$$2%3")).toBe(6);
  });
  test("should throw an error for multiple negative numbers", () => {
    expect(() => stringCalculator("-1,-2,3")).toThrow(
      new Error("Negative numbers are not allowed: -1, -2")
    );
  });
});
