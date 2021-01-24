import { connect } from "react-redux";
import React from "react";
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mst = ({ errorsReducer }) => {
    return {
        // errors: state.errorsReducer.session,
        errors: errorsReducer.session,
        formType: 'signup'
    } ;
}

const mdp = (dispatch) => {
    return {
        action: (user) => {dispatch(signup(user))}
    }
}

export default connect(mst, mdp)(SessionForm);