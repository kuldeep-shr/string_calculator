export function stringCalculator(input: string): number {
  if (input === "") {
    return 0;
  }

  const numbers = input.split(/[\n,]/).map(Number);
  console.log(
    "numbers sum is...",
    numbers.reduce((sum, num) => sum + num, 0)
  );
  return numbers.reduce((sum, num) => sum + num, 0);
}
