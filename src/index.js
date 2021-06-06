import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Contant from './components/Content';
import Store from './components/Store';

ReactDOM.render(
  <Store>
    <Contant />
  </Store>,
  document.getElementById('root')
);