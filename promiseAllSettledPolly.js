const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 3000)
})
const p4 = Promise.reject('err4')
const p5 = Promise.reject('err5')
// 1. All Promises Succeed
const p11 = Promise.allSettled([ p1, p2, p3 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)))

  const p12 = Promise.allSettled([ p1, p2, p4 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)))

  const p13 = Promise.allSettled([ p1, p4, p5 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)))


  Promise.myAllSettled = (promises) => {
    return new Promise((resolve, reject) => {
      let count = 0;
      let result = [];
      let len = promises.length;

      if (len === 0) {
        resolve(result);
      }

      promises.forEach((promise, index) => {
        Promise.resolve(promise).then((value) => {
          count += 1;
          result[index] = { status: 'fulfilled', value };
          if (count === len) {
            resolve(result);
          }
        }).catch((err) => {
          count += 1;
          result[index] = { status: 'rejected', reason: err };
          if (count === len) {
            resolve(result);
          }
        });
      });
    });
  }