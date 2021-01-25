import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';


const mst = (state) => {
    return {
        errors: state.errors.session,
        formType: 'login',

    } ;
}

const mdp = (dispatch) => {
    return {
        action: (user) => {dispatch(login(user))},
        login: (user) => {dispatch(login(user))}
    }
}

export default connect(mst, mdp)(SessionForm);