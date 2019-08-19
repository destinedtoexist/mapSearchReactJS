export const POLYGON_START = 'polygon-start'
export const POLYGON_DRAW = 'polygon-draw'
export const POLYGON_COMPLETE = 'polygon-complete'
export const POLYGON_RESET = 'polygon-reset'

export function startPolygon() {
    return {
        type: POLYGON_START
    }
}

export function drawPolygon(lat, lng) {
    return {
        type: POLYGON_DRAW,
        paylod: {lat, lng}
    }
}

export function completePolygon() {
    return {
        type: POLYGON_COMPLETE
    }
}

export function resetPolygon() {
    return {
        type: POLYGON_RESET
    }
}
