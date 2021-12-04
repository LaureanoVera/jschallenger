const stringContainsAnotherString = (a, b) => {
  if (a.includes(b)) {
    return b + a
  }
  return a + b
}

// TEST
const test = (a,b,c) => {
  const result = stringContainsAnotherString(a, b)
  return (result === c)
    ? `test ${c} passed`
    : `test ${c} failed`
}
const one = test('lips', 's', 'slips')
const two = test('cheese', 'cake', 'cheesecake')
const three = test('Java', 'script', 'Javascript')

console.log({one,two,three});
// TEST

const main = () => {
  const result = stringContainsAnotherString('Lauri', ' Vera')
  console.log(result);
}
main()