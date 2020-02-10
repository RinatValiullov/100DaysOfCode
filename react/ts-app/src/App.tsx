import React from 'react';
import logo from './logo.svg';
import './App.css';

let a: number | null | string = 5;
a = null;
a = 'str';

let myArray: Array<string> = ['Bill', 'Glen', 'Murray'];
myArray[0].toUpperCase();

let myArray1: string[] = ['Bill', 'Glen', 'Murray'];

const obj = myArray.forEach(elem => ({
  elem: elem.toUpperCase(),
}));

let gender: 'male' | 'female';
gender = 'male';


type AddressType = {
  city: string | null,
  country?: string | null,
};

type UserType = {
  show: (msg: string) => void,
  age: number,
  isGoing: boolean,
  address: AddressType,
};

let user: UserType = {
  show(msg: string) {
    return `${msg[0].toUpperCase() + msg.substr(1)}, ${this.address.city}`;
  },
  age: 15,
  isGoing: false,
  address: {
    city: 'Perm',
  }
};

console.log(
  user.show('hello')
);

const sum: (z: number, x: number) => number = (z = 4, x = 8): number => z + x;

console.log(sum(5, 6));
console.log(sum());



const objectAsState = {
  prop1: null as number | null,
  prop2: null as string | null,
  prop3: null as boolean | null,
  prop4: [] as Array<AddressType>,
  counter: 0
};

export type objectAsStateType = typeof objectAsState;

const state: objectAsStateType = {
  prop1: 1,
  prop2: '1',
  prop3: false,
  prop4: [
    {
      city: 'propertyCity',
      country: 'propertyCountry'
    },
    {
      city: 'propertyCity2',
      country: 'propertyCountry2'
    }
  ],
  counter: 5
};

const GET_TASKS = 'APP_TASKS';
type GetTasksActionType = {
  _id: number,
  type: typeof GET_TASKS,
};
const action: GetTasksActionType = {
  type: GET_TASKS,
  _id: 11
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first react app with typescript!</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
