"use strict"

function getWeekDay(date) {
    const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    return weekDays[date.getDay()];
}

console.log(getWeekDay(new Date(2012, 0, 3)));
