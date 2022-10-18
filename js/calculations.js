function addition(a, b) {
  let sum = 0;
  sum = a + b;
  return sum;
}
function sub(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

document.write(`<h1>Add: ${addition(11, 23)}</h1>
<h1>Sub: ${sub(10, 5)}</h1>
<h1>Sub: ${multiply(10, 2)}</h1>
<h1>Sub: ${divide(10, 2)}</h1>`);

console.log(1 > 2 > 5 >= (3 > 2 > 1));
console.log(1 + 2 != 4);
console.log(123 === "123");
console.log(1 > 2 && 3);
console.log(1 > 2 || 3);
