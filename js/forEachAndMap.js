let items = [10, 20, 30, 40, 50];
// forEach returns undefined always
const testing = items.forEach((item, index) => {
  items[index] = item + 10;
});

const mapper = items.map((item) => {
  return (item += 2);
});

console.log("forEach =>", items);
console.log("map =>", mapper);
