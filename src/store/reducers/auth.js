import { LOGIN_SUCCESS, LOGIN_BEGIN, SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_ERROR, LOGOUT_ERROR, LOGOUT_SUCCESS, LOGOUT_BEGIN } from "../actions";

const auth = (state = {}, action) => {
    switch(action.type) {
        case LOGOUT_BEGIN:
        case SIGNUP_BEGIN:
        case LOGIN_BEGIN:
            return {...state, fetching: true, loggedIn: false, error: null}
        
        case LOGOUT_SUCCESS:
            return {...state, ...action.payload, fetching: false, loggedIn: false}

        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, ...action.payload, fetching: false, loggedIn: true}

        case LOGOUT_ERROR:
        case SIGNUP_ERROR:
        case LOGIN_ERROR:
            return {...state, fetching: false, loggedIn: false, error: action.payload}
        
        default:
            return state
    }
}

export default auth