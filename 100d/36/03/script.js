"use strict"

const formContainer = document.getElementById('prompt-form-container');
const form = document.getElementById('prompt-form');
const text = form.elements.text;
const okBtn = form.elements.ok;
const cancelBtn = form.elements.cancel;

formContainer.hidden = !formContainer.hidden;

function toggleHidden(elem) {
}
