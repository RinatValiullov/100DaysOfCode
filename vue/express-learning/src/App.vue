<template>
  <div id="app">
    <h1>ToDo application</h1>
    <router-view />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: 'app',
  data() {
    return {
      todos: [
        // { id: 1, title: 'Learn JS', completed: false },
        // { id: 2, title: 'Learn Vue', completed: false },
        // { id: 3, title: 'Learn PHP', completed: false },
      ]
    }
  },
  components: {
    TodoList,
    AddTodo
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((result) => {
        return result.json()
      }).then((result) => {
        this.todos = result
      }).catch((err) => {
        console.error(err)
      });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
