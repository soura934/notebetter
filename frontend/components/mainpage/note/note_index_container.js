import { connect } from 'react-redux';
import React from 'react';
import { fetchNotes } from '../../../actions/note_actions';
import NoteIndex from './note_index';

const mstp = (state, ownProp) => {
    return {
        notes: Object.values(state.entities.notes),
        title: 'All Notes'
    }
}

const mdp = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    }
}

export default connect(mstp, mdp)(NoteIndex);