"use strict"

let links = document.body.querySelectorAll('a[href*="://"]');
for(let link of links) {
    if(link.getAttribute("href") != "http://internal.com/test")
      link.style.color = 'orange';
}

let link = document.querySelector('a');
link.style.color = 'orange';