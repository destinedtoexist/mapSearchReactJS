export const SEARCH_START = 'search-start'
export const SEARCH_COMPLETE = 'search-complete'


export function searchStart() {
    return {
        type: SEARCH_START
    }
}

export function searchComplete(response) {
    return {
        type: SEARCH_COMPLETE,
        payload: response
    }
}
