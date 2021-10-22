// addresses the dom element with id "enter"
const button = document.getElementById("enter");
// addresses the dom element with id "userinput"
const input = document.getElementById("userinput");
// selects the first ul dom element
const ul = document.querySelector("ul");
// selector for li elements
const li = document.getElementsByTagName('li');

button.addEventListener("click", Onclick);
input.addEventListener("keypress", addElement);

liEvent();
buttonListElement();

function inputLength() {
  return input.value.length;
}

function createListItem() {
    const li = document.createElement("li");
    const button = document.createElement('button');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button);
    button.innerHTML = "delete";
    input.value = ("");

    liEvent();
    buttonListElement();
}
  
function Onclick() {
  if(inputLength() > 0) {
    createListItem();
  }
}

function addElement() {
  // if userinput is not empty, do this
  if(inputLength() > 0 && event.keyCode === 13) {
    createListItem();
  }
}


function liEvent() {
  for(let i=0; i<li.length; i++) {
    li[i].addEventListener('click', changeClass)
  }
}

function changeClass() {
  this.classList.toggle('done');
}

function buttonListElement() {
  const button = document.querySelectorAll('li button');
  for(let i=0; i<button.length; i++) {
    button[i].addEventListener('click', clearElement)
  }
}


function clearElement() {
  for(let i=0; i<li.length; i++) {
    this.parentNode.remove()
  }
}