"use strict"

const student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null
}

let json = JSON.stringify(student);

console.log(typeof json);

console.log(json);
