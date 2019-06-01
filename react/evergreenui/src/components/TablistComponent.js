import React from 'react';
import { Tab, Tablist } from 'evergreen-ui';

export default class TablistComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      tabs: ['First', 'Second', 'Third'],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Tablist>
          {this.state.tabs.map((tab, idx) => (
            <Tab
              key={tab}
              onSelect={() => this.setState({ selectedIndex: idx })}
              isSelected={idx === this.state.selectedIndex}
              aria-controls={`panel-${tab}`}
            >
              {tab}
            </Tab>
          ))}
        </Tablist>
        <div>
          {this.state.tabs.map((tab, idx) => (
            <p
              key={tab}
              id={`panel-${tab}`}
              role="tabpanel"
              aria-labelledby={tab}
              aria-hidden={idx !== this.state.selectedIndex}
              style={idx === this.state.selectedIndex ? { display: 'block' } : { display: 'none' }}
            >
              Panel {tab}
            </p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
