import {
    RECEIVE_NOTE,
    RECEIVE_NOTES,
    DESTROY_NOTE
} from '../actions/note_actions';

const notesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (oldState.type) {
        case RECEIVE_NOTE:
            return Object.assign({}, oldState, {[action.id]: action.note});
        case RECEIVE_NOTES:
            return Object.assign({}, oldState, action.notes);
        case DESTROY_NOTE:
            let newState = Object.assign({}, oldState)
            delete newState[action.noteId];
            return newState;
        default:
            return oldState;
    }
}

export default notesReducer;