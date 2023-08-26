"use strict"

const range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if(this.current <= this.last) return {done: false, value: this.current++};
            else return {done: true};
        }
    }
};

//for (let num of range) console.log(num);
const arr = Array.from(range, num => num * 2);
console.log(arr);

const str ="Hello";

const iterator = str[Symbol.iterator]();

while(true) {
    const result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}
