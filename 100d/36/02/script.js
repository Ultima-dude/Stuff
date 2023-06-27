"use strict"

let form = document.createElement('form');
form.action = 'https://google.com/search';
form.methid = 'GET';

form.innerHTML = '<input name="q" value="test">';

document.body.append(form);

form.submit();
