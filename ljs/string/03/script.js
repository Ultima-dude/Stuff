"use strict"

function truncate(str, maxlength) {
  return checkLength(str, maxlength) ? str : str.slice(0, maxlength) + "...";
}

function checkLength(str, maxlength) {
  return str.length <= maxlength;
}
