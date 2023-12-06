import {
  loadTodos,
  addTodo,
  findTodo,
  removeTodo,
  getTodo,
  clearTodo,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
} from '../lib/todoManagement.js';
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from '../UI/todoList.js';

function handleAddTodo() {
  const inputField = document.querySelector('#addTodo input');
  const newDesc = inputField.value;
  if (newDesc) {
    const newId = addTodo(newDesc);
    showTodoItem(newId, newDesc);

    const newTodoDiv = document.getElementById(newId);
    const doneBtn = newTodoDiv.querySelectorAll('Button')[0];
    const removeBtn = newTodoDiv.querySelectorAll('Button')[1];

    if (doneBtn) {
      doneBtn.addEventListener('click', (event) => {
        notDoneButtonHandler(event);
      });
    }

    if (removeBtn) {
      removeBtn.addEventListener('click', (event) => {
        removeButtonHandler(event);
      });
    }

    updateTodoSummary();
    inputField.value = '';
  }
}

function loadHandler() {
  const storageTodo = localStorage.getItem('todos');
  let todos = [];

  if (storageTodo) {
    todos = JSON.parse(storageTodo) || [];
  }

  if (Array.isArray(todos) && todos.length > 0) {
    loadTodos(todos);
  }

  const currentTodos = getTodo();
  currentTodos.forEach((todo) => {
    showTodoItem(todo.id, todo.desc);
    const newTodoDiv = document.getElementById(todo.id);
    const doneBtn = newTodoDiv.querySelectorAll('Button')[0];
    const removeBtn = newTodoDiv.querySelectorAll('Button')[1];
    if (doneBtn) {
      doneBtn.addEventListener('click', (event) => {
        notDoneButtonHandler(event, todo);
      });
    }

    if (removeBtn) {
      removeBtn.addEventListener('click', (event) => {
        removeButtonHandler(event);
      });
    }
  });

  updateTodoSummary();
}

function beforeUnloadHandler(event) {
  event.preventDefault();
  const currentTodos = getTodo();
  localStorage.setItem('todos', JSON.stringify(currentTodos));
  clearTodo();
}

function notDoneButtonHandler(event, todo) {
  const button = event.target;
  const status = todo.done;
  if (!status) {
    button.innerHTML = 'Done';
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
  } else {
    button.innerHTML = 'Not Done';
    button.style.backgroundColor = '#f8f4f4';
    button.style.color = 'black';
  }

  const todoId = parseInt(button.parentElement.id);
  setItemToDone(todoId);
  updateTodoSummary();
}

function removeButtonHandler(event) {
  const todoId = parseInt(event.target.parentElement.id);

  removeTodoItem(todoId);
  removeTodo(todoId);
  updateTodoSummary();
}

function updateTodoSummary() {
  const numberOfDone = getNumberOfDone();
  const numberOfNotDone = getNumberOfNotDone();
  showNumberOfDone(numberOfDone);
  showNumberOfNotDone(numberOfNotDone);
}

export { handleAddTodo, loadHandler, beforeUnloadHandler };
