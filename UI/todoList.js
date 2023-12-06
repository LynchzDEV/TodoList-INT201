function showTodoItem(newId, newDesc) {
  const todoDiv = document.createElement("div");
  const descPara = document.createElement("p");
  const statusBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  todoDiv.classList.add("TodoItem");
  todoDiv.id = newId;
  descPara.textContent = newDesc;
  statusBtn.textContent = "Not Done";
  removeBtn.textContent = "Remove";

  todoDiv.appendChild(descPara);
  todoDiv.appendChild(statusBtn);
  todoDiv.appendChild(removeBtn);

  const listTodo = document.getElementById("listTodo");
  listTodo.appendChild(todoDiv);
}

function showNumberOfDone(numberOfDone) {
  const doneElement = document.getElementById("done");
  doneElement.textContent = `Number of Done: ${numberOfDone}`;
}

function showNumberOfNotDone(numberOfNotDone) {
  const notDoneElement = document.getElementById("notDone");
  notDoneElement.textContent = `Number of Not Done: ${numberOfNotDone}`;
}

function removeTodoItem(removeId) {
  const todoDiv = document.getElementById(removeId);
  if (todoDiv) {
    todoDiv.remove();
  }
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem };
