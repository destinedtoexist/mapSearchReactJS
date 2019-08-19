import { LOGIN_SUCCESS, LOGIN_BEGIN } from "../actions";

const auth = (state = {}, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, ...action.payload, fetching: false, loggedIn: true}
        case LOGIN_BEGIN:
            return {...state, fetching: true, loggedIn: false}
        default:
            return state
    }
}

export default auth