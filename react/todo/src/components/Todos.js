import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        let { todos } = this.props;

        return (
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={ todo.id } todo={ todo } />
                ))}
            </ul>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
