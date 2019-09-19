import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as storage from 'storage';

const store = storage.init()

ReactDOM.render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('root')
);
