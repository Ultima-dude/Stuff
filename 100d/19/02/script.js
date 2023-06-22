class Gallery {
    constructor(elem) {
        this._elem = elem;
    }

    handleEvent(event) {
        this.changeLargeImage(event);
    }

    get elem() {
        return this._elem;
    }

    changeLargeImage(event) {
        let target = event.target.closest('li');
        let largeImage = document.getElementById('largeImg');

        if(!target || !this._elem.contains(target))
            return;

        event.preventDefault();
        largeImage.setAttribute('src', target.firstElementChild.getAttribute('href'));
    }
}

let gallery = new Gallery(document.getElementById('gallery'));
gallery.elem.addEventListener('click', gallery);