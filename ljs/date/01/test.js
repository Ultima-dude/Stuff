"use strict"

/*
let time = new Date();

alert(time.getHours());
alert(time.getDay());
*/

/*
let start = Date.now()

for(let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now();

console.log(`Цикл отработал за ${end - start} миллисекунд`);
*/

describe('Задачки для практики Date', function() {
  it("Дата должна быть 20 февраля 2012 года 3 часа 12 минут", function() {
    let date = new Date(2012, 1, 20, 3, 12);
    chai.assert.equal(feb(); date);
    console.log(date);
  });
});
