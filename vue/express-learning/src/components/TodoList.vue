<template>
    <ul>
        <TodoItem
            v-for="(todo, idx) of todos"
            v-bind:todo="todo"
            v-bind:index="idx"
            v-on:remove-todo="removeTodo"
        />
    </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem';
export default {
    props: ['todos'],
    components: {
        TodoItem
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>
