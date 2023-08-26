"use strict"

const searchUrl = 'https://api.waifu.im/search';

const waifuBtn = document.getElementById('waifu-btn');
const container = document.querySelector('.container');
const waifuContainer = document.querySelector('.waifu-container');
const loadingdiv = document.querySelector('.loading');
const tags = new Array();
let isLoading = false;

const tagsUrl = 'https://api.waifu.im/tags';
const tagsContainer = document.querySelector('.tag-container');
const showTagsBtn = document.getElementById('tags-btn');
let tagsList = undefined;

//Search

waifuBtn.addEventListener('click', () => {
  if(isLoading) {
    loadingdiv.textContent = "Обожди сталкер, твоя вайфу еще идет";
    return;
  }

  const queryParams = new URLSearchParams({
    //gif: true,
  });

  if(tags.length) {
    for(let tag of tags) queryParams.append('included_tags', tag);
  }

  const requestUrl = `${searchUrl}?${queryParams}`;

  //console.log(requestUrl);

  if(waifuContainer.firstElementChild) {
    waifuContainer.firstElementChild.remove();
    loadingdiv.textContent = '';
  }

  getApiJson(requestUrl, showWaifu);
});

function showWaifu({ images: [{url: src}]}) {
  loadingdiv.textContent = 'Вайфу уже вышла!';
  isLoading = true;
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.classList.add('waifu');
  img.onload = () =>  {
    waifuContainer.append(img);
    loadingdiv.textContent = "Вот и вайфу зашла!";
    isLoading = false;
  }
}

// tags

getApiJson(tagsUrl, fillTags);

showTagsBtn.addEventListener('click', showTags);
tagsContainer.addEventListener('click', markTags);

function getTags(fn) {
  return new Promise(function(resolve) {
    resolve(fn());
  })
}

function showTags() {
  if(!tagsList) return;

  tagsList.classList.toggle('show');
}

function markTags(event) {
  if(!tagsList) return;

  const target = event.target.closest('.tag-item');

  if(!target) return;
  //console.log("Тут могла быть картинка жопы");
  target.classList.toggle('marked');

  changeTags(target);
}

function changeTags(elem) {
  const value = elem.textContent;
  if(tags.includes(value)){
    tags.splice(tags.indexOf(value), 1);
  } else {
    tags.push(value);
  }
}

function fillTags(tags) {
  //console.log(tags);
  const list = document.createElement('ul');

  list.classList.add('tags-list');
  tagsContainer.append(list);

  for(const [key, value] of Object.entries(tags)){
    let tagCategory = document.createElement('li');
    let categoryList = document.createElement('ul');

    tagCategory.classList.add('tag-category');
    tagCategory.textContent = key;
    list.append(tagCategory);

    categoryList.classList.add('category-list');
    tagCategory.append(categoryList);

    for(const item of value) {
      let tagItem = document.createElement('li');
      tagItem.classList.add('tag-item');
      tagItem.textContent = item;
      categoryList.append(tagItem);
    }
  }

  tagsList = list;
}


//Get json

function getApiJson(url, fn) {
  fetch(url)
    .then( response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error("Request failed with status code: " + response.status);
      }
    })
    .then( data => {
      fn(data);
    })
    .catch( error => {
      console.error('An error occured:', error.message);
    })
}
