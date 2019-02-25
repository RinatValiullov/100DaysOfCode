import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        let { todos } = this.props;

        return (
            <div>
                {todos.map((todo, index) => (
                    <TodoItem key={ todo.id } todo={ todo } />
                ))}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
