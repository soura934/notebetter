import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {deleteNote, updateNote, fetchNote, fetchNotes} from "../../../actions/note_actions"
import {fetchNotebooks} from "../../../actions/notebook_actions"
import Editor from './editor';


const mstp = (state, ownProps) => {
    // debugger
    return {
        note: state.entities.notes[ownProps.match.params.noteId] || {},
        noteId: ownProps.match.params.noteId,
        currentUser: state.entities.users[state.session.id],
        notebooks: state.entities.notebooks
    }
}

const mdp = (dispatch) => {
    return {
        fetchNote: (note) => dispatch(fetchNote(note)),
        deleteNote: (noteId) => dispatch(deleteNote(noteId)),
        updateNote: (note) => dispatch(updateNote(note)),
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNotebooks: () => dispatch(fetchNotebooks())
    }
}




export default withRouter(connect(mstp, mdp)(Editor));