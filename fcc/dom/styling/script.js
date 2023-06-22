"use strict";

//DOM manipulation

//StylingElement
const title = document.querySelector('#main-heading');
title.style.color = 'red';

//Styling ArrayLike of elements
const listItems = document.getElementsByTagName('li');

//Wrong!!!
//listItems.style.fontSize = '2em';

/*
for(let i = 0; i < listItems.length; i++) {
	listItems[i].style.fontSize = '2em';
}
*/
for(let listItem of listItems) {
	listItem.style.fontSize = '2em';
}

//console.log(listItems);
//console.log(title);

//Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

//Add Element

ul.append(li);

//Modifying Text

/*
const firstListItem = document.querySelector('li');

console.log(firstListItem.innerText);
console.log(firstListItem.innerHTML);
console.log(firstListItem.textContent);
*/

li.innerText = 'X-men';

//Modifying Attributes and Classes

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

li.classList.add('list-items');
li.classList.remove('list-items');

//console.log(li.classList.contains('list-items'));

li.setAttribute('class', 'list-items');
//console.log(title.getAttribute('id'));

//Remove Elements

li.remove();
