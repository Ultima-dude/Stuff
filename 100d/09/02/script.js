"use strict"

let field = document.getElementById('field');

console.log("Верхняя левая точка - x:" + field.getBoundingClientRect().left + " y:" + field.getBoundingClientRect().top);
console.log("Верхняя внутренняя левая точка - x:" + (field.getBoundingClientRect().left + field.clientLeft) + " y:" + (field.getBoundingClientRect().top + field.clientTop));
console.log(`Нижняя правая - x: ${field.getBoundingClientRect().right} y: ${field.getBoundingClientRect().bottom}`);
console.log(`Нижняя внутренняя правая - x: ${field.getBoundingClientRect().right - field.clientLeft} y: ${field.getBoundingClientRect().bottom - field.clientTop}`);