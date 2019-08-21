import { shallowEqualObjects } from "../utils/shallow-equal";

export const STORAGE_KEY_FOR_AUTH_DATA = 'storage-key-for-auth-data'

let _authData;

const readFromLocalStorage = () => {
    const serializedAuthData = localStorage.getItem(STORAGE_KEY_FOR_AUTH_DATA)
    if(serializedAuthData) {
        _authData = JSON.parse(serializedAuthData)
    }
    return _authData
}

const authManager = {
    setAuthData: (authData) => {
        if(!authData) {
            return deleteAuthData()
        }
        if(!shallowEqualObjects(authData, _authData)) {
            _authData = authData
            localStorage.setItem(STORAGE_KEY_FOR_AUTH_DATA, JSON.stringify(_authData))
        }
    },
    deleteAuthData: () => {
        _authData = null
        localStorage.removeItem(STORAGE_KEY_FOR_AUTH_DATA)
    },
    getAuthData: () => _authData || readFromLocalStorage(),
    getUser: () => _authData.user,
    setUser: (user) => setAuthData({...authData, user}),
    getAuthHeader: () => _authData && _authData.authHeader,
    setAuthHeader: (authHeader) => {
        setAuthData({...authData, authHeader})
    }
}

export default authManager
