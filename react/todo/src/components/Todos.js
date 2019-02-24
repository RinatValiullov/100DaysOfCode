import React, { Component } from 'react';

class Todos extends Component {
    render() {
        let { todos } = this.props;

        return todos.map((todo, index) => (
            <h3>{ todo.title }</h3>
        ));
    }
}

export default Todos;
