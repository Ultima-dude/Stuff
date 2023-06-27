"use strict"

const formContainer = document.getElementById('prompt-form-container');
const form = document.forms[0];
const promptMsg = document.getElementById('prompt-message');
const text = form.elements.text;
const okBtn = form.elements.ok;
const cancelBtn = form.elements.cancel;
const showBtn = document.createElement('button');
const cover = document.getElementById('cover-div');

showBtn.textContent = "Нажми";
document.body.append(showBtn);

toggleHidden(formContainer);
toggleHidden(cover);
showPrompt("Введи чот", (value) => {
    console.log(value);
});

showBtn.addEventListener('click', showForm);

function showForm() {
    toggleHidden(formContainer);
    toggleHidden(cover);
    text.focus();
}

function toggleHidden(elem) {
    elem.hidden = !elem.hidden;
}

function showPrompt(html, callback) {
    promptMsg.innerHTML = html;
    form.addEventListener('submit', handleInput);
    cancelBtn.addEventListener('click', closeInput);
    text.addEventListener('keydown', closeInputOnKey);

    function handleInput(event) {
        event.preventDefault();
        callback(text.value);
        toggleHidden(formContainer);
    }

    function closeInput() {
        callback(null);
        toggleHidden(formContainer);
    }

    function closeInputOnKey(event) {
        if(event.code == "Escape") closeInput();
    }
}
