import React from 'react';

let onlyOne = (sololearner, index) => index === 0;

let Thead = ({ data }) => (
  <thead className="thead-dark">
    {data.filter(onlyOne).map((elem, idx) => (
      <tr key={`${elem}_${idx}`}>
        <th>{Object.keys(elem)[0]}</th>
        <th>
          {Object.keys(elem)[3]
            .slice(0, 1)
            .toUpperCase() + Object.keys(elem)[3].slice(1)}
        </th>
        <th className="text-center">
          {Object.keys(elem)[1]
            .slice(0, 1)
            .toUpperCase() + Object.keys(elem)[1].slice(1, -3)}
        </th>
      </tr>
    ))}
  </thead>
);

export default Thead;
