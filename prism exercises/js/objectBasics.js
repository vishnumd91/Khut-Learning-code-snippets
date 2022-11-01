const sentinal = {
  name: "Sentinel Design \u{2122}",
  employeeCount: 50,
  location: {
    city: "Tokyo",
    country: "Japan",
  },
  isListed: false,
};

const USSentinal = {
  name: "Sentinel Design \u{2122}",
  employeeCount: 50,
  location: {
    city: "New York",
    country: "USA",
  },
  isListed: false,
};

// Destructuring the object
const { name: sentinalName, employeeCount, location, isListed } = sentinal;

// Displaying the setinel name from sentinal object
console.log(`Sentinel Name is: ${sentinal.name} \n`);

// Using destructured values of the object for getting name
console.log(`Sentinel Name after destructuring is: ${sentinalName} \n`);

// Other way of accessing objects through the key as index
console.log(`Employee Count in Sentinal is: ${sentinal["employeeCount"]} \n`);

// deleting properties from an object
delete sentinal.isListed;
console.log("After deleting the isListed");
console.log(sentinal);

// Other way of defining objects
const newObj = new Object();
newObj["Japan"] = "Yen";
newObj["US"] = "US Dollar";
console.log(newObj);
const { Japan, US } = newObj;

// Some more way of accessing nested objects from sentinal object
console.log(`The currency of ${location.country} is ${Japan}`);
console.log(`The currency of ${USSentinal.location.country} is ${US}`);

// Changing the values of the object
USSentinal.location.city = "New Orleans";
console.log(USSentinal);

// Pass by Reference
let copyOfSentinal;
copyOfSentinal = USSentinal;
copyOfSentinal.isListed = true;
// New Object copyOfSentinal
console.log("Copy Sentinal");
console.log(copyOfSentinal);
// USSentinal after taking copy
console.log("Original US Sentinal");
console.log(USSentinal);

// To Keep the original array unchanged, we need to do this.
copyOfSentinal2 = {
  name: "Sentinel Design \u{2122}",
  employeeCount: 50,
  location: {
    city: "New York",
    country: "USA",
  },
  isListed: false,
};
copyOfSentinal2.employeeCount = 100;
// New Object copyOfSentinal2
console.log("Copy Sentinal 2");
console.log(copyOfSentinal2);
// USSentinal after taking copy
console.log("Original US Sentinal");
console.log(USSentinal);
