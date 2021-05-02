import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { Application } from './components/Application';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
