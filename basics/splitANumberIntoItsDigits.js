const splitANumberIntoItsDigits = (number) => {
  const toArray = String(number).split("");
  let numberArray = [];
  toArray.map((el) => numberArray.push(Number(el)));
  return numberArray;
};

// TEST
const test = (num, arr) => {
  if (num === arr) {
    return `test ${num} passed`;
  }
  return `test ${num} passed`;
};

const one = test(10, [1, 0]);
const two = test(931, [9, 3, 1]);
const three = test(193278, [1, 9, 3, 2, 7, 8]);

console.log({ one, two, three });
// TEST

const main = () => {
  const result = splitANumberIntoItsDigits(1712);
  console.log(result);
};

main();
