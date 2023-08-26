"use strict"

const niggas = [
  { name: "hustla", say: "Wuzup, yo?" },
  { name: "OG", say: "Gimme your money man!"}
];

function niggerSay() {
  setTimeout(() => {
    let output = '';
    niggas.forEach(nigga => {
      output += `<li>${nigga.say}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function addNiggaMan(man) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      niggas.push(man);
      //resolve();
    }, 2000);
  })
}

addNiggaMan({name: "SnopaShoota", say: "Black lies on mattrass"})
.then(niggerSay);
