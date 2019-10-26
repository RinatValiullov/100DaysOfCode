import React from 'react';
import './Heading.css';

let day = 'afternoon';

function Heading(props) {
  function greeting() {
    alert('Hooray!!!');
  }

  return (
    <section className={props.title}>
      <h1>
        {day === 'afternoon'
          ? 'Good Afternoon,'
          : day === 'afternoon'
          ? 'Good Evening,'
          : 'You must determine the time of day'}
        <i> React!</i>
      </h1>
      <button onClick={greeting}>Click to Greet</button>
    </section>
  );
}

export default Heading;
