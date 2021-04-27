import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {deleteNote, updateNote, fetchNote, fetchNotes} from "../../../actions/note_actions"
import {fetchNotebooks, fetchNotebook} from "../../../actions/notebook_actions"
import Editor from './editor';


const mstp = (state, ownProps) => {
    let noteId = ownProps.match.params.noteId
    let note = state.entities.notes[noteId]; 
    return {
        note: note,
        noteId,
        currentUser: state.entities.users[state.session.id],
        notebook: note ? state.entities.notebooks[note.notebook_id] : undefined 
    }
}

const mdp = (dispatch) => {
    return {
        fetchNote: (note) => dispatch(fetchNote(note)),
        deleteNote: (noteId) => dispatch(deleteNote(noteId)),
        updateNote: (note) => dispatch(updateNote(note)),
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: (notebookId)=> dispatch(fetchNotebook(notebookId))
    }
}




export default withRouter(connect(mstp, mdp)(Editor));