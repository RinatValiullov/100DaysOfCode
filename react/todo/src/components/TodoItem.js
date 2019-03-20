import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    let { id, title } = this.props.todo;
    // console.log(this.props);

    return (
      <div style = { this.getStyle() }>
        <p>
          <label>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
            { title }
          </label>
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

let btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 9px',
  float: 'right',
}

export default TodoItem;
