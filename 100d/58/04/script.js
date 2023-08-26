"use strict"

function loadScript(src) {
  return new Promise(function(resolve) {
    const script = document.createElement('script');
    script.setAttribute('src', src);
    script.onload = () => resolve(script);
    document.body.append(script);
  })
}

loadScript('01/first.js')
.then(() => {
  one();
  return loadScript('02/two.js')
})
.then(() => {
  second(two);
  return loadScript('03/three.js')
})
.then(() => {
  test.three();
});
