import React from 'react';
import Tippy from '@tippy.js/react';
import './Wrapper.scss';

export default function Wrapper(props) {
  let { content, children } = props;

  return (
    <section className="Wrapper">
      <Tippy className="rock" arrow={true} distance={10} theme="my-theme" placement={content} content={children}>
        <button type="button">hover me</button>
      </Tippy>
    </section>
  );
}
