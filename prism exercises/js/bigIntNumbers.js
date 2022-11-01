"use strict";

// Finding out the safe maximum and minimum value for the Number type.
const maxValue = Number.MAX_SAFE_INTEGER;
const minValue = Number.MIN_SAFE_INTEGER;

console.log(
  `Max value is : ${maxValue} and Min value for Number type is: ${minValue}`
);

// Usage of BigInt constructor
const testBigInt = BigInt(maxValue);
console.log(testBigInt); // Output should end with n like 9007199254740991n

// Breaking example for Number type on using values above safe max value
const aBigNumber = 199_345_656_765_755_546_322; // Used Underscore for more reasability
console.log(aBigNumber + 2); //Output: 199345656765755560000

// Fixing the above error with BigInt
const aBigNumber2 = 199_345_656_765_755_546_322n; // Used Underscore for more reasability
console.log(aBigNumber2 + 2n); //Output: 199345656765755546324n
