/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/app';
import ErrorLogger from './components/core/error-logger';

function render() {
  return (
    <Provider store={store}>
      <ErrorLogger>
        <App />
      </ErrorLogger>
    </Provider>
  );
}

ReactDOM.render(render(), document.getElementById('root'));
