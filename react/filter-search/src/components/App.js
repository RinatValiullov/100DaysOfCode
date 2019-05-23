import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Table from "./Table";
// import Search from "./Search";

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 6,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'MobX',
    url: 'https://mobx.js.org/',
    author: 'Javier Gonzalez, bluepeter',
    num_comments: 5,
    points: 8,
    objectID: 2,
  },
];

let isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props.properties);
    this.state = {
      list,
      searchTerm: '',
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
    // console.log(event.target.value);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({
      list: updatedList,
    });
  }

  onLeave(id) {
    const isId = item => item.objectID === id;
    const updatedList = this.state.list.filter(isId);
    this.setState({
      list: updatedList,
    });
  }

  render() {
    let { list, searchTerm } = this.state;
    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchChange} />
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} onLeave={this.onLeave} />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    let { value, onChange } = this.props;
    return (
      <form>
        <input type="text" value={value} className="my-2" onChange={onChange} />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    let { list, pattern, onDismiss, onLeave } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item => (
          <div key={item.objectID} style={{ marginBottom: '15px' }}>
            <span>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </span>
            {` `}
            <span>{item.author}</span>
            {` `}
            <span>{item.num_comments}</span>
            {` `}
            <span>{item.points}</span>
            {` `}
            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button className="btn btn-primary" type="button" onClick={() => onDismiss(item.objectID)}>
                Delete
              </button>
              <button type="button" className="btn btn-info" onClick={() => onLeave(item.objectID)}>
                Leave
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
