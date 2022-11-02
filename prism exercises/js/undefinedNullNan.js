// undefined => to indicate the absence of value
let variable;
console.log(variable); //undefined

const arrayVar = ["a", 1, true];
console.log(arrayVar[4]); //undefined

const objVar = {
  id: 1,
  name: "abc",
};
console.log(objVar.abc); //undefined

// Null => to intentionally denote the absence of a value, mostly at the initialization stage.
let cost = null;
console.log(cost);
cost = "abc";
console.log("after setting a value to cost", cost);

// NaN => Not a Number
const a = "abc" - 2345;
const b = "abc" + 2345;
console.log(a);
// To check whether we are getting a number or not
if (Number.isNaN(a) === true) console.log("Not a Number");
if (Number.isNaN(b) === false) console.log(b);
