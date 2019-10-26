import React from 'react';
import './Heading.css';

let day = 'afternoon';

function Heading(props) {
  return (
    <h1 className={props.title}>
      {day === 'afternoon'
        ? 'Good Afternoon,'
        : day === 'afternoon'
        ? 'Good Evening,'
        : 'You must determine the time of day'}
      <i> React!</i>
    </h1>
  );
}

export default Heading;
