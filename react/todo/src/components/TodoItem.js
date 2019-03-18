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
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {' '}
          { title }
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;
