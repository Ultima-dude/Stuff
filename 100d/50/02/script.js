"use strict"

const room = {
    number: 23
}

const meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
}

meetup.place = room;
room.occupiedBy = meetup;

//console.log(JSON.stringify(meetup));

console.log(JSON.stringify(meetup, ['title', 'participants']));
console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));
console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}:${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}, 2));
