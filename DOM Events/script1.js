// addresses the dom element with id "enter"
const button = document.getElementById("enter");
// addresses the dom element with id "userinput"
const input = document.getElementById("userinput");
// selects the first ul dom element
const ul = document.querySelector("ul");
// selector for li elements
const li = document.getElementsByTagName('li');

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

liEvent();
buttonListElement();

function inputLength() {
  return input.value.length;
}

function createListItem() {
    // create li element on DOM
    const li = document.createElement("li");
    
    const button = document.createElement('button');

    // create checkbox with li on DOM
    // const cb = document.createElement("input");
    // cb.type = "checkbox";
    // cb.checked = false;
    // cb.className = "checked";
  
    // attach checkbox to every new list item
    li.appendChild(button);
    
    // attach a text node to the li and give it whatever is entered into the userinput field
    li.appendChild(document.createTextNode(input.value));
    // attach the new li to the end of the ul
    ul.appendChild(li);

    button.innerHTML = "delete";
    // sets userinput value to an empty string
    input.value = ("");
}
  
function addListAfterClick() {
    // if userinput is not empty, do this
  if(inputLength() > 0) {
    createListItem();
  }
}

function addListAfterKeypress(event) {
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