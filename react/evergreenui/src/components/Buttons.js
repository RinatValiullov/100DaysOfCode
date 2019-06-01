import React from 'react';
import { Button, IconButton } from 'evergreen-ui';

export default function Buttons(props) {
  return (
    <>
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
      <div className="row" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <IconButton icon="trash" intent="danger" height={40} />
        <IconButton icon="cross" intent="success" height={40} />
        <IconButton appearance="minimal" icon="notifications" iconSize={18} />
        <IconButton icon="more" />
        <IconButton icon="edit" />
      </div>
    </>
  );
}
