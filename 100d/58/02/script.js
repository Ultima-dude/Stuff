const stocks = {
  fruits: ["Strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

let isOpen = true;

function order(time, work) {
  return new Promise(function(resolve, reject) {
    if(isOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    }else{
      reject(console.log('shop is closed'));
    }
  })
}

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
.then(() => {
  return order(0, () => {
    console.log("Production started");
  })
})
.then(() => {
  return order(2000, () => {
    console.log("The fruit was chopped");
  })
})
.then(() => {
  return order(1000, () => {
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
  });
})
.then(() => {
  return order(1000, () => {
    console.log("start the machine");
  })
})
.then(() => {
  return order(2000, () => {
    console.log(`ice cream placed on ${stocks.holder[0]}`)
  });
})
.then(() => {
  return order(3000, () => {
    console.log(`${stocks.toppings[0]} was selected`);
  })
})
.then(() => {
  return order(1000, () => {
    console.log("ice cream was served");
  })
});
