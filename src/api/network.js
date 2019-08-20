import AuthManager from './authManager'

const HTTP_METHOD = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
}

const API_RESPONSE = {
    CREATED: 201,
    NO_CONTENT: 204,
    
    UNAUTHORIZED: 401,
    VALIDATION: 422
}

const getDefaultHeaders = (noAuth) => {
    const defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    if(!noAuth) {
        defaultHeaders['Authorization'] = AuthManager.getAuthHeader()
    }
    return defaultHeaders
}

const getUrl = (endPoint) => process.env.API_BASE_URL + endPoint


const request = (endPoint, method, data, headers, noAuth) => {
    const options = {
        method: method,
        headers: {...getDefaultHeaders(noAuth), ...headers}
    }

    if( method===HTTP_METHOD.POST ||
        method===HTTP_METHOD.PUT ||
        method===HTTP_METHOD.PATCH) {
            options.body = JSON.stringify(data)
    }
    
    

    return fetch(getUrl(endPoint), options)
        .then(httpResponse => {
            if(httpResponse.ok) {
                if(httpResponse.status===API_RESPONSE.CREATED) {
                    let authHeader = httpResponse.headers.get('authorization')
                    return httpResponse.json()
                        .then(user => {
                            AuthManager.setAuthData({authHeader, user});
                            return user;
                        })
                    
                };
                if(httpResponse.status===API_RESPONSE.NO_CONTENT
                    && !httpResponse.headers.get('authorization')) {
                    AuthManager.deleteAuthData();
                    return true;
                }

                return httpResponse.json()
                        .then(response => response)
                        .catch(error => {
                            throw error.message
                        })
            }
            if(httpResponse.status===API_RESPONSE.VALIDATION) {
                return httpResponse.json()
                    .then(response => {
                        const validationErrors = response.errors
                        throw Object.keys(validationErrors).map(field => field + ': ' + validationErrors[field][0]).join(', ')
                    })
            } else if(httpResponse.status===API_RESPONSE.UNAUTHORIZED) {
                return httpResponse.json()
                    .then(response => {
                        throw response.error
                    })
            }
            throw httpResponse.statusText
        })
        .catch(reason => {
            throw reason
        })
}

// export const post = (endPoint, data, headers) => request(endPoint, HTTP_METHOD.POST, data, headers)
export const postRequest = (endPoint, data, headers, noAuth) => request(endPoint, HTTP_METHOD.POST, data, headers, noAuth)

export const deleteRequest = (endPoint, resource, headers, noAuth) => {
    if(resource) {
        endPoint += '/' + resource
    }
    return request(endPoint, HTTP_METHOD.DELETE, null, headers, noAuth)
}

export const getRequest = (endPoint, params, headers) => new Promise();

