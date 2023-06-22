"use strict"

function sequence(start = 0, step = 1) {
    return function() {
        start += step;
        return start - step;
    }
}
