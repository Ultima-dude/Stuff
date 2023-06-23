"use strict"

const table = document.getElementById('bagua-table');
// Editor elements
const edditor = document.createElement('textarea');
const okBtn = document.createElement('button');
const cancelBtn = document.createElement('button');

edditor.classList.add('edditor');
okBtn.classList.add('edditor-btn');
okBtn.setAttribute('data-confirm', 'Ok');
okBtn.textContent = 'Ok';
cancelBtn.classList.add('edditor-btn');
cancelBtn.setAttribute('data-confirm', 'Cancel');
cancelBtn.textContent = 'Cancel';

// Container for eddited td
let tdInfoContainer = null;

table.addEventListener('click', focusCell);

function focusCell(event) {
	// Handle edditor buttons
	if(event.target.classList.contains('edditor-btn'))
		checkBtn(event.target.dataset.confirm, isOk.bind(null ,event.target.closest('td')), isCanceled.bind(null ,event.target.closest('td')));

	// Ignore clicks if td was selected
	if(table.contains(edditor)) return;

	const targetCell = event.target.closest('td');

	if(!targetCell) return;

	showEdditingWindow(targetCell);
}

function showEdditingWindow(elem) {
	const elemWidth = `${elem.clientWidth}px`;
	const elemHeight = `${elem.clientHeight}px`;

	edditor.value = tdInfoContainer = elem.innerHTML;
	elem.innerHTML = '';
	elem.append(edditor);
	edditor.style.height = elemHeight;
	edditor.style.width = elemWidth;
	edditor.focus();

	const coordsLeft = edditor.getBoundingClientRect().left;
	const coordsTop = edditor.getBoundingClientRect().bottom;

	elem.append(okBtn);
	adjustCoords(okBtn, coordsLeft, coordsTop);
	elem.append(cancelBtn);
	adjustCoords(cancelBtn, coordsLeft + okBtn.offsetWidth, coordsTop);
}

function adjustCoords(elem, x, y) {
	elem.style.left = `${x}px`;
	elem.style.top = `${y}px`;
}

function checkBtn(str, func1, func2) {
	if(str == 'Ok'){
		func1();
	}else{
		func2();
	}

	edditor.remove();
	okBtn.remove();
	cancelBtn.remove();
}

function isOk(elem) {
	elem.innerHTML = edditor.value;
}

function isCanceled(elem) {
	elem.innerHTML = tdInfoContainer;
}