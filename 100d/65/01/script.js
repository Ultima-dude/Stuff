"use strict"

const names = ["Zumwai", "Ultima-dude"];
async function getUsers(names) {
  const res = new Object();

  for (const user of names) {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if(response.ok) {
        const data = await response.json();
        res[user] = data.name;
      } else {
        throw new Error ("Error occured: " + response.status);
      }
    } catch (err) {
      console.error("Err:", err.message);
    }
  }

  return res;
}
