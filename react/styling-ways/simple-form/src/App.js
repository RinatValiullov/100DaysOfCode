import React from 'react';
import Button from './components/Button/Button';
import InputEmail from './components/InputEmail/InputEmail';
import InputName from './components/InputName/InputName';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="Form">
        <InputName nameClass="personName" />
        <br />
        <InputEmail nameClass="personEmail" />
        <Button nameClass="submitButton" />
      </form>
    </div>
  );
}

export default App;
