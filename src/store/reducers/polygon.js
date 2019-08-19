import { POLYGON_COMPLETE, POLYGON_DRAW, POLYGON_RESET, POLYGON_START } from '../actions'

export const POLYGON_DRAWING_STATE = {
    RESET:  'reset',
    ACTIVE: 'active',
    COMPLETE: 'complete'
}

const polygon = (state = {vertices: [], drawing: POLYGON_DRAWING_STATE.RESET}, action) => {
    switch(action.type) {
        case POLYGON_START:
            return {...state, vertices:[], drawing: POLYGON_DRAWING_STATE.ACTIVE}
        case POLYGON_RESET:
            return {...state, vertices:[]}
        case POLYGON_DRAW:
            const vertices = [...state.vertices, {...action.paylod}]
            return {...state, vertices, drawing: POLYGON_DRAWING_STATE.ACTIVE}
        case POLYGON_COMPLETE:
            return {...state, drawing: POLYGON_DRAWING_STATE.COMPLETE}
        default:
            return state
    }
}

export default polygon