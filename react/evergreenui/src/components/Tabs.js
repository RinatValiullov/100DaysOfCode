import React from 'react';
import { Tab } from 'evergreen-ui';

export default function Tabs(props) {
  return (
    <>
      <Tab>Default Tab</Tab>
      <Tab isSelected>Selected Tab</Tab>
      <Tab onSelect={() => alert('You selected this Tab!')}>Select me</Tab>
    </>
  );
}
