"use strict";

window.addEventListener("load", start);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function start() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
  newToDo.focus();
}

function addToDo() {
  //   const listItem = document.createElement("li");
  //   const listText = document.createElement("span");
  //   const listBtn = document.createElement("button");

  //   listBtn.textContent = "Delete";
  //   listText.textContent = newToDo.value;

  //   listItem.appendChild(listText);
  //   listItem.appendChild(listBtn);
  //   list.appendChild(listItem);

  newToDo.focus();

  if (newToDo.value == "") {
    document.querySelector("h3").textContent = "Input invalid";
    newToDo.focus();
  } else {
    document.querySelector("h3").textContent = "";
    const myHTML = `
<li>
<span> ${newToDo.value}
</span>
<button>Delete</button>
<button>Replace</button>
</li>
`;

    list.insertAdjacentHTML("beforeend", myHTML);

    list
      .querySelector("li:last-child button:nth-child(2)")
      .addEventListener("click", deleteToDo);

    list
      .querySelector("li:last-child button:nth-child(3)")
      .addEventListener("click", editToDo);

    newToDo.value = "";
    newToDo.focus();
  }
}

function deleteToDo() {
  this.parentNode.remove();
  newToDo.focus();
}

function editToDo() {
  this.parentNode.querySelector("span").textContent = newToDo.value;
  newToDo.value = "";
  newToDo.focus();
}
