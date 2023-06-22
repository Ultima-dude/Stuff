"use strict"

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

let test = {
    "test1": {},
    "test2": {},
    "test3": {}
};

let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.prepend(container);

function createTree(container, obj) {
    let list = document.createElement('ul');
    container.append(list);

    for(let item in obj) {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);

        if(obj[item]) {
            createTree(listItem, obj[item]);
        }
    }
}

createTree(container, data);