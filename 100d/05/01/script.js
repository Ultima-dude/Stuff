"use strict"

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function renderTime() {
    let time = new Date();

    hours.textContent = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();;
    minutes.textContent = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
    seconds.textContent = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();
}

setInterval(renderTime, 1000);