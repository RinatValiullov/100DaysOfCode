class ToDo {
  constructor(id) {
    this.identificator = id
  }

  showId() {
    console.log(this.identificator)
  }
}

let todo = new ToDo('f45d6s9s2bf');

console.log(todo.showId());
