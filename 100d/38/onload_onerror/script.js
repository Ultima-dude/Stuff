"use strict"

function preloadImages(sources, callback) {
    let counter = 0;

    function countImgs() {
        counter++;
        if(counter == sources.length) callback();
    }

    for(let source of sources) {
        let img = document.createElement('img');
        img.onload = img.onerror = countImgs;
        img.setAttribute('src', source);
    }
}

let sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
]

for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
}

function testLoaded() {
    let widthSum = 0;

    for(let i = 0; i < sources.length; i++) {
        let img = document.createElement('img');
        img.setAttribute('src', sources[i]);
        widthSum += img.width;
    }
    alert(widthSum);
}

preloadImages(sources, testLoaded);
