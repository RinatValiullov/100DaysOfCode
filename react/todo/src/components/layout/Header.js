import React from 'react'

function Header() {
  return (
    <header style={ headerStyle }>
      <h1 style={{margin: 0}}>TodoList</h1>
    </header>
  )
}


let headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}

export default Header
