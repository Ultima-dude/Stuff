"use strict"

let vasya = {
  name: "Vasya",
  surname: "Pupkin",
  id: 1
};

let petya = {
  name: "Petya",
  surname: "Ivanov",
  id: 2
};

let masha = {
  name: "Masha",
  surname: "Petrova",
  id: 3
};

let users = [vasya, petya, masha];

let usersMapped = users.map(item => ({
  fullName: item.name + " " + item.surname,
  id: item.id
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName );
