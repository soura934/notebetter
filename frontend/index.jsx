import React from 'react';
import ReactDOM from "react-dom";
// import {login} from "./util/session_api_util";
// import {signup} from "./util/session_api_util";
// import {logout} from "./util/session_api_util"
import configureStore from "./store/store"
import Root from "./components/root";

// window.login = login
// window.logout = logout
// window.signup= signup

document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    let store;
    if (window.currentUser) {
    const preloadedState = {
        entities: {
        users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
    store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});