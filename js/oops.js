// older way of using functions for oops
function Customer(name, salary) {
  constructor(name, salary);
  {
    this.name = name;
    this.salary = salary;
  }
}
Customer.prototype.display = function () {
  console.log(`Name = ${this.name}, Salary = ${this.salary}`);
};

const c1 = new Customer("Vishnu", 34345454);
c1.display();

// Class way of implementing oops
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printInfo() {
    console.log(`Name = ${this.name}, Age = ${this.age}`);
  }
}

// Inheritance
class Employee2 extends Employee {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
  //   Polymorphism or children overriding parent class
  printInfo() {
    console.log(
      `Name = ${this.name}, Age = ${this.age}, gender = ${this.gender}`
    );
  }
}

const e1 = new Employee("Vishnu", 25);
const e2 = new Employee2("Raj", 32, "Male");
e1.printInfo();
e2.printInfo();
