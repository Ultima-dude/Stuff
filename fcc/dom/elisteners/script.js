"use strict";

//Dom manipulation

//Event listeners

//element.addEventListener("click", function);

let btn2 = document.querySelector('.btn-2');

function alertBtn() {
	alert('another onclick!');
}

btn2.addEventListener('click', alertBtn);

let boxThree = document.querySelector('.box-3');

function changeBackground() {
	boxThree.style.backgroundColor = 'blue';
}

boxThree.addEventListener('mouseover', changeBackground);
