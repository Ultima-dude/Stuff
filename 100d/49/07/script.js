"use strict"

function getLastDayofMonth(year, month) {
    const date = new Date(year, month + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

console.log(getLastDayofMonth(2012, 1));
