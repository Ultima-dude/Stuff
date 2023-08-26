"use strict"

const obj = {
    test: "Test",
    date: new Date(2012, 12, 3)
}

let json = JSON.stringify(obj);
console.log(json);
console.log(JSON.parse(json));

const testObj = JSON.parse(json, function reviver(key, value) {
    if(key == 'date') return new Date(value);
    return value;
});

console.log(testObj.date.getMonth());
