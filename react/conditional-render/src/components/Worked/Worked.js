import React from 'react';
import './Worked.css';

let WorkedWith = ({ title, list }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {list.filter(
          (item, index) =>
            item.props.children !== 'ADA' &&
            item.props.children !== 'LISP' &&
            item.props.children !== 'Swift' &&
            item.props.children !== 'Objective-C' &&
            item.props.children !== 'C' &&
            item.props.children !== 'ALGOL 68' &&
            item.props.children !== 'Scala',
        )}
      </ul>
    </>
  );
};

let NotWorkedWith = ({ title, list }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {list.filter(
          (item, index) =>
            item.props.children !== 'JavaScript' &&
            item.props.children !== 'C++' &&
            item.props.children !== 'PHP' &&
            item.props.children !== 'Haskell' &&
            item.props.children !== 'Julia' &&
            item.props.children !== 'Kotlin' &&
            item.props.children !== 'Python',
        )}
      </ul>
    </>
  );
};

export { WorkedWith, NotWorkedWith };
