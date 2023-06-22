"use strict";

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class Burger {
    constructor(size, ...toppings) {
        this._size = size;
        this._toppings = toppings;
    }

    static _sizeInfo = new Object;
    static _toppingInfo = new Object;

    static addProduct(cost, calories) {
        return Object.create(null, {
            cost: { value: cost },
            calories: { value: calories }
        });
    }

    static calculatePrice() {
        let res = Burger._sizeInfo[this._size].cost;
        res += this._toppings.reduce((acc, item) => acc + Burger._toppingInfo[item].cost, 0);
        return res;
    }

    static calculateCalories() {
        let res = Burger._sizeInfo[this._size].calories;
        res += this._toppings.reduce((acc, item) => acc + Burger._toppingInfo[item].calories, 0);
        return res;
    }

    get orderInfo() {
        console.log(`Burger's cost - ${Burger.calculatePrice.call(this)}; Calories - ${Burger.calculateCalories.call(this)}`);
    }
}

function checkProperties(obj) {
    checkValue(obj._size, "_sizeInfo", `Wrong size ${obj._size}`);

    obj._toppings.forEach(item => checkValue(item, "_toppingInfo",  `Wrong topping ${item}`));
}

function checkValue(value, list, msg) {
    if(!Object.keys(Burger[list]).includes(value)) {
        throw new ValidationError(msg);
    }
}

Burger._sizeInfo.big = Burger.addProduct(100, 40);
Burger._sizeInfo.small = Burger.addProduct(50, 20);

Burger._toppingInfo.cheese = Burger.addProduct(10, 20);
Burger._toppingInfo.salad = Burger.addProduct(20, 5);
Burger._toppingInfo.potato = Burger.addProduct(15, 10);
Burger._toppingInfo.spice = Burger.addProduct(15, 0);
Burger._toppingInfo.mayo = Burger.addProduct(15, 5);

let burger = new Burger("small", "cheese", "mayo", "spice");

try {
    checkProperties(burger);
    burger.orderInfo;
} catch(e) {
    alert(e.message);
    alert(e.name);
}
//burger.big = burger.addProduct("Big", 100, 40);
