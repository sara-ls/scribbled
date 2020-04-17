import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      ui: {
        modal: null,
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
