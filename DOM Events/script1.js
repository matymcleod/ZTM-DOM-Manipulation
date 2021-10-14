// addresses the dom element with id "enter"
const button = document.getElementById("enter");
// addresses the dom element with id "userinput"
const input = document.getElementById("userinput");
// selects the first ul dom element
const ul = document.querySelector("ul");


button.addEventListener("click", function() {
  // if userinput is not empty, do this
  if(input.value.length > 0) {
    // create li
    const li = document.createElement("li");
    // attach a text node to the li and give it whatever is entered into the userinput field
    li.appendChild(document.createTextNode(input.value));
    // attach the new li to the end of the ul
    ul.appendChild(li);
    // set userinput value to an empty string
    input.value = ("");
  }
});