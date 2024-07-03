export function stringCalculator(input: string): number {
  if (input === "") {
    return 0;
  }

  // check if the input is a single number string
  if (/^\d+$/.test(input)) {
    return parseInt(input);
  }

  // remove all non-digit characters
  let sanitizedInput = input.replace(/[^\d]/g, "");

  let numbers: number[] = [];

  // converting into array of numbers
  for (let i = 0; i < sanitizedInput.length; i++) {
    numbers.push(parseInt(sanitizedInput[i]));
  }

  console.log(
    "the sum of numbers is ....",
    numbers,
    numbers.reduce((sum, num) => sum + num, 0)
  );
  return numbers.reduce((sum, num) => sum + num, 0);
}
