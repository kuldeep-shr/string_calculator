const escapeRegex = (s: string): string => {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export function stringCalculator(input: string): number {
  if (input === "") {
    return 0;
  }

  let delimiters = [",", "\n"];
  let numbersPart = input;

  if (input.startsWith("//")) {
    const newlineIndex = input.indexOf("\n");
    if (newlineIndex === -1)
      throw new Error("Invalid input: missing newline after delimiter");
    const delimiterDef = input.substring(2, newlineIndex);
    numbersPart = input.substring(newlineIndex + 1);
    delimiters.push(delimiterDef);
  }

  const re = new RegExp(delimiters.map(escapeRegex).join("|"));
  const tokens = numbersPart.split(re).filter((t) => t !== "");
  const nums = tokens.map((t) => {
    console.log("nums", t);
    if (t.trim() === "") throw new Error("Invalid number");
    const n = Number(t);
    if (Number.isNaN(n)) throw new Error("Invalid number");
    return n;
  });

  // Negative numbers: throw with list
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((s, x) => s + x, 0);
}
