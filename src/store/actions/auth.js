export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_BEGIN = 'login-begin';

export function loginSuccess(authResponse){
    const action = {
        type: LOGIN_SUCCESS,
        payload: authResponse
    }
    return action
}

export function loginBegin() {
    return {
        type: LOGIN_BEGIN
    }
}