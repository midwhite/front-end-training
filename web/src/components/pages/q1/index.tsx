import React from 'react';

import BasicTemplate from '../../templates/BasicTemplate';
import PastOrFuture1 from '../../organisms/q1/PastOrFuture1';
import PastOrFuture2 from '../../organisms/q1/PastOrFuture2';

const Q1: React.FC = () => {
  const date = new Date('2020-07-31 10:00:00');

  return (
    <BasicTemplate>
      <h1>Q1. Virtual DOM を理解する</h1>
      <PastOrFuture1 date={date} />
      <PastOrFuture2 date={date} />
    </BasicTemplate>
  );
};

export default Q1;
