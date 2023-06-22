let currentElem = null;

table.onmouseover = function(event) {
  if(currentElem)
    return;

  let target = event.target.closest('td');

  if(!target)
    return;

  if(!table.contains(target))
    return;

  currentElem = target;
  target.style.background = 'pink';
  text.value += "mouseover " + target.tagName + "\n";
  text.scrollTop = text.scrollHeight;
};

table.onmouseout = function(event) {
  if(!currentElem)
    return;

  let relatedTarget = event.relatedTarget;

  while(relatedTarget) {
    if(relatedTarget == currentElem)
      return;
    
    relatedTarget = relatedTarget.parentNode;
  }

  currentElem.style.background = '';
  text.value += "mouseout " + currentElem.tagName + "\n";
  text.scrollTop = text.scrollHeight;
  currentElem = null;
}