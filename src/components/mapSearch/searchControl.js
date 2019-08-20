import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Row from '../../elements/row';
import Button from '../../elements/button';
import { resetPolygon, drawingDone, startPolygon, attemptLogout } from '../../store/actions';
import { POLYGON_DRAWING_STATE } from '../../store/reducers/polygon'
import SnackBar from '../../elements/snackbar';

const SearchControlContainer = styled.div`
    position: absolute;
    top: ${props => props.position && props.position.includes('top') ? '20px' : 'initial'};
    bottom: ${props => props.position && props.position.includes('bottom') ? '20px' : 'initial'};
    left: ${props => props.position && props.position.includes('left') ? '20px' : 'initial'};
    right: ${props => props.position && props.position.includes('top') ? '20px' : 'initial'};
`

const SearchControl = ({position, drawing, vertices}) => {
    const dispatch = useDispatch()
    return (
        <SearchControlContainer position={position}>
            <Row>
                {(drawing===POLYGON_DRAWING_STATE.COMPLETE
                    || drawing===POLYGON_DRAWING_STATE.RESET)
                     && <Button onClick={(e) => dispatch(startPolygon())}>Start</Button>}
                {drawing===POLYGON_DRAWING_STATE.ACTIVE  && <Button disabled={vertices.length<3} onClick={(e) => dispatch(drawingDone())}>Done</Button>}
                <Button disabled={drawing!==POLYGON_DRAWING_STATE.ACTIVE}  onClick={(e) => dispatch(resetPolygon())}>Reset</Button>
                {drawing===POLYGON_DRAWING_STATE.RESET && <SnackBar>Click start to draw a region</SnackBar>}
                {drawing===POLYGON_DRAWING_STATE.COMPLETE && <SnackBar>Click start to draw a new region</SnackBar>}
                {drawing===POLYGON_DRAWING_STATE.ACTIVE && 
                    <SnackBar>
                        {vertices.length < 3 ? 'Click on map to define bounding vertices' : 'Click done whenever you feel'}
                    </SnackBar>
                }
                <Button onClick={() => dispatch(attemptLogout())}>Logout</Button>
            </Row>
        </SearchControlContainer>
    )
}

export default SearchControl
