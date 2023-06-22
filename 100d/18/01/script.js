class Button {
  constructor(elem) {
    this._elem = elem;
  }
  
  handleEvent(event) {
    console.log(event.type);
    Button[`on${event.type[0].toUpperCase() + event.type.slice(1)}`](this._elem);
    if(question && event.type == 'click')
      clearTimeout(question);
  }
  
  static onClick(elem) {
    elem.classList.toggle("pushed");
    if(elem.classList.contains("pushed"))
      elem.textContent = "Да ты молодец няша";
    else
      elem.textContent = "Да ты пидор епта";
    Button.onMouseout(elem);
  }

  static onMouseover(elem) {
    let popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = `А может ${elem.textContent.slice(3, -5)}?`;
    elem.after(popup);
  }

  static onMouseout(elem) {
    document.querySelector('.popup').remove();
  }
}

function renderQuestion() {
    let questionPopup = document.createElement('div');
    let closeBtn = document.createElement('div');
    questionPopup.className = 'popupQuestion';
    closeBtn.className = 'closeBtn'
    questionPopup.textContent = 'Че не жмешь, пидор чтоль?'
    closeBtn.textContent = '[x]';
    document.body.append(questionPopup);
    questionPopup.prepend(closeBtn);

    closeBtn.addEventListener('click', () => questionPopup.remove());
}

let button = new Button(document.querySelector('button'));
let question = setTimeout(renderQuestion, 3000);  
button._elem.addEventListener('click', button);
button._elem.addEventListener('mouseover', button);
button._elem.addEventListener('mouseout', button);