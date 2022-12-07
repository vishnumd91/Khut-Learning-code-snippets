// Arrow function with no parameters
const funWithNoParams = () => console.log("First Name: Ujwal");

// Arroe Function with single parameter
const funWithOneParam = (firstName) => console.log(`First Name: ${firstName}`);

// Arrow Function with multiple parameters
const funWithMultipleParams = (firstName, lastName) => {
  console.log(`FirstName: ${firstName}
LastName: ${lastName}
`);
};

funWithNoParams();
funWithOneParam("Ujwal");
funWithMultipleParams("Ujwal", "Sharma");
