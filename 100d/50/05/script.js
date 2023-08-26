"use strict"

const room = {
    number: 23
};

const meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Jane"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value){
    if(key != '' && value == meetup) return undefined;
    return value;
}, 2));
