const percentageOfANumber = (number, percentage) => {
  return Number((number * (percentage/100)).toFixed(2))
}

// TEST
const one = percentageOfANumber(100, 50)
one === 50
  ? console.log('test one passed')
  : console.error('test one error');

const two = percentageOfANumber(777, 2)
two === 15.54
  ? console.log('test two passed')
  : console.error('test two error');

const three = percentageOfANumber(500, 99)
three === 495
  ? console.log('test three passed')
  : console.error('test three error');
// TEST

const main = () => {
  const result = percentageOfANumber(100, 75)
  console.log(result);
}
main()