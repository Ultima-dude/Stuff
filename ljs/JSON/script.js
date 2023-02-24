"use strict"

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

//console.log(json);

/*
console.log(JSON.stringify(1));
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3]));
*/

/*
let meetup = {
  title: "conference",
  room: {
    number: 23,
    participants: ['john', 'ann']
  }
};
*/

//console.log(JSON.stringify(meetup));

//Задачка 1

let user = {
  name: 'John',
  age: 30
}

let string = JSON.stringify(user);

console.log(string);
console.log(JSON.parse(string));

//Задачка 2

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петрова"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
