export function stringCalculator(input: string): number | void {
  if (input === "") {
    return 0;
  }

  // single number -> parse and return
  // (this will also be updated later to handle lists)
  const n = Number(input);
  if (Number.isNaN(n)) throw new Error("Invalid number");
  return n;
}
