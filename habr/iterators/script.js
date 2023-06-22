"use strict";

/*
const ourMap = new Map();

ourMap.set(1, 'a');
ourMap.set(2, 'b');
ourMap.set(3, 'c');

for(let element of ourMap) {
	console.log(element);
}

const copyOfourMap = new Map(ourMap);

console.log(copyOfourMap);
console.log(copyOfourMap == ourMap);
*/

let ourArray = [1, 2, 3];

const iterator = ourArray[Symbol.iterator]();
/*
for(let element of iterator) {
	console.log(element);
}

for(let element of iterator) {
	console.log(element);
}
*/

/*
while(!result.done) {
	const element = result.value;
	console.log(element);

	result = iterator.next();
}
*/

const ourObject = {
	1: 'a',
	2: 'b',
	3: 'c'
};

class IterableObject extends Object {
	constructor(object) {
		super();
		Object.assign(this, object);
	}

	[Symbol.iterator]() {
		const entries = Object.entries(this);
		let index = -1;

		return {
			next() {
				index++;

				return {
					value: entries[index],
					done: index >= entries.length
				}
			},

			[Symbol.iterator]() {
				return this;
			}
		}
	}
}

const iterableObject = new IterableObject(ourObject);

/*
for(let element of iterableObject) {
	console.log(element);
}
*/

const counterIterator = {
	int: -1,

	next() {
		this.int++;
		return {value: this.int, done: false}
	},

	[Symbol.iterator]() {
		return this;
	}
}

for(let num of counterIterator) {
	if(num > 5)
		break;
	console.log(num);
}


for(let num of counterIterator) {
	if(num > 8)
		break;
	console.log(num);
}
