import { 
    RECEIVE_NOTEBOOK,
    RECEIVE_NOTEBOOKS,
    DESTROY_NOTEBOOK
 } from "../actions/notebook_actions";

 const notebooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_NOTEBOOK:
            return Object.assign({}, oldState, action);// find out about the action
        case RECEIVE_NOTEBOOKS:
            return action.notebooks.notebooks; // make sure it's right
        case DESTROY_NOTEBOOK:
            let newState = Object.assign({}, oldState)
            delete newState[action.notebookId];
            return newState;
        default:
            return oldState;
    }
 }

 export default notebooksReducer;