const clearUpTheChaos = (one, two) => {
  let firstPart = one.replace("%", "")

  let secondText = two.replace("%", "")
  let secondPart = "";
  secondText.split("").map((el) => {
    secondPart = el + secondPart;
  });

  return firstPart + secondPart;
};

// TEST
const test = (a,b,c) => {
  const result = clearUpTheChaos(a,b);
  
};
test("java", "tpi%rcs",'Javascript');
// TEST


const main = () => {
  let test = "lau%reano".replace("%", "");
  console.log(test);
};
main();

const str = 'flexiple';
const str2 = str.charAt(0);
console.log(str2);