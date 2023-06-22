"use strict"

class List {
    constructor(element) {
        this._elem = element;

        element.addEventListener('click', this.highlitItems.bind(this));
        element.addEventListener('mousedown', (event) => event.preventDefault());
    }

    highlitItems(event) {

        if(event.target.tagName != 'LI' || !this._elem.contains(event.target))
            return;

        let target = event.target;

        if(event.ctrlKey) {
            target.classList.toggle('selected');
        }
        else {
            Array.from(this._elem.querySelectorAll('.selected')).forEach(item => item.classList.remove('selected'));
            target.classList.add('selected');
        }
    }
}

let list = new List(document.getElementById('ul'));