"use strict"

const obj = {};
const arr = [];
const set = new Set();
const map = new Map();
const date = new Date();
const str = "hello";
const datestring = JSON.stringify(date);
const number = 2;
const double = 2.1;
const nul = null;
const un = undefined;
const nan = Number(str);
const inf = number / 0;
const bool = true;

console.log(typeof str + ":hello");
console.log(typeof number + ":0");
console.log(typeof double + ":double");
console.log(typeof nul + ":null");
console.log(typeof un + ":undefined");
console.log(typeof nan + ":nan");
console.log(typeof inf + ":inf");
console.log(typeof arr + ":arr");
console.log(typeof obj + ":obj");
console.log(typeof defineType + ":func");
console.log(typeof map + ":map");
console.log(typeof set + ":set");
console.log(typeof date + ":date");
console.log(typeof datestring + ":datestring");
console.log();

function defineType(val) { 
  const type = typeof val; 

  if(val != val) return 'NaN';
  if(val === null) return 'null';
  if(type == 'object') {
    //TODO привести прототип к строке и вывести?
  }

  if(type == "string") {
    let result = '';
    //TODO Прописать возможно ли, что эта строка с цифрой, хуевой цифрой или строка Date
  result += 'string';
    return result;
 }

  if(type == 'number') {
    if(!val.isFinite()) return 'infinity';
    
  }
}

console.log(defineType(nul));
console.log(defineType(un));
