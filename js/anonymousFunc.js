function test() {
  console.log("test()");
}
test();
console.log("hello");
setTimeout(() => {
  console.log("inside setTimeout");
}, 2000);
console.log("outside setTimer");
