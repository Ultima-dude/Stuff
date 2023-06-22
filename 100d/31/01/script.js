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
    if(event.target == 'BUTTON')
        someFunctionForButtons(event.type.dataset.confirm, isOk, isCanceled);

    // Ignore clicks if td was selected
    if(table.contains(edditor)) return;

    const targetCell = event.target.closest('td');

    if(!targetCell) return;

    showEdditingWindow(targetCell);
}

function showEdditingWindow(elem) {
    const elemWidth = `${elem.clientelemWidth}px`;
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
    okBtn.style.left = coordsLeft + 'px';
    okBtn.style.top = coordsTop + 'px';
    elem.append(cancelBtn);
    cancelBtn.style.left = coordsLeft + okBtn.offsetWidth + 'px';
    cancelBtn.style.top = coordsTop + 'px';
}