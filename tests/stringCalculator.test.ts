import { stringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("single number returns that number", () => {
    expect(stringCalculator("1")).toBe(1);
    expect(stringCalculator("42")).toBe(42);
  });

  test("two numbers, comma-separated, returns sum", () => {
    expect(stringCalculator("1,5")).toBe(6);
    expect(stringCalculator("10,20")).toBe(30);
  });

  test("any amount of numbers", () => {
    expect(stringCalculator("1,2,3,4,5")).toBe(15);
    expect(stringCalculator("100,200,300")).toBe(600);
  });

  test("allow newlines between numbers", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
    expect(stringCalculator("4\n5\n6")).toBe(15);
  });

  test("support custom single character delimiter", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
    expect(stringCalculator("//#\n2#3#4")).toBe(9);
  });

  test("negative numbers throw with all negatives listed", () => {
    expect(() => stringCalculator("-1")).toThrowError(
      "negative numbers not allowed -1"
    );
    expect(() => stringCalculator("2,-4,3,-5")).toThrowError(
      "negative numbers not allowed -4,-5"
    );
  });
});
