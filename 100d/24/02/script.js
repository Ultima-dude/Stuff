"use strict"

let currentTarget = null;
let house = document.getElementById('house');

house.addEventListener('mouseover', showTooltip);
house.addEventListener('mouseout', hideTooltip);

function showTooltip(event) {
    if(currentTarget)
        return;

    let target = event.target.closest('[data-tooltip]');
    createTooltip(target);
    
    currentTarget = target;
    console.log(target);
}

function hideTooltip(event) {

    document.querySelector('.tooltip').remove();
    currentTarget = null;
    console.log('-'.repeat(20));
}

function createTooltip(elem) {
    let tooltip = document.createElement('div');
    
    elem.append(tooltip);
    tooltip.classList.add('tooltip');
    tooltip.textContent = elem.dataset.tooltip;
    adjustTooltipCoords(tooltip, elem);
}

function adjustTooltipCoords(tooltip, elem) {
    const elemTop = elem.getBoundingClientRect().top;
    const tooltipTop = elemTop - tooltip.offsetHeight < 0 ? elemTop + elem.offsetHeight : elemTop - tooltip.offsetHeight;
    const elemLeft = elem.getBoundingClientRect().left;
    const tooltipLeft = (elemLeft + elem.offsetWidth - tooltip.offsetWidth) / 2 < 0 ? 0 : (elemLeft + elem.offsetWidth - tooltip.offsetWidth) / 2;

    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;
}