// addresses the dom element with id "enter"
const button = document.getElementById("enter");
// addresses the dom element with id "userinput"
const input = document.getElementById("userinput");
// selects the first ul dom element
const ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListItem() {
    // create li
    const li = document.createElement("li");
    // attach a text node to the li and give it whatever is entered into the userinput field
    const cb = document.createElement("input")
    li.appendChild(document.createTextNode(input.value));
    // attach the new li to the end of the ul
    ul.appendChild(li);
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// if a list item is clicked on it toggles the .done class

// add buttons next to each list item to delete the item when clicked

// when adding a new list item, automatically add a delete button