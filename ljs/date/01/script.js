"use strict"

//Задачка 1

let date = new Date(2012, 1, 20, 3, 12);

console.log(date);

//Задачка 2

function getWeekDay(date) {
  let weekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return weekDay[date.getDay()];
}

console.log(getWeekDay(date));

//Задачка 3

function getLocalDay(date) {
  let localDay = date.getDay();
  return localDay ? localDay : 7;
}

console.log(getLocalDay(date));

//Задачка 4

function getDateAgo(date, days) {
  let day = 24 * 3600 * 1000;
  return new Date(date.getTime() - (days * day));
}

console.log(getDateAgo(date,1));
console.log(getDateAgo(date,2));
console.log(getDateAgo(date,365));

//Задачка 5

function getLastDayOfMonth(year, month) {
  let day = 24 * 3600 * 1000;
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2012, 12));

//Задачка 6

function getSecondsToday() {
  let date = new Date();
  let day = date - new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.ceil(day / 1000);
}

console.log(getSecondsToday());

//Задачка 7

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.ceil((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());
console.log(24 * 60 * 60);

//Задачка 8

function formatDate(date) {
  let now = new Date();
  let dif = now - date;

  if(dif < 1000) {
    return `Прямо сейчас`;
  }else if (dif < 60000) {
    return `${Math.ceil(dif / 1000)} сек. назад`;
  }else if(dif < 60000 * 60) {
    return `${Math.ceil(dif / 60000)} мин. назад`;
  }

  return String(date.getDate()) + "." + String(date.getMonth() + 1) + "." +
    String(date.getFullYear()).slice(2) + " " + String(date.getHours()) + ":"
    + String(date.getMinutes());
}

console.log(formatDate(date));
