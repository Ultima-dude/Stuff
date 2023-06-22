"use strict"

document.addEventListener('mouseover', function(event) {
    if(!event.target.dataset.tooltip)
        return;
    let hint = event.target;
    let hintCoords = hint.getBoundingClientRect();
    let hintPopup = document.createElement('div');

    hintPopup.className = 'tooltip';
    hintPopup.innerHTML = hint.dataset.tooltip;
    hint.append(hintPopup);
    hintPopup.style.top = `${adjustTop(hintPopup, hintCoords)}px`;
    hintPopup.style.left = `${adjustLeft(hintPopup, hintCoords)}px`;

    function adjustTop(elem, coords) {
        if(coords.top > elem.offsetHeight + 5)
            return coords.top - elem.offsetHeight - 5;
        return coords.bottom + 5;
    }

    function adjustLeft(elem, coords) {
        let coordsLeft = hintCoords.left + hint.offsetWidth / 2 - hintPopup.offsetWidth / 2;
        return  coordsLeft < 0 ? 0 : coordsLeft;
    }
});

document.addEventListener('mouseout', function(event) {
    if(event.target.dataset.tooltip)
        document.querySelector('.tooltip').remove();
});