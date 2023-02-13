//1. 
// const thenable ={
//   then: function(cb){
//     setTimeout(() => cb(2), 100)
//   }
// }

// const v = await thenable()
// console.log(v);

// 2. promise can have multiple handlers(catch, then, finally)
// const promise = new Promise((resolve, reject) => {
//   reject(Error('Some error occurred'));
// })
// promise.catch(error => console.log(error.message));
// promise.catch(error => console.log(error.message));
// promise.catch(error => console.log(error.message));
// promise.catch(error => console.log(error.message));

//3. sleep function
// function sleep(ms) {
//   return new Promise(res => {
//       setTimeout(res, ms);
//   });
// }

// sleep(12200);
//4. output
// const promise = new Promise((resolve, reject) => {
//   reject(Error('Some Error Occurred'));
// })
// .catch(error => console.log(error))
// .then(error => console.log(error));

//5.
// const promise = new Promise(res => res(2));
// promise.then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .finally(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//     });
//6.
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is the eventual value the promise will return');
//   }, 300);
// });

// console.log(myPromise);

// const anotherPromise = Promise.resolve("this is the eventual value the promise will return")

// console.log(anotherPromise);


// const anotherPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is the eventual value the promise will return');
//   }, 300);
// });

// // CONTINUATION
// anotherPromise
// .then(value => { console.log(value) }) 

// const myPromise = new Promise((resolve, reject) => {
//   let a = false;
//   setTimeout(() => {
//     return (a) ? resolve('a is found!'): reject('sorry, no a');
//   }, 300);
// }); 

// myPromise
// .then(value => { console.log(value) })
// .catch(err => { console.log(err) });

// const promise = new Promise(( resolve, reject) => {
//   const count = true;
//   count ? resolve('There is a count value') : reject('There is no count value')
// })

// console.log(promise)
// promise
// .then((result) => { console.log(result)})
// .then((result) => { console.log('You can call multiple functions this way')})

// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//   reject('Promise rejected'); 
// });

// // executes when promise is resolved successfully
// countValue.then(
//    function successValue(result) {
//        console.log(result);
//    },
// )

// // executes if there is an error
// .catch(
//    function errorValue(result) {
//        console.log(result);
//    }
// );

// const wait = time => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then(() => console.log('Hello!')); // 'Hello!'


// const wait = time => new Promise(
//   res => setTimeout(() => res(), time)
// );

// wait(200)
//   // onFulfilled() can return a new promise, `x`
//   .then(() => new Promise(res => res('foo')))
//   // the next promise will assume the state of `x`
//   .then(a => a)
//   // Above we returned the unwrapped value of `x`
//   // so `.then()` above returns a fulfilled promise
//   // with that value:
//   .then(b => console.log(b)) // 'foo'
//   // Note that `null` is a valid promise value:
//   .then(() => null)
//   .then(c => console.log(c)) // null
//   // The following error is not reported yet:
//   .then(() => {throw new Error('foo');})
//   // Instead, the returned promise is rejected
//   // with the error as the reason:
//   .then(
//     // Nothing is logged here due to the error above:
//     d => console.log(`d: ${ d }`),
//     // Now we handle the error (rejection reason)
//     e => console.log(e)) // [Error: foo]
//   // With the previous exception handled, we can continue:
//   .then(f => console.log(`f: ${ f }`)) // f: undefined
//   // The following doesn't log. e was already handled,
//   // so this handler doesn't get called:
//   .catch(e => console.log(e))
//   .then(() => { throw new Error('bar'); })
//   // When a promise is rejected, success handlers get skipped.
//   // Nothing logs here because of the 'bar' exception:
//   .then(g => console.log(`g: ${ g }`))
//   .catch(h => console.log(h)) // [Error: bar]
// ;

// const wait = time => new Promise((resolve, reject) => setTimeout(reject, time));

// wait(3000).then(() => console.log('success!'), () => console.log('failure!'))
// .catch( e =>  console.log(e,'catch!'))
// .finally(() => console.log('fianlly'))
