"use strict";

const users = `id,first_name,last_name,email,gender
1,Brigg,Kauscher,bkauscher0@nsw.gov.au,Male
2,Saudra,Madner,smadner1@mac.com,Female
3,Willy,Birchwood,wbirchwood2@typepad.com,Female`;

// This function process the data like the one which comes from CSV files and return it in a more formatted way in an array.
const csvToArray = (stringInput) => {
  const output = [];
  const breakByLine = stringInput.split("\n");
  breakByLine.forEach((element) => {
    const splitElement = element.split(",");
    output.push(splitElement);
  });
  return output;
};

// This function will convert the above generated array into an array of object.
const convertArrayToObject = (arrInput) => {
  const output = [];
  arrInput.forEach((item, index) => {
    const resultingObj = {};
    if (index !== 0) {
      item.forEach((elem, index) => {
        resultingObj[arrInput[0][index]] = elem;
      });
      output.push(resultingObj);
    }
  });
  return output;
};

const csvToArrayMapper = csvToArray(users);

console.log(csvToArrayMapper);
console.log(convertArrayToObject(csvToArrayMapper));
