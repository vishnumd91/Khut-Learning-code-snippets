function construct(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

const obj1 = new construct(1, "vishnu", "25");
const obj2 = new construct(2, "raam", "45");
const obj3 = new construct(3, "gundu", "55");

document.write(`${obj1.name} ${obj1.id} ${obj1.age}`);
