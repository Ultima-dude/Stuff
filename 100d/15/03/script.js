"use strict"

for(let elem of document.querySelectorAll('*')) {
  elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
  elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName}`));
}