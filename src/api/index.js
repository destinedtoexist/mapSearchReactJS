require('dotenv').config();
import { post } from "./network";

const EndPoints = {
    REGISTER: 'register',
    LOGIN: 'login',
    NEW_SEARCH: 'search'
}
export const Api = {
    attemptRegister: (details) => post(EndPoints.REGISTER, details),
    attemptLogin: (credentials) => post(EndPoints.LOGIN, credentials),

    newSearch: (polygon) => post(EndPoints.NEW_SEARCH, polygon)
}