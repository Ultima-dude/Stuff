"use strict"

console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollHeight);

while(document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    let dateTime = document.createElement('p');
    dateTime.textContent = new Date();
    this.document.body.append(dateTime);
}

window.addEventListener('scroll', function() {
    if(document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight) {
        console.log(document.documentElement.scrollHeight);
        console.log(document.documentElement.scrollTop);
        console.log(document.documentElement.clientHeight);
        let dateTime = document.createElement('p');
        dateTime.textContent = new Date();
        this.document.body.append(dateTime);
    }
});