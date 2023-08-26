"use strict"

async function loadJson(url) {
  const response = await fetch(url);
  if(response.status == 200) {
    const data = await response.json();
    return data;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
.catch(err => {
  console.error("Error:", err.message);
});;
