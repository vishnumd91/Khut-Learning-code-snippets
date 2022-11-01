// Normal Boolean Variables
const aBooelan = false;
const anotherBoolean = true;
console.log(`A falsy variable`, aBooelan);
console.log(`A truthy variable`, anotherBoolean);

// For Strings
const message = "";
const message2 = "hey";
// !! converts the string or numbers into a boolean
// If string is empty it is false else true, same to numbers, if 0 false , else true.
const showPost1 = !!message;
const showPost2 = !!message2;
console.log(`ShowPost1 is: ${showPost1}`);
console.log(`ShowPost2 is: ${showPost2}`);

// For Numbers
const showEditButton1 = !!message.length;
const showEditButton2 = !!message2.length;
console.log(`ShowEditButton1 is: ${showEditButton1}`);
console.log(`ShowEditButton2 is: ${showEditButton2}`);

// Another sample example of boolean
const ageOfJoe = 19;
const eligibleForVoting = ageOfJoe > 18;
const isJoeASeniorCitizen = ageOfJoe > 60;

console.log("Joe can vote. true or false?", eligibleForVoting);
console.log("Joe is a senior citizen. true or false?", isJoeASeniorCitizen);
