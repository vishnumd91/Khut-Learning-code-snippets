let designation = prompt("Enter The Designation").toLowerCase();

let salary = parseFloat(prompt("Enter The Salary"));

const hikeDecider = (designation, salary) => {
  var salaryHike;
  switch (designation) {
    case "manager":
      salaryHike = (salary * 20) / 100;
      salary += salaryHike;
      return `${designation} Salary is: ${salary}`;
    case "programmer":
      salaryHike = (salary * 15) / 100;
      salary += salaryHike;
      return `${designation} Salary is: ${salary}`;
    case "tester":
      salaryHike = (salary * 10) / 100;
      salary += salaryHike;
      return `${designation} Salary is: ${salary}`;
    default:
      return "Please Enter the proper Designation";
  }
};

const result = hikeDecider(designation, salary);

document.write(`<h1>${result}</h1>`);
