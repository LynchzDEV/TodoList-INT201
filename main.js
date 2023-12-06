import {
  handleAddTodo,
  loadHandler,
  beforeUnloadHandler,
} from './eventHandling/eventController.js';

window.addEventListener('load', () => {
  loadHandler();
});
window.addEventListener('unload', (event) => {
  beforeUnloadHandler(event);
});

const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', handleAddTodo);
