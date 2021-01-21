import React from 'react';
import ReactDOM from "react-dom";
import {login} from "./util/session_api_util";
import {signup} from "./util/session_api_util";
import {logout} from "./util/session_api_util"


window.login = login
window.logout = logout
window.signup= signup


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Hello</h1>, root);
});