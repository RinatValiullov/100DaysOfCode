import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={ headerStyle }>
      <h1 style={{margin: 0}}>TodoList</h1>
      <Link style={ linksStyle } to="/">Home</Link> | <Link style={ linksStyle } to="/about">About</Link>
    </header>
  )
}

let linksStyle = {
  color: '#f6f6f6'
}

let headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center'
}

export default Header
