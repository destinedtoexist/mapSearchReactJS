import { SEARCH_START, SEARCH_COMPLETE, SEARCH_ERROR, HIGHLIGHT_LISTING, SEARCH_RESET } from "../actions";

export const SEARCH_REQUEST_STATE = {
    RESET: 'reset',
    STARTED: 'started',
    COMPLETED: 'completed',
    ERROR: 'error'
}

const search = (state = {results: {listings: []}}, action) => {
    switch(action.type) {
        case SEARCH_RESET:
            return {...state, request: SEARCH_REQUEST_STATE.RESET, results: {listings: []}}
        case SEARCH_START:
            return {...state, request: SEARCH_REQUEST_STATE.STARTED, error: null}
        case SEARCH_COMPLETE:
            return {...state, request: SEARCH_REQUEST_STATE.COMPLETED, results: action.payload}
        case SEARCH_ERROR:
            return {...state, request: SEARCH_REQUEST_STATE.ERROR, error: action.payload}
        case HIGHLIGHT_LISTING:
            return {...state, highlight: action.payload}
        default:
            return state
    }
}

export default search