"use strict";

/*
const foo = Object.create({
	baz: 'baz'
}, {
	bar: {
		value: 'bar'
	}
});

console.log(foo);
*/

function Foo(bar) {
	this.bar = 'bar';
}

class Bar {
	constructor(bar) {
		this.bar = bar;
	}
}

//Foo.prototype.baz = 'baz';
Foo.prototype = {baz: 'baz'};
const foo = new Foo('bar');
const bar = new Bar('bar');
//console.log(foo.constructor.name);
console.log(bar);
console.log(bar.constructor.name);
console.log(foo);
