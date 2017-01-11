export default () => {
  console.log('--Promises All() method--');

  const namePromise = new Promise((resolve, reject) => {
    const names = ['alex', 'anna', 'maria'];
    setTimeout(() => {
      resolve(names);
    }, 2000);

    setTimeout(() => {
      reject('Oops something went wrong :_(');
    }, 1000);
  });

  const surNamePromise = new Promise((resolve, reject) => {
    const surNames = ['alex', 'anna', 'maria'];
    setTimeout(() => {
      resolve(surNames);
    }, 3000);
  });

  Promise.all([namePromise, surNamePromise]).then(data => {
    // Equal to data[0] and data[1]; n=names, s= surnames 
    // [n comes from namePromises, s comes from surNamesPromise]
    const [n, s] = data; 
    console.log(n); //console.log(data[0]);
    console.log(s); //console.log(data[1]);
  }, err => {
    console.log(err);
  });
};
