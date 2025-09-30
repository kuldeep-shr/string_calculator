export function stringCalculator(input: string): number {
  if (input === "") {
    return 0;
  }

  // Split on comma and sum all parts
  const tokens = input.split(/,|\n/);
  const nums = tokens.map((t) => {
    console.log("nums", t);
    if (t.trim() === "") throw new Error("Invalid number");
    const n = Number(t);
    if (Number.isNaN(n)) throw new Error("Invalid number");
    return n;
  });
  return nums.reduce((s, x) => s + x, 0);
}
