import { shallowEqualObjects } from "../utils/shallow-equal";

export const STORAGE_KEY_FOR_AUTH_DATA = 'storage-key-for-auth-data'

let _authData;

const authManager = {
    setAuthData: (authData) => {
        if(!shallowEqualObjects(authData, _authData)) {
            _authData = authData
            localStorage.setItem(STORAGE_KEY_FOR_AUTH_DATA, JSON.stringify(_authData))
        }
    },
    getAuthData: () => _authData,
    getAuthHeader: () => `bearer ${_authData.access_token}`
}

export default authManager
