"use strict"

if(document.body.firstElementChild.tagName != 'UL') {
    let list = document.createElement('ul');
    document.body.prepend(list);
}

let listContent;

while(listContent = prompt("Введите текст")) {
    let listItem = document.createElement('li');
    listItem.textContent = listContent;
    let list = document.body.querySelector('ul');

    list.append(listItem);
}