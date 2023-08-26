"use strict"

const room = {
    number: 23,

    toJSON() {
        return this.number;
    }
};

const meetup = {
    title: "Conference",
    room
}

console.log(JSON.stringify(room));
console.log(JSON.stringify(meetup, null, 2));
