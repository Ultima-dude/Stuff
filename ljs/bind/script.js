"use strict";

let user = {
    firstName: "Vasya",
    sayHi() {
        console.log(`Hello, ${this.firstName}`);
    },
    sayPhrase(str) {
        console.log(`${str}, ${this.firstName}`);
    },
    say(time, str) {
        console.log(`[${time}]:${this.firstName}: ${str}`);
    }
};

let boundHi = user.sayHi.bind(user);
let say = user.sayPhrase.bind(user);

setTimeout(user.sayHi, 1000);
//setTimeout(() => user.sayHi(), 1500);
setTimeout(boundHi, 2000);

/*
user = {
    sayHi() {
        console.log('Something new');
    }
}
*/

say("Hello");
say("Bye");

function mul(a, b) {
    console.log(a * b);
}

let dbl = mul.bind(null, 2);

dbl(1);
dbl(3);
dbl(6);

function partial(func, ...argsBound) {
    return function(...args){
        func.call(this, ...argsBound, ...args);
    }
}

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Howdy");
let boundSayNow = user.sayNow.bind(user);
setTimeout(boundSayNow, 2500, "Hi");
