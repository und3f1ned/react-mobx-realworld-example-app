import ReactDOM from "react-dom";
import promiseFinally from "promise.prototype.finally";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";

import App from "./components/App";

import articlesStore from "./stores/articlesStore";
import commentsStore from "./stores/commentsStore";
import authStore from "./stores/authStore";
import commonStore from "./stores/commonStore";
import editorStore from "./stores/editorStore";
import userStore from "./stores/userStore";
import profileStore from "./stores/profileStore";

const stores = {
  articlesStore,
  commentsStore,
  authStore,
  commonStore,
  editorStore,
  userStore,
  profileStore,
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
configure({ enforceActions: "always" });

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
