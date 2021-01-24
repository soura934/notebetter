import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';
const _nullId = Object.freeze({id: null})

const sessionReducer = (oldState = _nullId, action) => {
    Object.freeze(oldState);
    switch (action.type) { 
        case RECEIVE_CURRENT_USER:
            return {id: action.currentUser.id}
        case LOGOUT_CURRENT_USER:
            return _nullId;
        default:
            return oldState;
    }
};
export default sessionReducer;