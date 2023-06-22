"use strict";

let listOfCities = {
    Tokyo: 37732,
    Jakarta: 33756,
    Daly: 32226,
    Guangzhou: 26940,
    Mumbai: 24973,
    Moscow: 17332
};

function getMostInhabitedCities(obj, num) {
    return Object.entries(obj)
        .sort((cityA, cityB) => cityB[1] - cityA[1])
        .slice(0, num);
}

console.log(getMostInhabitedCities(listOfCities, 3));
