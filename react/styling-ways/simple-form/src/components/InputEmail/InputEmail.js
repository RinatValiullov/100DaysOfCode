import React from 'react';
import './InputEmail.css';

function InputEmail({ nameClass }) {
  return (
    <div className="InputsWrapper">
      <label
        htmlFor="email"
        style={{
          display: 'block',
          fontSize: '1rem',
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}
      >
        enter your email
      </label>
      <input
        type="email"
        placeholder="JohnDoe@email.com"
        id="email"
        className={nameClass}
      />
    </div>
  );
}

export default InputEmail;
