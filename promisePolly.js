class Promise {
  constructor(handler){
    this.status = 'pending';
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if(this.status === 'pending'){
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn(value));
      }
    }
    const reject = value => {
      if(this.status === 'pending'){
        this.status = 'rejected';
        this.value = value;
        this.onRejectedCallbacks.forEach(fn => fn(value));
      }
    }

    try {
      handler(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
        if (this.status === "pending") {
            this.onFulfilledCallbacks.push(() => {
                try {
                    const fulfilledFromLastPromise = onFulfilled(this.value);
                    if (fulfilledFromLastPromise instanceof Promise) {
                        fulfilledFromLastPromise.then(resolve, reject);
                    } else {
                        resolve(fulfilledFromLastPromise);
                    }
                } catch (err) {
                    reject(err);
                }
            });
            this.onRejectedCallbacks.push(() => {
                try {
                    const rejectedFromLastPromise = onRejected(this.value);
                    if (rejectedFromLastPromise instanceof Promise) {
                        rejectedFromLastPromise.then(resolve, reject);
                    } else {
                        reject(rejectedFromLastPromise);
                    }
                } catch (err) {
                    reject(err);
                }
            });
        }

        if (this.status === "fulfilled") {
            try {
                const fulfilledFromLastPromise = onFulfilled(this.value);
                if (fulfilledFromLastPromise instanceof Promise) {
                    fulfilledFromLastPromise.then(resolve, reject);
                } else {
                    resolve(fulfilledFromLastPromise);
                }
            } catch (err) {
                reject(err);
            }

        }

        if (this.status === "rejected") {
            try {
                const rejectedFromLastPromise = onRejected(this.value);
                if (rejectedFromLastPromise instanceof Promise) {
                    rejectedFromLastPromise.then(resolve, reject);
                } else {
                    reject(rejectedFromLastPromise);
                }
            } catch (err) {
                reject(err);
            }
        }
    });
}

}

const p1 = new Promise((resolve, reject) => {
  resolve('resolved')
});

const p2 = new Promise((resolve, reject) => {
  reject('rejected')
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('resolved!'), 1000);
})

p1.then((res) => console.log(res), (err) => console.log(err));
p2.then((res) => console.log(res), (err) => console.log(err));

p3.then((res) => console.log(res), (err) => console.log(err));

p3.then((res) => {
  console.log(res);
  return new Promise(resolve => {
      setTimeout(() => resolve('resolved second one'), 1000);
  });
}).then(res => {
  console.log(res);
});