"use strict"

const start = document.getElementById('start');
const end = document.getElementById('end');
const btn = document.getElementById('btn');

btn.addEventListener('click', selectText);

function selectText() {
    const range = new Range();

    range.setStart(p, start.value);
    range.setEnd(p, end.value);

    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    console.log("D");
}
