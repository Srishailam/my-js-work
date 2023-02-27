/**

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});
const p4 = Promise.reject('Error4');
const p5 = Promise.reject('Error5');

// All succeed
const p11 = Promise.all([p1, p2, p3]).then(console.log).catch(console.log);
const p12 = Promise.all([p1, p2, p4]).then(console.log).catch(console.log);
const p13 = Promise.all([p1, p4, p5]).then(console.log).catch(console.log);

*/

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});
const p4 = Promise.reject('Error4');
const p5 = Promise.reject('Error5');

Promise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    let result = [];
    let len = promises.length;

    if(len === 0) {
      resolve(result);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        count += 1;
        result[index] = value;
        if(count === len) {
          resolve(result);
        }
      }).catch(reject);
    });
  });
};

const p11 = Promise.myAll([p1, p2, p3]).then(console.log).catch(console.log);
const p12 = Promise.myAll([p1, p2, p4]).then(console.log).catch(console.log);
const p13 = Promise.myAll([p1, p4, p5]).then(console.log).catch(console.log);
