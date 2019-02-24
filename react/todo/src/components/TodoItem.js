import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    
    let { todo } = this.props;

    return (
      <React.Fragment>
        <li>{ todo.title }</li>
      </React.Fragment>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
