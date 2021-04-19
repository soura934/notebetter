import * as APIUtil from '../util/notebook_api_util'

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const DESTROY_NOTEBOOK = 'DESTROY_NOTEBOOK';


export const receiveNotebook = notebook => {
    return {
        type: RECEIVE_NOTEBOOK,
        notebook
    }
}

export const receiveNotebooks = notebooks => {
    return {
        type: RECEIVE_NOTEBOOKS,
        notebooks
    }
}

export const destroyNotebook = (notebookId) => {
    return {
        type: DESTROY_NOTEBOOK,
        notebookId
    }
}

export const fetchNotebooks = () => {
    return dispatch => {
        return APIUtil.fetchNotebooks()
        .then(notebooks => {dispatch(receiveNotebooks(notebooks))})
    }
}

export const fetchNotebook = (notebook) => {
    return dispatch => {
        return APIUtil.fetchNotebook(notebook)
        .then(notebook => {dispatch(receiveNotebook(notebook))})
    }
}

export const createNotebook = (notebook) => {
    return dispatch => {
        return APIUtil.createNotebook(notebook)
        .then(notebook => {dispatch(receiveNotebook(notebook))})
    }
}

export const updateNotebook = (notebook) => {
    return dispatch => {
        return APIUtil.updateNotebook(notebook)
        .then(notebook => {dispatch(receiveNotebook(notebook))})
    }
}

export const deleteNotebook = (notebookId) => {
    return dispatch => {
        return APIUtil.deleteNotebook(notebookId)
        .then(notebookId => {dispatch(destroyNotebook(notebookId))})
    }
}