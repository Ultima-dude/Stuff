"use strict"

fetch('https://api.github.com/users/Zumwai')
.then(response => response.json())
.then(githubUser => {
  let img = document.createElement('img');
  img.setAttribute('src', githubUser.avatar_url);
  img.classList.add("promise-avatar-example");
  document.body.append(img);

  setTimeout(() => img.remove(), 4000);
})
