const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const remove = document.getElementById("c1");

function inputLength() {
	return input.value.length;
};

function createListElement() {
	let li = document.createElement("li");
	let cb = document.createElement("input");
	
	cb.type = "checkbox";
	cb.id = "c1";
	cb.value = name;
	cb.checked = false;

	li.appendChild(cb);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	input.value = "";
}

function addListAfterClick () {
	if (inputLength() > 0){
		createListElement();
	}
}
 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeItemAfterClick() {

}

input.addEventListener("keypress", addListAfterKeypress);

button.addEventListener("click", addListAfterClick);

remove.addEventListener("click", removeItemAfterClick);