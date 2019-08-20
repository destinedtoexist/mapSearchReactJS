export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_BEGIN = 'login-begin';
export const LOGIN_ERROR = 'login-error'

export const SIGNUP_SUCCESS = 'signup_success';
export const SIGNUP_BEGIN = 'signup-begin';
export const SIGNUP_ERROR = 'signup-error'

export const LOGOUT_SUCCESS = 'logout_success';
export const LOGOUT_BEGIN = 'logout-begin';
export const LOGOUT_ERROR = 'logout-error'


export function logoutSuccess(){
    return {
        type: LOGOUT_SUCCESS
    }
}

export function logoutBegin() {
    return {
        type: LOGOUT_BEGIN
    }
}

export function logoutError(payload) {
    return {
        type: LOGOUT_ERROR,
        payload
    }
}

export function loginSuccess(payload){
    const action = {
        type: LOGIN_SUCCESS,
        payload
    }
    return action
}

export function loginBegin() {
    return {
        type: LOGIN_BEGIN
    }
}

export function loginError(payload) {
    return {
        type: LOGIN_ERROR,
        payload
    }
}


export function signupSuccess(payload){
    const action = {
        type: SIGNUP_SUCCESS,
        payload
    }
    return action
}

export function signupBegin() {
    return {
        type: SIGNUP_BEGIN
    }
}

export function signupError(payload) {
    return {
        type: SIGNUP_ERROR,
        payload
    }
}