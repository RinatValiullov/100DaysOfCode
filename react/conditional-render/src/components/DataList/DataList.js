import React from 'react';
import './DataList.css';
import { WorkedWith, NotWorkedWith } from './../Worked/Worked';

export default function DataList({ data, isWorked }) {
  let listOfLangs = data.map((value, index) => <li key={`${value}_${index}`}>{value}</li>);
  return isWorked ? (
    <WorkedWith title="Worked with:" list={listOfLangs} />
  ) : (
    <NotWorkedWith title="Not worked with:" list={listOfLangs} />
  );
}
