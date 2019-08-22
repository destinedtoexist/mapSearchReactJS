import { Api } from "../../api";
import authManager, { STORAGE_KEY_FOR_AUTH_DATA } from "../../api/authManager";
import { POLYGON_DRAWING_STATE } from "../reducers/polygon";
import { loginSuccess, loginBegin, signupBegin, signupError, signupSuccess, loginError, logoutBegin, logoutSuccess, logoutError } from "./auth";
import { drawPolygon, completePolygon, startPolygon } from './polygon';
import { searchStart, searchComplete, searchError, searchReset } from "./search";


function newSearch() {
    return (dispatch, getState) => {
        const {polygon} = getState()
        dispatch(searchStart())
        Api.newSearch(polygon.vertices)
            .then(response => {
                dispatch(searchComplete(response))
            })
            .catch(reason => {
                dispatch(searchError(reason))
            })
    }
}

export function drawingStart() {
    return (dispatch) => {
        dispatch(startPolygon())
        dispatch(searchReset())
    }
}

export function drawingDone() {
    return (dispatch, getState) => {
        dispatch(completePolygon());
        dispatch(newSearch());
    }
}

export function mapClick(lat, lng) {
    return (dispatch, getState) => {
        const {polygon} = getState()
        if(polygon.drawing===POLYGON_DRAWING_STATE.ACTIVE ) {
            dispatch(drawPolygon(lat, lng))
        }
    }
} 

export function checkLogin() {
    return (dispatch) => {
        let authData = authManager.getAuthData()
        if(authData) {
            dispatch(loginSuccess(authData))
        }
    }
}

export function attemptRegister(details){
    return (dispatch) => {
        dispatch(signupBegin())
        Api.attemptRegister(details)
            .then(response => {
                dispatch(signupSuccess(response))
            })
            .catch(reason => {
                dispatch(signupError(reason))
            })
    }   
}

export function attemptLogin(credentials) {
    return dispatch => {
        dispatch(loginBegin())
        Api.attemptLogin(credentials).then(response => {
            dispatch(loginSuccess(response))
        })
        .catch(reason => {
            dispatch(loginError(reason))
        })
    }
}

export function attemptLogout() {
    return (dispatch) => {
        dispatch(logoutBegin())
        Api.attemptLogout()
            .then(() => dispatch(logoutSuccess()))
            .catch(reason => dispatch(logoutError(reason)))
    }
}
