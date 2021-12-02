import _ from 'lodash';
import './style.css';

const taskList = document.querySelector('.List-Task');
const renew = document.getElementById('renew');

let toDoList = [{
  index: 1,
  description: "Attend the morning standUp",
  completed: false,
  }, 
  {
    index: 0,
    description: "Meeting with learning partner",
    completed: false,
  }
];

toDoList.sort(function(a,b){
  return a.index-b.index
});

window.onload = () => {
  toDoList.forEach((item) => {
    const listVal =  `<div class="toDo">
    <div class="FirstTwo">
      <input class="box" type="checkbox" id="toDo#1" name="toDo#1">
      <label class="label" for="toDo#1">${item.description}</label><br>
    </div>
    <span id="icon" class="material-icons move-icon">more_vert</span>
  </div>
  <hr>`; 
  taskList.insertAdjacentHTML('beforeend', listVal);
  });
}



