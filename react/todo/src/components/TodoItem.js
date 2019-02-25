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

  markComplete = (event) => {
    console.log(this.props);
  }

  render() {
    let { todo } = this.props;

    return (
      <div style = { this.getStyle() }>
        <p>
          <input type="checkbox" onChange={this.markComplete} />{' '}
          { todo.title }
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;
