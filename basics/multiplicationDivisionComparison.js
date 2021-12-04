// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
const comparisonOperators = (a, b) => {
  if (a < b) {
    return a / b;
  }
  return a * b;
};

// TEST
const test = (a, b, c) => {
  const result = comparisonOperators(a, b);
  return result === c;
};

const testResult = {
  one: test(10, 100, 0.1),
  two: test(90, 45, 4050),
  three: test(8, 20, 0.4),
  four: test(2, 0.5, 1),
};

const { one, two, three, four } = testResult;

if (one,two,three,four) {
  console.log('test passed!');
}

// TEST

const main = () => {
  const result = comparisonOperators(10, 80);
  console.log(result);
};
main();
