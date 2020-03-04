import React from 'react';
import Button from './Button';
import { ThemeContextConsumer } from './../themeContext';

function Image(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className={`${context.theme}-image image`}>
          <div className={`${context.theme}-ball ball`}></div>
          <Button />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

Image.contextType = ThemeContextConsumer;

export default Image;
