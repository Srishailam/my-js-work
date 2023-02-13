class Promise {
  constructor(handler){
    this.status = 'pending';
    this.value = null;

    const resolve = value => {
      if(this.status === 'pending'){
        this.status = 'fulfilled';
        this.value = value;
      }
    }
    const reject = value => {
      if(this.status === 'pending'){
      this.status = 'rejected';
      this.value = value;
      }
    }

    try {
      handler(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected){
    if(this.status === 'fulfilled'){
      onFulfilled(this.value)
    } else if (this.status === 'rejected'){
      onRejected(this.value)
    }
  }

}

const p1 = new Promise((resolve, reject) => {
  resolve('resolved')
});

const p2 = new Promise((resolve, reject) => {
  reject('rejected')
});

p1.then((res) => console.log(res), (err) => console.log(err));
p2.then((res) => console.log(res), (err) => console.log(err));
