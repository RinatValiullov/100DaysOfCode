import { decorate, computed, observable, action } from 'mobx';

class Store {
  tasks = [
    { id: 0, title: 'Create todo-react app', done: false },
    { id: 1, title: 'Make a video about it', done: true },
    { id: 2, title: 'Create simple todo-app', done: false }
  ];

  get sortedTasks() {
    const tasks = this.tasks;
    return tasks
      .slice()
      .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
  }

  get activeTasksCount() {
    return this.tasks.filter(item => !item.done).length;
  }

  setTasks(payload) {
    this.tasks = payload;
  }

  addTask(task) {
    let tasks = this.tasks;

    tasks.push({
      id: this.tasks.length || 0,
      title: task,
      done: false
    });

    this.setTasks(tasks);
  }

  doneTask(id) {
    let tasks = this.tasks;
    const index = tasks.map(task => task.id).indexOf(id);
    tasks[index].done = true;
    this.setTasks(tasks);
  }

  deleteTask(id) {
    this.setTasks(this.tasks.filter(item => item.id !== id));
  }
}

Store = decorate(Store, {
  tasks: observable,
  setTasks: action,
  addTask: action,
  deleteTask: action,
  sortedTasks: computed,
  activeTasksCount: computed
});

export default new Store();
