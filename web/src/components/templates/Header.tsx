import React from 'react';
import { Link } from 'react-router-dom';

import CSSModule from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={CSSModule.header}>
      <Link to="/" className={CSSModule.logo}>
        [HOME]
      </Link>
    </header>
  );
};

export default Header;
