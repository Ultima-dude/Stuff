"use strict"

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    const anagrammMap = new Map();
    const unique = new Set();
    const filtered = new Array();

    for (const item of arr) anagrammMap.set(item, item.toUpperCase().split('').sort().join(''));
    //console.log(anagrammMap);

    for (const value of anagrammMap) {
        if (unique.has(value[1])) continue;
        unique.add(value[1]);
        filtered.push(value[0]);
    }
    
    return filtered;
}

console.log(aclean(arr));
