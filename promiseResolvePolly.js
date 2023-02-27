/**

Promise.resolve(1).then(console.log);
const p2 = new Promise((resolve) => resolve(2));
Promise.resolve(p2).then(console.log);
const p3 = new Promise((_, reject) => reject('Error3'));
Promise.resolve(p3).catch(console.log);
const p4 = {
  then (resolve) {
    setTimeout(() => {
      resolve(4);
    }
    , 1000);
  }
}

Promise.resolve(p4).then(console.log);
Promise.resolve().then(console.log);

 */

Promise.myResolve = (value) => {
  if (value && typeof value === 'object' && value instanceof Promise) {
    return value;
  }
  return new Promise((resolve) => resolve(value));
};

Promise.myResolve(1).then(console.log);
const p2 = new Promise((resolve) => resolve(2));
Promise.myResolve(p2).then(console.log);
const p3 = new Promise((_, reject) => reject('Error3'));
Promise.myResolve(p3).catch(console.log);
const p4 = {
  then (resolve) {
    setTimeout(() => {
      resolve(4);
    }
    , 1000);
  }
}

Promise.myResolve(p4).then(console.log);
Promise.myResolve().then(console.log);