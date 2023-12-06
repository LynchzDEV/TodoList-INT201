import { Todo } from './todo.js';

let todos = [];

function loadTodos(userTodos) {
  Todo.setRunningId(userTodos[userTodos.length - 1].id + 1);

  userTodos.forEach((todo) => {
    addTodo(todo.desc);
  });
}

function addTodo(desc) {
  let newTodo = new Todo(undefined, desc);
  todos.push(newTodo);
  return newTodo.id;
}

function findTodo(searchId) {
  return todos.find((todo) => todo.id === searchId);
}

function findIndexTodo(searchId) {
  return todos.findIndex((todo) => todo.id === searchId);
}

function removeTodo(removeId) {
  const index = findIndexTodo(removeId);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
}

function getTodo() {
  return [...todos];
}

function clearTodo() {
  todos = [];
}

function getNumberOfDone() {
  return todos.filter((todo) => todo.done).length;
}

function getNumberOfNotDone() {
  return todos.filter((todo) => !todo.done).length;
}

function setItemToDone(doneId) {
  return todos.find((todo) => {
    if (todo.id === doneId) {
      todo.changeStatus();
    }
    return todo.done;
  });
}

export {
  loadTodos,
  addTodo,
  findTodo,
  removeTodo,
  getTodo,
  clearTodo,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
};
