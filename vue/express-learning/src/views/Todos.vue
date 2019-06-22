<template>
  <div>
    <h2>ToDo application</h2>
    <router-link to="/">Back Home</router-link>
    <br>
    <AddTodo
      @add-todo="addTodo"
    />
    <select
        v-model="filter"
    >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
    </select>
    <br>
    <Loader
        v-if="loading"
    />
    <TodoList
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
      v-else-if="filteredTodos.length"
    />
    <p v-else>Nothing to show</p>
  </div>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import AddTodo from '@/components/AddTodo'
    import Loader from '@/components/Loader'
    export default {
        name: 'app',
        data() {
            return {
                todos: [],
                loading: true,
                filter: 'all'
            }
        },
        components: {
            TodoList,
            AddTodo,
            Loader
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id);
            },
            addTodo(todo) {
                this.todos.push(todo)
            }
        },
        // watch: {
        //     filter(value) {
        //         console.log(value)
        //     }
        // },
        computed: {
            filteredTodos() {
                if(this.filter === 'all') {
                    return this.todos
                }
                if(this.filter === 'completed') {
                    return this.todos.filter(todo => todo.completed)
                }
                if(this.filter === 'not-completed') {
                    return this.todos.filter(todo => !todo.completed)
                }
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
                .then((result) => {
                    return result.json()
                }).then((result) => {
                    setTimeout(() => {
                        this.todos = result
                        this.loading = false
                    }, 1500)
                }).catch((err) => {
                    console.error(err)
                });
        }
    }
</script>
