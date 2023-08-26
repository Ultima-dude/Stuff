"use strict"

const url = 'https://api.waifu.pics/nsfw/';
const categories = ["waifu", "neko", "trap", "blowjob"]

async function getImages(num) {
  const response = await fetch(url + categories[num]);
  const data = await response.json();

  return data;
}

function loadImg(num) {
  getImages(num)
  .then(img => {
    appendImg(img.url);
  })
}

function appendImg(src) {
  const img = createImg(src);

  document.body.append(img);
}

function createImg(src) {
  const img = document.createElement('img');

  img.setAttribute("src", src);
  img.style.maxWidth = "100%";

  return img;
}

setInterval(() => loadImg(Math.floor(Math.random() * 4)), 3000);
