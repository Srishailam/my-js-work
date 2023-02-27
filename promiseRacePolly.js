const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2)
})
// Promise.race([p1, p2]).then((value) => {
//   console.log(value) // 2
// })
// Promise.race([p1, p2, 3]).then((value) => {
//   console.log(value) // 3
// })

Promise.myRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
};

Promise.myRace([p1, p2]).then((value) => {
  console.log(value) // 2
})
Promise.myRace([p1, p2, 3]).then((value) => {
  console.log(value) // 2
})