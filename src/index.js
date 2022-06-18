import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';
import createReduxStore from './service/store';

const store = createReduxStore();

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={store}>
        <App />
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
