"use strict";

//Variables

const btn = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
	quote: "Be yourself; everyone else is already taken.",
	person: "Oscar Wilde"
}, {
	quote: "So many books, so little time",
	person: "Frank Zappa"
}, {
	quote: "A room without books is like a body without a soul",
	person: "Marcus Tullius Cicero"
}, {
	quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
	person: "Bernard M. Baruch"
}, {
	quote: "If you tell the truth, you don't have to remember anything",
	person: "Mark Twain"
}, {
	quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
	person: "Maya Angelou"
}, {
	quote: "It is better to be hated for what you are than to be loved for what you are not.",
	person: " Andre Gide"
}, {
	quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
	person: "Dalai Lama"
}, {
	quote: "The journey of a thousand miles begins with a one step.",
	person: "Lao Tzu"
}];

btn.addEventListener('click', function(){
	let random = Math.floor(Math.random() * quotes.length);

	quote.innerText = quotes[random].quote;
	person.innerText = quotes[random].person;
});
