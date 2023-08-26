"use strict"

const signUpBtn = document.querySelector('.sign-up-btn');
const signInBtn = document.querySelector('.sign-in-btn');

signUpBtn.onclick = () => document.body.classList.add("active");
signInBtn.onclick = () => document.body.classList.remove("active");

//Сделать доп страничку со 2 шагом при регистрации для доп информации. имя там, телефон проч херня
