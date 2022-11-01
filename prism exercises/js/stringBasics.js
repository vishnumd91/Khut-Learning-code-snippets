const text1 = "Hello Javascript \u{1F64F}"; // Using unicodes for using emojis
console.log(text1);

const nameOfTheEmployee = "Name";
const designation = "Designation";
const orgainzation = "Organization";
//Using Escape values to use wrap single and double quotes within each of them
const quote = "To 'single-quote' to \"double-quote\"";
console.log(quote);

// Template Literals
const aString = `My name is ${nameOfTheEmployee} and I am working as ${designation} at ${orgainzation}`;
console.log(aString);
