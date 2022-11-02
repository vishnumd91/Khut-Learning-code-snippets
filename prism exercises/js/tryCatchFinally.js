"use strict";

var costOfProduct = 1000;
var discount = 1200;

try {
  if (costOfProduct <= discount)
    throw new Error(
      "Cost of the product should be higher than the discount value"
    );
  var totalCost = costOfProduct - discount;
  console.log(`Total Cost: ${totalCost}`);
} catch (error) {
  console.log("Oops! We have an error: ", error.message);
} finally {
  console.log("Thank you for using the app!");
}
