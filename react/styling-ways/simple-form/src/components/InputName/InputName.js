import React from 'react';
import './InputName.css';

function InputName({ nameClass }) {
  return (
    <div className="InputsWrapper">
      <label
        for="name"
        style={{
          display: 'block',
          fontSize: '1rem',
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}
      >
        enter your name
      </label>
      <input
        type="text"
        placeholder="John Doe"
        className={nameClass}
        id="name"
      />
    </div>
  );
}

export default InputName;
