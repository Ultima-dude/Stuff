"use strict"

const recipeMap = new Map([
    ["Cucmber", 500],
    ["Tomato", 350],
    ["Onion", 50],
]);

for(const vegetable of recipeMap.keys()) console.log(vegetable);

for(const amount of recipeMap.values()) console.log(amount);

for(const entry of recipeMap) console.log(entry);
