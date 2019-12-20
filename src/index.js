import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import { BrowserRouter as BR, Router as R } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { unregister } from './registerServiceWorker';

import App from './components/App';

import authStore from './stores/authStore';
import commonStore from './stores/commonStore';

const stores = {
  authStore,
  commonStore,
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
configure({ enforceActions: 'always' });

window.renderAuth = (containerId, history) => {
  let Router = BR;
  // Sync history if container present
  if (history) {
    Router = R;
  }
  ReactDOM.render(
    <Provider {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountAuth = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
