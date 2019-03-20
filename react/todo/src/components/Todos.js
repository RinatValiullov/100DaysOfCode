import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        let { todos, markComplete } = this.props;
        // console.log(this.props);
        return (
            <div>
                {todos.map(todo => (
                    <TodoItem key={ todo.id } todo={ todo } markComplete={ markComplete } delTodo={ this.props.delTodo } />
                ))}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
