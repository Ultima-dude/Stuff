"use strict";

//Dom manipulation

//Reveal event

const revealButton = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');
console.log(hiddenContent);

function revealContent() {
	if(hiddenContent.classList.contains('reveal-btn')) {
		hiddenContent.classList.remove('reveal-btn');
	} else {
		hiddenContent.classList.add('reveal-btn');
	}
}

revealButton.addEventListener('click', revealContent);
