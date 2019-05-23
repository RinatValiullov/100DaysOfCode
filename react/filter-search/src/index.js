import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

function Comp(props) {
  let prs = [1, 2, 3, 4, 5, 6, 7];
  return (
    <React.Fragment>
      <App properties={prs.filter(pr => pr % 3)} />
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Comp />, rootElement);

if (module.hot) {
  module.hot.accept();
}
