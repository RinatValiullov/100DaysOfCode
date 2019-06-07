import React from 'react';

let Tbody = ({ data }) => (
  <tbody>
    {data.map((val, idx) => (
      <tr key={`${val}_${idx}`}>
        <td>
          <a href={val.profileUrl} target="_blank" rel="noopener noreferrer">
            {val['Profile name']}
          </a>
        </td>
        <td>
          <code>{val.score}</code>
        </td>
        <td style={{ width: '25%' }}>
          <img className="rounded-circle img-fluid w-25 mx-auto d-block" src={val.avatarUrl} alt="icon" />
        </td>
      </tr>
    ))}
  </tbody>
);

export default Tbody;
