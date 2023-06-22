"use strict"

function reverseWords(str) {
  return str.split(' ')
    .map(item => reverseWord(item))
      .join(' ');
}

function reverseWord(str) {
  let lettersArray = str.split('');
  let reversedWord = new String();
  
  for(let i = lettersArray.length; i > 0; i--)
    reversedWord += lettersArray.pop();
  
  return reversedWord;
}