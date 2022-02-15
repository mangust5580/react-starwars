import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { REPO_NAME } from '@constants/repo';

import { store } from '@store/store';

import { App } from '@containers';
import { ThemeProvider } from '@context/ThemeProvider';

import '@styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Router basename={`/${REPO_NAME}/`}>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
