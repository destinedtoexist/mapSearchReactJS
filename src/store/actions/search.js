export const SEARCH_START = 'search-start'
export const SEARCH_COMPLETE = 'search-complete'
export const SEARCH_ERROR = 'search-error'

export const HIGHLIGHT_LISTING = 'highlight-listing'


export function searchStart() {
    return {
        type: SEARCH_START
    }
}

export function searchComplete(payload) {
    return {
        type: SEARCH_COMPLETE,
        payload
    }
}

export function searchError(payload) {
    return {
        type: SEARCH_ERROR,
        payload
    }
}

export function highlightListing(payload) {
    return {
        type: HIGHLIGHT_LISTING,
        payload
    }
}
