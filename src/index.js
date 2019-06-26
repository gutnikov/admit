/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

import store, { history } from './store';
import App from './components/app';
import ErrorLogger from './components/core/error-logger';

function render() {
  return (
    <Provider store={store}>
      <ErrorLogger>
        <Router history={history}>
          <App />
        </Router>
      </ErrorLogger>
    </Provider>
  );
}

ReactDOM.render(render(), document.getElementById('root'));
