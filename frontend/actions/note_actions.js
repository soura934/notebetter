import * as APIUtil from '../util/note_api_util'

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const DESTROY_NOTE = 'DESTROY_NOTE';


export const receiveNote = note => {
    return {
        type: RECEIVE_NOTE,
        note
    }
}

export const receiveNotes = notes => {
    return {
        type: RECEIVE_NOTES,
        notes
    }
}

export const destroyNote = (noteId) => {
    return {
        type: DESTROY_NOTE,
        noteId
    }
}

export const fetchNotes = () => {
    return dispatch => {
        return APIUtil.fetchNotes()
        .then(notes => {dispatch(receiveNotes(notes))})
    }
}

export const fetchNote = (note) => {
    return dispatch => {
        return APIUtil.fetchNote(note)
        .then(note => {dispatch(receiveNote(note))})
    }
}

export const createNote = (note) => {
    return dispatch => {
        return APIUtil.createNote(note)
        .then(note => {dispatch(receiveNote(note))})
    }
}

export const updateNote = (note) => {
    return dispatch => {
        return APIUtil.updateNote(note)
        .then(note => {dispatch(receiveNote(note))})
    }
}

export const deleteNote = (noteId) => {
    return dispatch => {
        return APIUtil.deleteNote(noteId)
        .then(noteId => {dispatch(destroyNote(noteId))})
    }
}