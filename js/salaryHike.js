let designation = window.prompt("Enter The Designation").toLowerCase();

let salary = parseInt(window.prompt("Enter The Salary"));

const hikeDecider = (designation, salary) => {
  let salaryHike;
  if (designation === "manager") {
    salaryHike = (salary * 20) / 100;
    salary += salaryHike;
    return `${designation} Salary is: ${salary}`;
  } else if (designation === "programmer") {
    salaryHike = (salary * 15) / 100;
    salary += salaryHike;
    return `${designation} Salary is: ${salary}`;
  } else if (designation === "tester") {
    salaryHike = (salary * 10) / 100;
    salary += salaryHike;
    return `${designation} Salary is: ${salary}`;
  } else {
    return "Please Enter the proper Designation";
  }
};

const result = hikeDecider(designation, salary);
console.log(result);

document.write(`<h1>${result}</h1>`);
