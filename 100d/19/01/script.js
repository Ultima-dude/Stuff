"use strict"

class Contents {
    constructor(elem) {
        this._elem = elem;
    }

    handleEvent(event) {
        if(event.target.dataset.type)
            Contents[`push${event.target.dataset.type[0].toUpperCase() + event.target.dataset.type.slice(1)}`](this._elem, event);
    }

    get elem() {
        return this._elem;
    }

    static pushAnchor(elem, event) {
        let target = event.target.closest('a');

        if(!target || !elem.contains(target))
            return;

        event.preventDefault();

        if(confirm("Чо реально уходишь?"))
            location.href = target.getAttribute("href");
    }

    static pushButton(elem, event) {
        if(event.target.tagName != 'BUTTON' || !elem.contains(event.target))
            return;

        let target = event.target;

        target.textContent = "Push me harder!!!";
        if(target.className)
            target.remove();
        target.className = 'pushed';
    }
}

let contents = new Contents(document.getElementById('contents'));
contents.elem.addEventListener('click', contents);