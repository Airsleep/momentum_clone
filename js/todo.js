const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

// function deleteToDoFilter(delList)) {
//   return delList.id !== delId;
// }

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const listInHtml = document.createElement("li");
  listInHtml.id = newTodo.id;
  const spanInHtml = document.createElement("span");
  spanInHtml.innerText = newTodo.text;

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

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}
