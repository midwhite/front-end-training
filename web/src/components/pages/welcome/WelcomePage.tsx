import React from 'react';
import { Link } from 'react-router-dom';

import BasicTemplate from '../../templates/BasicTemplate';

const WelcomePage: React.FC = () => (
  <BasicTemplate>
    <h1>React Training</h1>
    <ul>
      <li>
        <Link to="/q1">Q1. Virtual DOMを理解する</Link>
      </li>
      <li>
        <Link to="/q2">Q2. container component と presentational component</Link>
      </li>
    </ul>
  </BasicTemplate>
);

export default WelcomePage;
