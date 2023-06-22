// let arr = new Array(10).fill(null);
let ul = document.createElement('ul');
let select = document.createElement('select');
let weekDays = new Array("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");

ul.classList.add('pagination');
select.classList.add('days-of-week');
document.body.append(ul);
document.body.append(select);

for(let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    let paginationAnchor = document.createElement('a');
    paginationAnchor.setAttribute('href', `#${i}`)
    paginationAnchor.textContent = i + 1;
    li.append(paginationAnchor);
    ul.append(li);
}

for(let weekDay of weekDays) {
    let option = new Option(weekDay, weekDay);
    select.append(option);
}

console.log(`Значение: ${select.value} Текст: ${select[select.selectedIndex].textContent}`);