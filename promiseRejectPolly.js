Promise.reject(new Error('Error1')).catch(console.log);
Promise.myReject = (value) => {
  return new Promise((_, reject) => reject(value));
};
Promise.myReject(new Error('Error2')).catch(console.log);