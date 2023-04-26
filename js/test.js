// const delayExec = (cb) => setTimeout(cb, 0);
// const promisify = (str) => Promise.resolve(str);
// const promiseDel = (str, delay) =>
//   new Promise((resolve, reject) => setTimeout(() => resolve(str), delay));

// delayExec(function () {
//   console.log('Hi!');
// });

// promisify('It is a beautiful day!').then((res) => console.log(res));

// delayExec(function () {
//   console.log('How are you doing?');
// });

// promiseDel('What should we do today?', 10).then((res) => console.log(res));

// function getGreeting() {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve('Good Morning!'), 2000);
//     });
//   }
  
//   async function fetchData() {
//     let data = await getGreeting();
//     console.log(data);
//   }
  
//   fetchData();

// const add = (a, b) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if ((a + b) % 2 === 0) {
//         resolve(a + b);
//       } else {
//         reject();
//       }
//     }, 4000);
//   });

// add(13, 4)
//   .then((res) => console.log(res))
//   .catch(() => console.log('There was an error'));

// function numOne() {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(20), 1000);
//     });
//   }
  
//   function numTwo() {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(40), 1000);
//     });
//   }
  
//   (async function main() {
//     let one = await numOne();
//     let two = await numTwo();
//     console.log(one, two);
//   })();

// function getPromise() {
//     return new Promise((resolve, reject) => {
//       resolve(205);
//     });
//   }
  
//   const getNum = () => new Promise((resolve, reject) => resolve(205));
//   const augment = (n) => new Promise((resolve, reject) => reject(n * 2));
  
//   getNum()
//     .then(augment)
//     .then((res) => console.log(res));

function* getData(x, y) {
    yield x / y;
    yield x * y;
  }
  
  let processNum = getData(23, 45);
  
  processNum.next();
  console.log(processNum.next().value);