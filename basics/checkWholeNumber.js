const checkIsAWholeNumber = (number) => {
  const wholeNumber = Math.floor(number);
  const check = wholeNumber === number;
  return check;
};

// TEST
const one = checkIsAWholeNumber(4)
const two = checkIsAWholeNumber(1048)
const three = checkIsAWholeNumber(1.123)
const four = checkIsAWholeNumber(10.48)

const test = {
  true: one && two,
  false: three && four
}

if (test.true === true && test.false == false) {
  console.log('test passed');
} else {
  console.log('test failed');
}
// TEST

const main = () => {
  const result = checkIsAWholeNumber(19);
  console.log(result);
};
main();
