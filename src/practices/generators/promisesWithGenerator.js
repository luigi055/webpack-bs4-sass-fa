import { coroutine as co } from 'bluebird';
console.log('--PROMISES + GENERATORS--');

export default function () {
	const getRandomNumberPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomNumber = Math.floor(Math.random() *10 ) + 1;
			console.log(randomNumber);
			resolve(randomNumber);
		}, 1000);
	}); 

  // const getJokesPromise = (n) => {
  // 	const jokePromise = fetch(`http://api.icndb.com/jokes/random/${n}`);
  // 	return jokePromise;
  // };

  const getJokesPromise = n => fetch(`http://api.icndb.com/jokes/random/${n}`);

  // getRandomNumberPromise.then( number => {
  // 	getJokesPromise(number).then(jokeResponse => {
  // 		jokeResponse.json().then( jokes => {
  // 			// console.log(JSON.stringify(jokes));
  // 			const { value: jokeArray } = jokes;
  // 			jokeArray.forEach(joke => console.log(joke.joke));
  // 		})
  // 	});
  // });

  console.log('--Using bluebird for the same result--');
  // bluebird Allows us to yield promises directly to generators
  co(function* () {
  	const number = yield getRandomNumberPromise;
  	const jokeResponse = yield getJokesPromise(number);
  	const jokes = yield jokeResponse.json();
  	const { value: jokeArray } = jokes;
  	jokeArray.forEach(joke => console.log(joke.joke));
  })();


}