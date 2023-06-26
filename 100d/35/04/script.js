"use strict"

const deposit = document.forms.calculator.elements.money;
const months = document.forms.calculator.elements.months;
const percent = document.forms.calculator.elements.interest;
const moneyBefore = document.getElementById("money-before");
const moneyAfter = document.getElementById("money-after");
const divAfter = document.getElementById("height-after");

calcDivHeight();
calcFinalSum();

deposit.addEventListener('input', calcFinalSum);
months.addEventListener('change', calcFinalSum);
percent.addEventListener('input', calcFinalSum);

function calcFinalSum() {
    calcDivHeight();

    moneyBefore.textContent = deposit.value;
    moneyAfter.textContent = Math.round(deposit.value * (1 + percent.value / 100) ** (months.value / 12))
}

function calcDivHeight() {
    divAfter.style.height = `${100 + Number(percent.value)}px`;
}
