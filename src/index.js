import './scss/title-component.scss';
import creatingPromises from './practices/promises/promises';
import creatingPromiseAll from './practices/promises/promiseAll';
import jokes from './practices/promises/jokes';
import creatingGenerator from './practices/generators/generator'
import promisesWithGenerator from './practices/generators/promisesWithGenerator';

const name = 'Pedro La Rosa';

console.log(`Hello ${name} this was written in ES6`);

const promise = () => {
  creatingPromises();
};

const promiseAll = () => {
  creatingPromiseAll();
};

const promiseJokes = () => {
  jokes();
};

const generator = () => {
  creatingGenerator();
}

const proWGen = () => {
	promisesWithGenerator();
}

// promise();
// promiseAll();
// promiseJokes();
// generator();
proWGen();

