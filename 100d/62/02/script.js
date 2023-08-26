"use strict"

const tags = {
  page: "dapi",
  s: "post",
  q: "index",
  limit: 10,
  tags: "sfw",
  pid: 0,
  json: 1
}

const favTags = new Set();

if(localStorage.getItem("favTags")) {
  const tags = localStorage.getItem("favTags").split(",");
  for(const tag of tags) favTags.add(tag);
}

function concatTags() {
  let str = "";

  for (const tag of favTags) str += `${tag},`;

  return str.substring(0, str.length - 1);
}

const moreBtn = document.getElementById('show-more');
const optsBtn = document.getElementById('show-options');
const optsForm = document.forms.optionsForm;
const mainContainerShowBtn = document.querySelector(".main-container-show-btn");

moreBtn.addEventListener('click', showMore);
optsBtn.addEventListener('click', showOpts);
optsForm.addEventListener('submit', applyOptions);
mainContainerShowBtn.addEventListener('click', showContainers);

function showMore() {
  appendImgsContainer();
  tags.pid++;
}

function showOpts() {
  document.querySelector('.options-container').classList.toggle('active');
}

function applyOptions(event) {
  event.preventDefault();

  tags.tags = optsForm.elements.tags.value;
  tags.limit = Number(optsForm.elements.count.value);
  tags.pid = 0;

  showOpts();
  showMore();
}

function showContainers(event) {
  document.getElementById("main-container").classList.toggle("show");
  event.target.textContent = "[-]";
}

async function getImgJson() {
  const response = await fetch(`https://api.rule34.xxx/index.php?${new URLSearchParams(tags)}`);
  const data = await response.json();

  console.log(data);

  return data;
}

function appendImgsContainer() {
  getImgJson()
    .then(data => {
      const container = createContainer();

      for(const item of data) {
        const img = createImg("preview-img", item.preview_url, item.sample_url);

        img.style.maxWidth = "100%";

        document.querySelector('.previews-container').append(container);
        container.lastElementChild.append(img);
      }
    });
}

function createContainer() {
  const container = document.createElement('div');
  container.classList.add("container");

  container.addEventListener('click', prepareFullImg);

  addContainerBtns(container);

  return container;
}

function addContainerBtns(elem) {
  const heading = document.createElement('h3');
  const closeBtn = document.createElement("button");
  const div = document.createElement('div');

  createTagFavBtn(tags.tags, heading, "fav-tag");

  closeBtn.textContent = "[+]";
  closeBtn.classList.add("show-more");
  div.classList.add('preview-container');

  elem.append(heading);
  elem.append(closeBtn);
  elem.append(div);
}

function createTagFavBtn(str, elem, className) {
  const tags = str.split(" ");
  for (const tag of tags) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const truncTag = tag.split("_").join(" ");

    div.classList.add('tag');
    span.textContent = truncTag; 
    div.append(span);
    createFavBtn(div, className, truncTag);
    elem.append(div);
  }
}

function createFavBtn(elem, className, tag) {
  const div = document.createElement('div');

  div.classList.add(className);
  if(favTags.has(tag)) div.classList.add("active");
  div.insertAdjacentHTML('beforeend',
  `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#33363F" stroke-width="2"/>
  </svg>`);

  div.addEventListener('click', addFavTag);
    elem.append(div);
}

function addFavTag(event) {
  const target = event.target.closest(".fav-tag");
  if(!target) return;

  toggleTag(target, target.previousElementSibling.textContent);
}

function toggleTag(elem, tag) {
  elem.classList.contains('active') ? unSubscribeToFavTag(elem, tag) : subscribeToFavTag(elem, tag);
}

function subscribeToFavTag(elem, tag) {
  elem.classList.add("active");
  favTags.add(tag);
  localStorage.setItem("favTags", concatTags());
}

function unSubscribeToFavTag(elem, tag) {
  elem.classList.remove("active");
  favTags.delete(tag);
  localStorage.setItem("favTags", concatTags());
}

function createImg(className, src, fullSrc) {
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute("data-src", fullSrc);
  img.classList.add(className);

  return img;
}

function prepareFullImg(event) {
  const target = event.target;

  if(target.tagName != 'IMG') return;

  const img = document.createElement('img');
  img.setAttribute('src', target.dataset.src);

  img.onload = () => showFullImg(img);

  img.addEventListener('click', clearImg);
}

//TODO Сделать с этим что-то адекватное, скрытие на контейнере (тупо [x] [+]), кнопки скрытия, лайков на картинке 
function showFullImg(img) {
  const div = document.createElement('div');
  const container = document.createElement("div");
  container.setAttribute("id", "main");
  div.setAttribute('id', "block");
  div.style.position = "fixed";
  div.style.top = 0;
  div.style.left = 0;
  div.style.zIndex = 1;
  div.style.opacity = 0.5;
  div.style.background = "black";
  div.style.width = "100%";
  div.style.height = "100%";
  container.style.zIndex = 2;
  container.style.position = "fixed";
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.width = "95%";
  container.style.height = "100%";
  container.style.top = 0;
  container.style.left = "2.5%";
  img.style.display = "block";
  img.style.maxWidth = "100%";
  img.style.height = "95%";
  document.body.append(div);
  document.body.append(container);
  container.append(img);
  document.body.style.overflow = "hidden";
}

function clearImg(event) {
  const target = event.target;

  if(target.tagName != "IMG") return;
  target.parentElement.remove();
  document.getElementById("block").remove();
  document.body.style.overflow = "";
}
