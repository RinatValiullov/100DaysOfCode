import React from 'react';
import Tbody from './../Tbody/Tbody';
import Thead from './../Thead/Thead';

let JSLeadersTable = ({ data }) => (
  <div className="table-responsive">
    <table className="table table-primary table-hover mb-0">
      <Thead data={data} />
      <Tbody data={data} />
    </table>
  </div>
);

export default JSLeadersTable;
