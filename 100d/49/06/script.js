"use strict"

function getDateAgo(date, days) {
    const daysAgo = new Date(date);

    daysAgo.setDate(date.getDate() - days);
    return daysAgo;
}

console.log(getDateAgo(new Date(), 365));
