// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
const accessingProperties = (obj) => {
  return obj.country;
};

// TEST
const test = (obj, target) => {
  if (obj.country === target) {
    return `test ${target} passed`;
  }
  return `test ${target} failed`;
};

const one = test({ continent: "Asia", country: "Japan" }, "Japan");
const two = test({ country: "Sweden", continent: "Europe" }, "Sweden");
console.log({ one, two });
// TEST

const main = () => {
  const result = accessingProperties({
    name: "Laureano",
    country: "Argentina",
  });
  console.log(result);
};
main();
