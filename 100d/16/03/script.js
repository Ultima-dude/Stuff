"use strict"

let table = document.getElementById('grid');

table.addEventListener('click', function(event) {
    let thSortBtn = event.target;
    let itemsList = Array.from(table.lastElementChild.rows);

    if(thSortBtn.tagName != 'TH')
        return;

    if(!table.contains(thSortBtn))
        return;

    renderTable(itemsList, thSortBtn.dataset.type).forEach(item => table.lastElementChild.append(item));
});

function renderTable(arr, type) {
    console.log(type);
    switch(type) {
        case 'number':
            return arr.sort((a, b) => a.cells[0].textContent - b.cells[0].textContent);
        case 'string':
            return arr.sort((a, b) => {
                if(a.cells[1].textContent < b.cells[1].textContent)
                    return -1;
                if(a.cells[1].textContent > b.cells[1].textContent)
                    return 1;
                return 0;
            });
        default:
            alert("Ну тут мои полномочия все");
    }
}