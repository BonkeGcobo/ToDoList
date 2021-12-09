import './style.css';
import { addItem, deleteAllCompleted, populateList } from './crud.js';
import ToDo from './state.js';

// Window load
const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new ToDo(item.description, item.complete));
}

// Add
const addBtn= document.querySelector('.arrow-btn');

addBtn.addEventListener('click', addItem);

// Delete all completed
const clearButton = document.querySelector('.CleanDone');
clearButton.addEventListener('click', deleteAllCompleted);

// Populate UI

populateList();