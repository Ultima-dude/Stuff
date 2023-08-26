"use strict"

class Collapse {
    constructor(target, duration) {
        this._target = target.nextElementSibling;
        this._duration = duration;
    }

    handleEvent() {
        this.toggle();
    }

    show() {
        const el = this._target;

        if(el.classList.contains('collapsing') || el.classList.contains('collapse_show')) return;

        el.classList.remove('collapse');
        const height = el.offsetHeight;
        el.style.height = 0;
        el.style.overflow = 'hidden';
        el.style.transition =  `height ${this._duration}ms`;
        el.classList.add('collapsing');
        el.offsetHeight;
        el.style.height = `${height}px`;

        window.setTimeout(() => {
            el.classList.remove('collapsing');
            el.classList.add('collapse');
            el.classList.add('collapse_show');
            el.style.height = '';
            el.style.overflow = '';
            el.style.transition = '';
        }, this._duration);
    }

    hide() {
        console.log('m here');
        const el = this._target;

        if(el.classList.contains('collapsing') || !el.classList.contains('collapse_show'))
            return;


        el.style.height = `${el.offsetHeight}px`;
        el.offsetHeight;
        el.style.height = 0;
        el.style.overflow = 'hidden';
        el.style.transition = `height ${this._duration}ms`;
        el.classList.remove('collapse');
        el.classList.remove('collapse_show');
        el.classList.add('collapsing');

        window.setTimeout(() => {
            el.classList.remove('collapsing');
            el.classList.add('collapse');
            el.style.height = '';
            el.style.overflow = '';
            el.style.transition = '';
        }, this._duration);
    }

    toggle() {
        this._target.classList.contains('collapse_show') ? this.hide() : this.show();
    }
}


const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', new Collapse(button, 350));
    console.log('done');
}
