"use strict"

const test = {
  images: [{test1: "test1", url: "Here we are!"}, {test2: "test2"}, {test3: "test3"}],
  someRndSht: "llx",
}

function showUrl({images: [{url: src}]}) {
  console.log(src);
  console.log(images);
  console.log(url);
}

showUrl(test);
