import React from 'react';
import { Tab, TabNavigation } from 'evergreen-ui';

export default function TabNav() {
  return (
    <TabNavigation>
      {['F', 'S', 'T', 'Fr'].map((tab, idx) => (
        <Tab key={tab} is="a" href="#" isSelected={idx === 2}>
          {tab}
        </Tab>
      ))}
    </TabNavigation>
  );
}
