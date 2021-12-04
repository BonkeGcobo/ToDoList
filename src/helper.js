export default class ToDo {
    static list = []; //Static lost

    constructor(description, complete = false) {
      this.description = description;
      this.complete = complete;
      this.index = ToDo.list.length; // index will the length of the array
      ToDo.list.push(this); // add a toDo task in a static list
    }

    update() {
      if (this.complete) {
        this.complete = false;
      } else {
        this.complete = true;
      }
    }
}