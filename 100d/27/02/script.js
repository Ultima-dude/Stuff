"use strict"

document.addEventListener('DOMContentLoaded', () => {
    function createParagraph() {
        const para = document.createElement('p');
        para.textContent = "You clicked the button";
        document.body.append(para);
    }


    const buttons = document.querySelectorAll('button');

    for(const button of buttons)
        button.addEventListener('click', createParagraph);
})