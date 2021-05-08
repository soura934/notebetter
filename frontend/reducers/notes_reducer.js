import {
    RECEIVE_NOTE,
    RECEIVE_NOTES,
    DESTROY_NOTE
} from '../actions/note_actions';
import {DESTROY_NOTEBOOK} from "../actions/notebook_actions";

const notesReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_NOTE:
            return Object.assign({}, oldState, {[action.note.id]: action.note});
        case RECEIVE_NOTES:
            // debugger
            return action.notes.notes;
        case DESTROY_NOTE:
            let newState = Object.assign({}, oldState)
            delete newState[action.noteId];
            return newState;
        case DESTROY_NOTEBOOK:
            debugger
            let newStatenote = Object.assign({}, oldState)
            action.notebookId.notes.forEach(note => {
                delete newStatenote[note.id]
            })
            return newStatenote;
        default:
            return oldState;
    }
}

export default notesReducer;