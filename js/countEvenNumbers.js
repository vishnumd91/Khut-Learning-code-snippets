// Count from 1 to n only even numbers

const evenNumberCounter = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) count += 1;
  }
  return count;
};

const countEvenNumbers = evenNumberCounter(2);
console.log(countEvenNumbers);
