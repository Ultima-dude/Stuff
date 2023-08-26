"use strict"

function getSecondsToday() {
    const todayZeroMS = new Date();
    todayZeroMS.setHours(0, 0, 0, 0);
    console.log(new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds());
    return Math.floor((new Date() - todayZeroMS) / 1000);
}

console.log(getSecondsToday());
