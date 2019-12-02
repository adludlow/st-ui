import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as storage from 'storage';
import { Layout } from 'Layout';

const store = storage.init();

  ReactDOM.render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.getElementById('root')
  );
