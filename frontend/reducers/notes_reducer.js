import {
    RECEIVE_NOTE,
    RECEIVE_NOTES,
    DESTROY_NOTE
} from '../actions/note_actions';

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
        default:
            return oldState;
    }
}

export default notesReducer;