"use strict"

function getLocalDay(date) {
    const localDay = date.getDay();

    if(localDay === 0) return 7;
    return localDay;
}

console.log(getLocalDay(new Date('2023-07-09')));
