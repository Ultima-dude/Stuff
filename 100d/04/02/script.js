"use strict"

let container = document.body.firstElementChild;

function createCalendar(container, year, month) {
    let table = document.createElement('table');
    let date = new Date(year, month - 1);

    container.append(table);

    fillTHeader(table);
    fillTbody(table, date);
}

function fillTHeader(table) {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let weekDays = ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    table.append(thead);
    thead.append(tr);

    weekDays.forEach(function(item) {
        let th = document.createElement('th');
        th.textContent = item;
        tr.append(th);
    });
}

function fillTbody(table, date) {
    let tbody = document.createElement('tbody');
    let nextMonth = date.getMonth() + 1;

    table.append(tbody);

    while(date.getMonth() != nextMonth) {
        let row = document.createElement('tr');

        tbody.append(row);
        for(let i = 0; i < 7; i++) {
            let cell = document.createElement('td');

            if((date.getMonth() != nextMonth) && checkDay(i, date)) {
                cell.textContent = date.getDate();
                date.setDate(date.getDate() + 1);
            }

            row.append(cell);
        }
    }
}

function checkDay(num, date) {
    if(date.getDay() == 0 && num == 6)
        return true;
    else if(date.getDay() - 1 == num)
        return true;
    else
        return false;
}

createCalendar(container, 2012, 3);