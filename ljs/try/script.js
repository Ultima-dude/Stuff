"use strict";

try {
    console.log('test1');
    lal;
    console.log('test2');
} catch(err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);

    console.log(err);
}

let json = '{"name":"John", "age": 30}';

try {
    let user = JSON.parse(json);
    /*
    alert(user.name);
    alert(user.age);
    */
} catch(e) {
    console.log(e.name);
    console.log(e.message);
}

/*
try {
    JSON.parse('{bad json}');
} catch(e) {
    alert(e.name);
    alert(e.message);
}
*/

let json2 = '{ "age": 20 }';

function bla() {
    try {
        let user = JSON.parse(json2);
        lal();
        if(!user.name) {
            throw new SyntaxError("User don't have a name");
        }

        alert(user.name);
    } catch(e) {
        if(e.name == "SyntaxError") {
            alert(`JSON Error: ${e.message}`);
        } else {
            throw e;
        }
    }
}

/*
try {
    bla()
} catch(e) {
    alert(`Outer catch find ${e}`);
};
*/

/*
try {
    user = JSON.parse(json2);
} catch(err) {
    alert(`JSON Error: + ${err}`);
}
*/

let num = +prompt('Enter your number', 35);

let diff, result;

function fib(n) {
    if(n < 0 || Math.trunc(n) != n) {
        throw new Error('Wrong number');
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
    result = fib(num);
} catch(e) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

alert(result || "Err");
alert(diff);
