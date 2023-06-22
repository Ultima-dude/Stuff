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

  let posArr = position.split('-');

  let directions = {
    top: {
      out: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().left + window.pageXOffset + 'px';
        elem.style.top = anchor.getBoundingClientRect().top - elem.offsetHeight + window.pageYOffset + 'px';
      },

      in: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().left + window.pageXOffset + 'px';
        elem.style.top = anchor.getBoundingClientRect().top + window.pageYOffset + 'px';
      },
    },

    right: {
      out: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().right + window.pageXOffset + 'px';
        elem.style.top = anchor.getBoundingClientRect().top + window.pageYOffset + 'px';
      },

      in: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().right - elem.offsetWidth + window.pageXOffset + 'px';
        elem.style.top = anchor.getBoundingClientRect().top + window.pageYOffset + 'px';
      },
    },

    bottom: {
      out: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().left + window.pageXOffset + 'px';
        elem.style.top = anchor.getBoundingClientRect().bottom + window.pageYOffset + 'px';
      },

      in: function(anchor, elem) {
        elem.style.left = anchor.getBoundingClientRect().left + window.pageXOffset + 'px';
        elem.style.top = anchor.getBoundingClientRect().bottom - elem.offsetHeight + window.pageYOffset + 'px';
      },
    }
  }

  directions[posArr[0]][posArr[1]](anchor, elem);
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
showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below");
showNote(blockquote, "top-in", "note above in");
showNote(blockquote, "right-in", "note right in");
showNote(blockquote, "bottom-in", "note below in");