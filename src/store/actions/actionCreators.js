import { Api } from "../../api";
import authManager, { STORAGE_KEY_FOR_AUTH_DATA } from "../../api/authManager";
import { POLYGON_DRAWING_STATE } from "../reducers/polygon";
import { loginSuccess, loginBegin } from "./auth";
import { drawPolygon, completePolygon } from './polygon';
import { searchStart, searchComplete } from "./search";


function newSearch() {
    return (dispatch, getState) => {
        const {polygon} = getState()
        dispatch(searchStart())
        Api.newSearch(polygon.vertices)
            .then(response => dispatch(searchComplete(response)))
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
        const serializedAuthData = localStorage.getItem(STORAGE_KEY_FOR_AUTH_DATA);
        if(serializedAuthData) {
            try{
                const authData = JSON.parse(serializedAuthData);
                dispatch(loginSuccess(authData))
            } catch (err) {}    
        }       
    }
}

export function attemptRegister(details){
    return (dispatch) => {
        dispatch(loginBegin())
        Api.attemptRegister(details)
            .then(response => {
                authManager.setAuthData(response)   
                dispatch(loginSuccess(response))
            })
    }   
}

export function attemptLogin(credentials) {
    return dispatch => {
        dispatch(loginBegin())
        Api.attemptLogin(credentials).then(response => {
            authManager.setAuthData(response)
            dispatch(loginSuccess(response))
        })
    }
}
