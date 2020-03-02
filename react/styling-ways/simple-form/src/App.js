import React from 'react';
import Button from './components/Button/Button';
import InputEmail from './components/InputEmail/InputEmail';
import InputName from './components/InputName/InputName';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="Form">
        <div className="InputsWrapper">
          <InputName />
          <br />
          <InputEmail />
        </div>
        <div className="ButtonWrapper">
          <Button />
        </div>
      </form>
    </div>
  );
}

export default App;
