console.log('Generators');

export default function () {
	const getNumbers = function* () {
		yield 1;
		yield 2;
		yield true;
		yield null;
		yield {
			name: 'luigi'
		};

		// When there's nothing more to show return a value for done
		return 'Done, there is no more stuff to display';
	}

	const numbersGen = getNumbers();

	console.log(JSON.stringify(numbersGen.next().value));
	console.log(JSON.stringify(numbersGen.next().value));
	console.log(JSON.stringify(numbersGen.next().value));
	console.log(JSON.stringify(numbersGen.next().value));
	console.log(JSON.stringify(numbersGen.next().value));
	console.log(JSON.stringify(numbersGen.next().value)); // Nothing more to display

	const loopNumbers = function* (numbers) {
	  for(let i = 0; i < numbers.length; i++) {
	  	yield numbers[i];
	  }
	};

	const loopNumbersGen = loopNumbers([10,20,40,80,160,320,640,1280]);

	const interval = setInterval(() => {
		const next = loopNumbersGen.next();

		next.done ? clearInterval(interval) : console.log(next.value);
	}, 1000)


}