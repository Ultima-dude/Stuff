Function.prototype.defer = function( ms) {
  const f = this;
  return function wrapper(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
}

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(3, 7);
