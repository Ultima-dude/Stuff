"use strict";

let worker = {
    slow(min, max) {
        globalThis.alert(`Called with ${min}, ${max}`);
        return min + max;
    }
};

function cachingDecorator(func) {
    let cache = new Map();

    return function () {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return [].join.call(args);
}

worker.slow = cachingDecorator(worker.slow);

globalThis.alert(worker.slow(1, 3));
globalThis.alert("Again: " + worker.slow(1, 3));

globalThis.alert(worker.slow(2, 3));
globalThis.alert("Again: " + worker.slow(2, 3));
