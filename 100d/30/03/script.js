"use strict"

let textContainer = document.querySelector('.text');
let textArea = document.createElement('textarea');

textArea.classList.add('text');
textArea.value = textContainer.innerHTML;
textArea.hidden = true;
textContainer.after(textArea);
textContainer.setAttribute('tabindex', 1);

textContainer.addEventListener('focus', function() {
    this.hidden = true;
    textArea.hidden = false;
    textArea.focus();
});

textArea.addEventListener('keydown', function(event) {
    if(event.key == 'Enter')
        applyChanges.call(this);
});
textArea.addEventListener('blur', applyChanges.bind(textArea));

function applyChanges() {
    textContainer.innerHTML = textArea.value;
    this.hidden = true;
    textContainer.hidden = false;
}

