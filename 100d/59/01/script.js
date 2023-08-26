"use strict"

let isProcess = false;
const result = document.getElementById('result');

document.getElementById('run').addEventListener('click', () => {
  if(isProcess){
    result.textContent = "Обожди сталкер, задача еще выполняется!";
    return
  }

  isProcess = true;
  result.textContent = "Обрабатываю";

  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      const habar = Math.floor(Math.random() * 4) + 2;
      habar > 3 ? resolve(habar) : reject(habar);
    }, 5000);
  });

  promise
    .then( value => {
      result.textContent = `Удачная ходка, сталкер! На выручку с ${value} артефактов ты сможешь накупить море колбасы и водки`;
    })
    .catch( value => {
      result.textContent = `Не фартануло. C ${value} артов особо много не помеешь`;
    })
    .finally(() => isProcess = false);
});
