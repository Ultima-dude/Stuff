"use strict";

class User {
    name = 'Anon';

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(str) {
        this._name = str;
    }

    sayHi() {
        alert(this.name)
    }

}

/*
new User().sayHi();
let user = new User('Ivan');
user.sayHi();
console.log(user._name);
*/

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит`);
    }
}

class Rabbit extends Animal {
    constructor(name, earLendth) {
        super(name);
        this.earLendth = earLendth;
    }
    hide() {
        console.log(`${this.name} прячется`);
    }
    stop() {
        setTimeout(() => super.stop(), 1000);
        setTimeout(() => this.hide(), 2000);
    }
}

let animal = new Animal('Pet');
let rabbit = new Rabbit('Волшебный кролик', 15);


/*
rabbit.run(5);
rabbit.hide();
*/


function f(str) {
    return class {
        sayHi() {
            console.log(str);
        }
    }
}

class Test extends f('Hi') {
}

//new Test().sayHi();
