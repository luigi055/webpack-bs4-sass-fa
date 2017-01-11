
export default () => {
  console.log('--Jokes--');

// Since fetch() method is still in experimental process
// it is not advisible to use it. better to use a third party package
// like axios
  const jokePromise = fetch('http://api.icndb.com/jokes/random/3');
  console.log(jokePromise); //josePromise returns a promise

  jokePromise.then(data => {
    console.log(data); //return the response of the promise
    const jokesData = data.json(); //transform JSON data to js object
    jokesData.then(joke => {
      console.log(joke);
      joke.value.forEach(j => {
        console.log(`ID:${j.id} Joke:${j.joke}`);
      });
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
    console.log(err);
  });

};
