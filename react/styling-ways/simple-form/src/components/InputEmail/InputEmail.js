import React from 'react';
import './InputEmail.css';

function InputEmail({ nameClass }) {
  return (
    <input type="email" placeholder="JohnDoe@email.com" className={nameClass} />
  );
}

export default InputEmail;
