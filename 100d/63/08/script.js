"use strict"

const names = ["Zumwai", "Ultima-dude"];
const url = "https://api.github.com/users/"

async function getUsers(names) {
  const res = new Array();

  for(const name of names) {
    const result = fetch(url + name)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        return null;
      }
    });
    res.push(result);
  }

  const results = await Promise.all(res);

  return results;
}

console.log(getUsers(names));
