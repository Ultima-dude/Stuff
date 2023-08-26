"use strict"

function getSecondsToTomorrow() {
    const date = new Date();

    date.setDate(date.getDate() + 1);
    date.setHours(0, 0, 0, 0);

    return (Math.floor((date - new Date()) / 1000));
}

console.log(getSecondsToTomorrow());
