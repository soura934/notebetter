import { connect } from 'react-redux';
import { fetchNotes } from '../../../actions/note_actions';
import NoteIndex from './note_index';

const mstp = (state, ownProps) => {
    let notes;
    let title;
    let notebookId;
    if (ownProps.notes) {
        notes = ownProps.notes
        title = ownProps.title
        notebookId = ownProps.notebookId
    } else {
        notes = Object.values(state.entities.notes)
        title = "All Notes"
        notebookId = -1
    }
    return {
        notes,
        title,
        notebookId
    }
}

const mdp = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    }
}

export default connect(mstp, mdp)(NoteIndex);