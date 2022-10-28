let designation = prompt("Enter The Designation").toLowerCase();

let salary = parseInt(prompt("Enter The Salary"));

const hikeDecider = (designation, salary) => {
  if (designation === "manager") {
    salary += salary * 0.2;
    return `${designation} Salary is: ${salary}`;
  } else if (designation === "programmer") {
    salary += salary * 0.15;
    return `${designation} Salary is: ${salary}`;
  } else if (designation === "tester") {
    salary += salary * 0.1;
    return `${designation} Salary is: ${salary}`;
  } else {
    salary += salary * 0.05;
    return `${designation} Salary is: ${salary}`;
  }
};

const result = hikeDecider(designation, salary);

document.write(`<h1>${result}</h1>`);
