"use strict"

const url = "https://hypnohub.net/index.php";
const tags = {
  page: 'dapi',
  s: 'post',
  q: 'index',
  id: 'id=175869',
  json: 1
};

const requestUrl = `${url}?${new URLSearchParams(tags)}`;

fetch(requestUrl)
.then((response) => {
  if(response.ok){
    return response.json();
  } else {
    throw new Error("Request failed with code: " + response.status);
  }
})
.then((data) => {
  console.log(data);
})
.catch(err => {
  console.error("An error occured:", err.message);
});
