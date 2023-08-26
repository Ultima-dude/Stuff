let url = 'https://api.rule34.xxx/index.php';

const tags = {
  page: "dapi",
  s: "post",
  q: "index",
  limit: 10,
  json: 1
};

const optionsForm = document.forms.options;
const tagsInput = optionsForm.elements.tags;
const pid = optionsForm.elements.pid;
const limit = optionsForm.elements.limit;

optionsForm.addEventListener('submit', applyOptions);

function applyOptions(event) {
  event.preventDefault();

  if(pid.value == '0') {
    tags.pid = Math.floor(Math.random() * 1000);
  } else {
    tags.pid = Number(pid.value);
  }

  tags.limit = Number(limit.value) || 1;

  tags.tags = tagsInput.value;

  alert("tags applied");

  loadImgs(`${url}?${new URLSearchParams(tags)}`, loadPreviews);
}

const imgContainer = document.querySelector('.img-container');
const mainImg = document.querySelector('.main-img');
const isLoading = false;

imgContainer.addEventListener('click', showFullImg);

function showMore() {
  console.log(tags.pid);
}

function showFullImg(event) {
  const target = event.target;

  if(target.tagName != "IMG") return;

  alert("Картинка начала грузиться");
  mainImg.setAttribute("src", target.dataset.src);
  mainImg.onload = () => alert("Загружено");
}


function loadPreviews(data) {
  for(const item of data) {
    const img = document.createElement('img');
    const previewContainer = document.createElement('div');

    img.setAttribute('src', item.preview_url);
    img.setAttribute('data-src', item.sample_url);
    previewContainer.classList.add('preview-container');

    imgContainer.append(previewContainer);
    previewContainer.append(img);
  };
}

function loadImgs(url, callback) {
  fetch(url)
    .then(response => {
      console.log('test');
      if(response.ok){
        return response.json();
      } else {
        throw new Error('Request failed with code: ' + response.status);
      }
    })
    .then(data => {
      console.log(data);
      callback(data);
    })
    .catch(error => {
      console.error("An error occured:", error.message);
    });
}
