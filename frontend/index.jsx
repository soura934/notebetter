import React from 'react';
import ReactDOM from "react-dom";
import {fetchNotes} from "./actions/note_actions";
// import {signup} from "./util/session_api_util";
// import {logout} from "./util/session_api_util"
import configureStore from "./store/store"
import Root from "./components/root";

// window.deleteNote = deleteNote
// window.logout = logout
// window.signup= signup


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
    window.fetchNotes = fetchNotes;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});