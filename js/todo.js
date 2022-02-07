const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo() {}

function paintToDo(newTodo) {
  const listInHtml = document.createElement("li");
  const spanInHtml = document.createElement("span");
  spanInHtml.innerText = newTodo;

  const buttonInHtml = document.createElement("button");
  buttonInHtml.innerText = "❌";
  buttonInHtml.addEventListener("click", deleteToDo);
  listInHtml.appendChild(spanInHtml);
  listInHtml.appendChild(buttonInHtml);
  toDoList.appendChild(listInHtml);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
