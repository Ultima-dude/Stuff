"use strict"

function loadScript(src, callback) {
  const script = document.createElement('script');
  script.setAttribute("src", src);
  script.onload = () => callback(script);
  document.body.append(script);
}

function appendScript(event) {
  if(inputScript.value) event.preventDefault();
  //console.log("i'm here");
  loadScript(inputScript.value, () => testFunc(test));
}

const appendForm = document.forms.append;
const inputScript = appendForm.elements.script;
const callbackFunc = appendForm.elements.callback;
const addScriptBtn = appendForm.elements.submit;
const test = 4;


appendForm.addEventListener('submit', appendScript);
