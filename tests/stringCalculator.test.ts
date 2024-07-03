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
});
