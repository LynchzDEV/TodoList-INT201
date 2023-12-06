class Todo {
  static runningId = 1;

  static setRunningId(loadingId) {
    Todo.runningId = loadingId;
  }

  constructor(id, desc, done = false) {
    this.id = id ?? Todo.runningId++;
    this.desc = desc;
    this.done = done;
  }

  getTodo() {
    return { id: this.id, desc: this.desc };
  }

  setDesc(desc) {
    this.desc = desc;
  }

  changeStatus() {
    this.done = !this.done;
  }
}

export { Todo };
