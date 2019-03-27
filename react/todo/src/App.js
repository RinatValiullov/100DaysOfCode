import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Todos from './components/Todos';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learn React',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Clean the room',
        completed: true
      },
      {
        id: uuid.v4(),
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

  // Add Todo
  addTodo = (title) => {
    let newTodo = {
        id: uuid.v4(),
        title,
        completed: false
    }
    this.setState({
        todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    let { todos } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={ todos } markComplete={ this.markComplete } delTodo={ this.delTodo } />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
