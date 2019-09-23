Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.text }}</task>
    </ul>
  `,

  data() {
    return {
      tasks: [
        { text: 'Learn HTML', completed: true },
        { text: 'Learn CSS', completed: false },
        { text: 'Learn JS', completed: true },
        { text: 'Learn VUE', completed: false },
      ].filter(task => task.completed)
    }
  },
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

let app = new Vue({
  el: '#root'
});