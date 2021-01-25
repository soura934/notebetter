import React from "react";
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mst = (state, ownProp) => {
    return {
        currentUser: state.entities.users[state.session.id]
    } 
}

const mdp = (dispatch) => {
    return {
        logout: () => {dispatch(logout())}
    }
}

export default connect(mst, mdp)(Greeting);