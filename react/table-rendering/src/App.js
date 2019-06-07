/* eslint-disable no-useless-computed-key */
import React, { Component, Fragment } from 'react';
import JSLeadersTable from './components/JSLeadersTable/JSLeadersTable';

let JSLeaders = [
  {
    ['Profile name']: 'Nikolay Nachev',
    avatarUrl: 'https://api.sololearn.com/Uploads/Avatars/2551505.jpg',
    profileUrl: 'https://www.sololearn.com/Profile/2551505/',
    score: '100000 XP',
  },
  {
    ['Profile name']: 'Luis Febro',
    avatarUrl: 'https://api.sololearn.com/Uploads/Avatars/4802958.jpg',
    profileUrl: 'https://www.sololearn.com/Profile/4802958/',
    score: '66675 XP',
  },
  {
    ['Profile name']: 'Jirka124',
    avatarUrl: 'https://api.sololearn.com/Uploads/Avatars/7434427.jpg',
    profileUrl: 'https://www.sololearn.com/Profile/7434427/',
    score: '47025 XP',
  },
  {
    ['Profile name']: 'kdc',
    avatarUrl: 'https://api.sololearn.com/Uploads/Avatars/10304405.jpg',
    profileUrl: 'https://www.sololearn.com/Profile/10304405/',
    score: '41965 XP',
  },
  {
    ['Profile name']: 'grey eagle',
    avatarUrl: 'https://api.sololearn.com/Uploads/Avatars/8279686.jpg',
    profileUrl: 'https://www.sololearn.com/Profile/8279686/',
    score: '31317 XP',
  },
  {
    ['Profile name']: '᠌᠌brains',
    avatarUrl: 'https://api.sololearn.com/Uploads/Avatars/6860646.jpg',
    profileUrl: 'https://www.sololearn.com/Profile/2551505/',
    score: '30821 XP',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JSLeaders,
    };
  }
  render() {
    let { JSLeaders: SLJSers } = this.state;
    return (
      <Fragment>
        <JSLeadersTable data={SLJSers} />
      </Fragment>
    );
  }
}

export default App;
