import React, { Fragment } from 'react';
import { Button } from 'evergreen-ui';

import './index.css';

function App() {
  return (
    <Fragment>
      <div className="row btns-appearance-height">
        <Button appearance="primary" marginRight={16} height="24">
          Wow-button from evergreen UI
        </Button>
        <Button appearance="primary" marginRight={16} height="28">
          Wow-button from evergreen UI
        </Button>
        <Button appearance="default" marginRight={16} height="32">
          Wow-button from evergreen UI
        </Button>
        <Button appearance="minimal" height="36">
          Wow-button from evergreen UI
        </Button>
      </div>
      <div className="row btns-intent">
        <Button intent="none" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button intent="success" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button intent="warning" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button intent="danger">Wow-button from evergreen UI</Button>
      </div>
      <div className="row btns-appearance-intent">
        <Button appearance="primary" intent="none" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="primary" intent="success" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="primary" intent="warning" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="primary" intent="danger">
          Wow-button from evergreen UI
        </Button>
      </div>
      <div className="row btns-appearance-intent">
        <Button appearance="minimal" intent="none" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="minimal" intent="success" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="minimal" intent="warning" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="minimal" intent="danger">
          Wow-button from evergreen UI
        </Button>
      </div>
      <div className="row btns-icon">
        <Button appearance="primary" intent="none" iconBefore="cog" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="primary" intent="success" iconBefore="manual" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="primary" intent="warning" iconBefore="download" marginRight={16}>
          Wow-button from evergreen UI
        </Button>
        <Button appearance="primary" intent="danger" iconBefore="search">
          Wow-button from evergreen UI
        </Button>
      </div>
    </Fragment>
  );
}

export default App;
