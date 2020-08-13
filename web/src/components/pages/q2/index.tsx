import React from 'react';

import BasicTemplate from '../../templates/BasicTemplate';
import ComplicatedPage from '../../organisms/q2/ComplicatedPage';

const Q2: React.FC = () => {
  return (
    <BasicTemplate>
      <h1>Q2. container component と presentational component</h1>
      <ComplicatedPage />
    </BasicTemplate>
  );
};

export default Q2;
