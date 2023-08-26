"use strict"

const names = ["Zumwai", "Ultima-dude"];
async function getUsers(names) {
  const results = new Array();

  for(const name of names) {
    results.push(fetch(`https://api.github.com/users/${name}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error("Error occured: " + response.status);
      }
    })
    .catch(err => console.error("Err: ", err.message)));
  }

  const result = await Promise.all(results)
  return result;
}

getUsers(names)
.then(res => console.log(res));
