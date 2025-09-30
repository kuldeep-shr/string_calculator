export function stringCalculator(input: string): number {
  if (input === "") {
    return 0;
  }

  // Split on comma and sum all parts
  const parts = input.split(",");
  const nums = parts.map((p) => {
    const n = Number(p);
    if (Number.isNaN(n)) throw new Error("Invalid number");
    return n;
  });

  return nums.reduce((s, x) => s + x, 0);
}
