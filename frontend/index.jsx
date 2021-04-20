import React from 'react';
import ReactDOM from "react-dom";
import {createNotebook} from "./util/notebook_api_util";
// import {signup} from "./util/session_api_util";
// import {logout} from "./util/session_api_util"
import configureStore from "./store/store"
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
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
    window.dispatch = store.dispatch;
    window.getState = store.dispatch;
    window.createNotebook = createNotebook;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});