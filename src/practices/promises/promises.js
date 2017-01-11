export default () => {
  console.log('--Promises--');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data back from server');
    }, 3000);

    setTimeout(() => {
      reject('No Data back from server');
    }, 4000); // reject method will execute first cos' it has timeout 2s
  });

  promise.then(response => {
    console.log(response); //the value of resolve
  }).catch(err => {
    console.log(err);
  });
};
