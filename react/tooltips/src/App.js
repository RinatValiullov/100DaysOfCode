import React from 'react';
import Wrapper from './components/Wrapper/Wrapper';

export default function App() {
  return (
    <div className="App">
      <Wrapper content="right">Tooltip on the right</Wrapper>
      <Wrapper content="left">Tooltip on the left</Wrapper>
      <Wrapper content="top">Tooltip on the top</Wrapper>
      <Wrapper content="bottom">Tooltip on the bottom</Wrapper>
    </div>
  );
}
