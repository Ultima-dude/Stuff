"use strict"

function formatDate(date) {
    const now = new Date();
    const dif = now - date;

    if(dif < 1000) return "Now";
    else if( dif < 1000 * 60) return `${Math.floor(dif / 1000)}s ago`;
    else if(dif < 1000 * 3600) return `${Math.floor(dif / (1000 * 60))}min's ago`;
    else return `${formatString(date.getDate())}.${formatString(date.getMonth())}.${formatString(date.getFullYear())} ${formatString(date.getHours())}:${formatString(date.getMinutes())}`;
}

function formatString(num) {
    if (num > 1000)
        return String(num).slice(2);
    return num > 9 ? num : '0' + num;
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));
