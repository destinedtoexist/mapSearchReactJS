import AuthManager from './authManager'

const HTTP_METHOD = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
}

const getDefaultHeaders = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': AuthManager.getAuthHeader()
    }
}

const getUrl = (endPoint) => process.env.API_BASE_URL + endPoint


const request = (endPoint, method, data, headers) => {
    const options = {
        method: method,
        headers: {...getDefaultHeaders(), ...headers}
    }

    if( method===HTTP_METHOD.post ||
        method===HTTP_METHOD.PUT ||
        method===HTTP_METHOD.PATCH) {
            options.body = JSON.stringify(data)
    }

    

    return fetch(getUrl(endPoint), options)
        .then(httpResponse => {
            return httpResponse.json()
        })
}

// export const post = (endPoint, data, headers) => request(endPoint, HTTP_METHOD.POST, data, headers)
export const post = (endPoint, data, headers) => new Promise((resolve, reject) => {
    console.log(getUrl('hello'))
    setTimeout(() => {
        resolve(data)
    }, 3000)
})

export const get = (endPoint, params, headers) => new Promise();

