import React, { Component } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DataList from './components/DataList/DataList';

let languages = [
  'JavaScript',
  'C++',
  'PHP',
  'Java',
  'Haskell',
  'Julia',
  'Kotlin',
  'Swift',
  'ADA',
  'ALGOL 68',
  'LISP',
  'C',
  'Objective-C',
  'Scala',
  'Python',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: languages,
    };
  }
  render() {
    let { list: langs } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <DataList data={langs} isWorked />
          </div>
          <div className="col-6">
            <DataList data={langs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
