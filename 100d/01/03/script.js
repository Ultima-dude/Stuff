"use strict"

let list = document.querySelectorAll('li');
for(let item of list) {
    let count = item.getElementsByTagName('li').length;
    alert(item.firstChild.data + '\n' + count);
}
