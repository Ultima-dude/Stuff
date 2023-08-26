"use strict"

class HttpError extends Error {
  constructor(response){
    super(`${response.status} for ${response.url}`);
    this.name = this.constructor.name;
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if(response.status == 200){
    const json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  const name = prompt("Введите имя", "iliakan");

  try {
    const response = await loadJson(`https://api.github.com/users/${name}`);
    const user = await response.name;
    alert(`Полное имя: ${user}`);
    return user;
  } catch(err) {
    if(err instanceof HttpError && err.response.status == 404) {
      alert("Такого пользователя нет, повторите ввод");
      demoGithubUser();
    } else {
      throw err;
    }
  }
}

demoGithubUser();
