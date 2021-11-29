const evenNumber = (number) => {
  const isEven = number % 2 == 0
  return isEven
}

// TEST
const testEven = () => {
  let testObj = {
    one: evenNumber(10),
    two: evenNumber(-4),
    three: evenNumber(5),
    four: evenNumber(-111)
  }
  
  let evenTrue = testObj.one && testObj.two
  let evenFalse = testObj.three && testObj.four

  if (evenTrue === true && evenFalse === false) {
    return `Test Passed`
  } else {
    return `Test Failed`
  }
}
// TEST

const main = () => {
  console.log(evenNumber(20));
  console.log(testEven());
}
main()