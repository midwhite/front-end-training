import React from 'react';

import Header from './Header';

import CSSModule from './BasicTemplate.module.scss';

const BasicTemplate: React.FC = ({ children }) => {
  return (
    <div className={CSSModule.basicTemplate}>
      <div className={CSSModule.basicTemplateBody}>
        <Header />
        <div className={CSSModule.basicTemplateContent}>{children}</div>
      </div>
    </div>
  );
};

export default BasicTemplate;
