import React from 'react';
import Buttons from './components/Buttons';
import Tabs from './components/Tabs';
import TablistComponent from './components/TablistComponent';

import './index.css';

let commonStyles = {
  h2: {
    marginLeft: '16px',
  },
};

function App(props) {
  return (
    <>
      <h2 style={commonStyles.h2}>Buttons</h2>
      <Buttons />
      <h2 style={commonStyles.h2}>Tabs</h2>
      <Tabs />
      <h2 style={commonStyles.h2}>TabList</h2>
      <TablistComponent />
    </>
  );
}

export default App;
