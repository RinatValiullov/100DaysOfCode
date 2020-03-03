import React from 'react';
import Button from './../Button/Button';
import InputEmail from './../InputEmail/InputEmail';
import InputName from './../InputName/InputName';
import './FormComponent.css';

function FormComponent({ nameClass }) {
  return (
    <form className="personForm">
      <InputName nameClass="personName" />
      <InputEmail nameClass="personEmail" />
      <Button nameClass="submitButton" />
    </form>
  );
}

export default FormComponent;
