import React from "react";
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import { createNote } from "../../actions/note_actions";
import { fetchNotebooks} from "../../actions/notebook_actions";
import Sidebar from './sidebar';

const mst = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        notebooks: Object.keys(state.entities.notebooks).map(id => state.entities.notebooks[id])
    } 
}

const mdp = (dispatch) => {
    return {
        logout: () => {dispatch(logout())},
        createNote: (note) => {dispatch(createNote(note))},
        fetchNotebooks: () => {dispatch(fetchNotebooks())}
    }
}

export default connect(mst, mdp)(Sidebar);