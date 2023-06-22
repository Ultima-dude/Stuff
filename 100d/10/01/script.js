"use strict"

/**
     * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     *
     * @param {Node} anchor     элемент, около которого позиционируется другой элемент
     * @param {string} position одно из: top/right/bottom
     * @param {Node} elem       элемент, который позиционируется
     *
     * Оба элемента elem и anchor должны присутствовать в документе
     */

function positionAt(anchor, position, elem) {
  // ... ваш код ...
  let directions = {
    top: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().left + 'px';
        elem.style.top = anchor.getBoundingClientRect().top - elem.offsetHeight + 'px';
    },

    right: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().right + 'px';
        elem.style.top = anchor.getBoundingClientRect().top + 'px';
    },

    bottom: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().left + 'px';
        elem.style.top = anchor.getBoundingClientRect().bottom + 'px';
    },
  }

  directions[position](anchor, elem);
}
/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
  let note = document.createElement('div');

  note.className = "note";
  note.innerHTML = html;

  document.body.append(note);

  positionAt(anchor, position, note);
}
// test it
let blockquote = document.querySelector('blockquote');
showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");