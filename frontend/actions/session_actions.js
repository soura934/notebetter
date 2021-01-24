import * as API from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
} 
const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
} 
const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
} 

export const login = (user) => {
    return dispatch => {
        return API.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJson))))
    }
}
export const logout = () => {
    return dispatch => {
        return API.logout()
        .then(() => dispatch(logoutCurrentUser()))
    }
}
export const signup = (user) => {
    return dispatch => {
        return API.signup(user)
        .then(currentUser => (dispatch(receiveCurrentUser(currentUser))),
        err => (dispatch(receiveErrors(err.responseJson))))
    }
}

