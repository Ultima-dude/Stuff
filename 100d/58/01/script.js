"use strict"

function order(fruit_name, call_production) {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
}

function production() {
  setTimeout(() => {
    console.log("Production started");
    setTimeout(() => {
      console.log("the fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("the machine was started");
          setTimeout(() => {
            console.log(`ice cream was placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was aaded as toppings`);
              setTimeout(() => {
                console.log("serve ice cream");
              },2000)
            },3000);
          },2000);
        },1000);
      },1000);
    }, 2000);
  }, 0);
  
}

const stocks = {
  fruits: ["Strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

order(0, production);
