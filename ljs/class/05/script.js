"use strict";

class Rabbit {
    constructor(name) {
        this.name = name;
    }
}

let rabbit = new Rabbit('Волшебный кролик');

console.log(rabbit instanceof Rabbit);

let arr = [1, 2, 3];

console.log(arr instanceof Array);
console.log(arr instanceof Object);

class Animal {
    static [Symbol.hasInstance](obj) {
        if(obj.canEat) {
            return true;
        }
    }
}

let test = {canEat: true};
console.log(test instanceof Animal);

let obj = {};
console.log(obj.toString());

let stuffToString = Object.prototype.toString;

let a;
let b = 'a' / 2;
let c = Infinity;
console.log(stuffToString(a));
console.log(a !== a);
console.log(b);
console.log(b !== b);
console.log(stuffToString(b));
console.log(Object.prototype.toString(b));
console.log(stuffToString(c));
console.log(typeof(c));
console.log(c === c);
console.log(Number.isFinite(a));
console.log(isFinite(a));
console.log(Number.isFinite(c));
console.log(isFinite(c));
