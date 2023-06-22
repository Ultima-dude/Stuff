"use strict";

//Variables

const accordion = document.querySelectorAll('.content-container');

for(let container of accordion) {
	container.addEventListener('click', function() {
		this.classList.toggle('active');
	});
}
