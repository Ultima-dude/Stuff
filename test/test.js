"use strict"

describe("pow", function() {
  describe("Возводим х в 4 степень", function() {
    function makeTest(x) {
      let expected = x * x * x * x;
      it(`${x} в степени 4 будет равно ${expected}`, function() {
        chai.assert.equal(pow(x, 4), expected);
      });
    }

    for(let i = 2; i < 6; i++)
      makeTest(i);
  });

  it("Для отрицательных возвращаем NaN", function() {
    chai.assert.isNaN(pow(-1, 4));
  });

  it("Для дробных возвращает NaN", function() {
    chai.assert.isNaN(pow(1, 1.5));
  });
});
