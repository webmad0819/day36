let faker = require("faker");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let results = Array(15)
  .fill()
  .map(x => ({
    name: faker.fake("{{name.firstName}}"),
    age: randomInt(20, 40),
    profession: "student"
  }))
  .sort((a, b) => {
    if (a.age > b.age) return -1;
    return 1;
  });

console.log(results);
