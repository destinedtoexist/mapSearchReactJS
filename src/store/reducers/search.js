import { SEARCH_START, SEARCH_COMPLETE } from "../actions";

export const SEARCH_REQUEST_STATE = {
    STARTED: 'started',
    COMPLETED: 'completed'
}

const search = (state = {}, action) => {
    switch(action.type) {
        case SEARCH_START:
            return {...state, request: SEARCH_REQUEST_STATE.STARTED}
        case SEARCH_COMPLETE:
            return {...state, request: SEARCH_REQUEST_STATE.COMPLETED}
        default:
            return state
    }
}

export default search