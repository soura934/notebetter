import React from "react";
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import { createNote } from "../../actions/note_actions";
import Sidebar from './sidebar';

const mst = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        notebookId: state.entities.notebooks
    } 
}

const mdp = (dispatch) => {
    return {
        logout: () => {dispatch(logout())},
        createNote: (note) => {dispatch(createNote(note))}
    }
}

export default connect(mst, mdp)(Sidebar);