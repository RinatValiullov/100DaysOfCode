import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn React',
        completed: false
      },
      {
        id: 2,
        title: 'Clean the room',
        completed: true
      },
      {
        id: 3,
        title: 'Make the GYM',
        completed: false
      },
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete TodoItem
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    let { todos } = this.state;

    return (
      <div className="App">
        <div className="container">
            <Header />
            <AddTodo />
            <Todos todos={ todos } markComplete={ this.markComplete } delTodo={ this.delTodo } />
        </div>
      </div>
    );
  }
}


export default App;
