require('dotenv').config();
import { postRequest, deleteRequest } from "./network";

const EndPoints = {
    REGISTER: 'users',
    LOGIN: 'users/sign_in',
    LOGOUT: 'users/sign_out',
    NEW_SEARCH: 'search'
}
export const Api = {
    attemptRegister: (details) => postRequest(EndPoints.REGISTER, {user: details}, null, true),
    attemptLogin: (credentials) => postRequest(EndPoints.LOGIN, {user: credentials}, null, true),
    attemptLogout: () => deleteRequest(EndPoints.LOGOUT),

    newSearch: (polygon) => postRequest(EndPoints.NEW_SEARCH, {vertices: polygon})
}