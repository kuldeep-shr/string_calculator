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
});
