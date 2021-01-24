import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mst = ({ errorsReducer }) => {
    return {
        errors: errorsReducer.session,
        formType: 'login'
    } ;
}

const mdp = (dispatch) => {
    return {
        action: (user) => {dispatch(login(user))}
    }
}

export default connect(mst, mdp)(SessionForm);