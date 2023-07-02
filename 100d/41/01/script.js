"use strict"

const addBtn = document.getElementById("add-content-btn");
const tooltip = document.createElement('div');
const contentContainer = document.querySelector('.content-container');
const newContentContainer = document.getElementById('container');
const observer = new MutationObserver(addNewContentTooltips);

tooltip.classList.add('tooltip');
observer.observe(container, {childList: true});

function showTooltip(event) {
    if (!event.target.closest('.show-tooltip')) return;

    const target = event.target.closest('.show-tooltip');

    tooltip.textContent = target.dataset.tooltip;
    target.append(tooltip);
    adjustTooltip(target, tooltip);
}

function adjustTooltip(elem, tooltip) {
    const top = elem.getBoundingClientRect().top;
    const left = elem.getBoundingClientRect().left;

    tooltip.style.top = tooltip.offsetHeight > top ? `${top + elem.offsetHeight}px` : `${top - tooltip.offsetHeight}px`;
    tooltip.style.left = (left + (elem.offsetWidth - tooltip.offsetWidth) / 2) > 0 ? `${left + (elem.offsetWidth - tooltip.offsetWidth) / 2}px` : "0px";
}

function hideTooltip(event) {
    if(!event.target.contains(tooltip)) return;

    tooltip.remove();
}

function addPopupTooltips(elem) {
    elem.addEventListener('mouseover', showTooltip);
    elem.addEventListener('mouseout', hideTooltip);
}

function addArticle() {
    container.insertAdjacentHTML('beforeend', `<div class="content-container"><section>Lorem Ipsum</section><p>Lorem ipsum dolor sit <span class="show-tooltip" data-tooltip="amet">amet</span>, consectetur adipiscing elit. Sed consectetur <span class="show-tooltip" data-tooltip="est">est</span> sit amet augue mollis ullamcorper. Nullam velit elit, blandit eget <span class="show-tooltip" data-tooltip="facilisis">facilisis</span> vel, sodales vitae nunc. Fusce vel dapibus orci.</p></div>`);
}

function addNewContentTooltips(mutationRecords) {
    for(let mutationRecord of mutationRecords) {

        for(let node of mutationRecord.addedNodes) {
            if(!(node instanceof HTMLElement)) continue;

            if(node.matches('.content-container')) addPopupTooltips(node);
        }
    }
}

addPopupTooltips(contentContainer);
addBtn.addEventListener('click', addArticle);
