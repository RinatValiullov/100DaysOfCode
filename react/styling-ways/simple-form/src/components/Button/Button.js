import React from 'react';
import './Button.css';

function Button({ nameClass }) {
  return (
    <div className="ButtonWrapper">
      <button className={nameClass}>Simple button</button>
    </div>
  );
}

export default Button;
