import React from 'react'
import { Map, GoogleApiWrapper, Polygon, Polyline } from 'google-maps-react';
import { useDispatch } from 'react-redux'
import { mapClick } from '../../store/actions';
import { POLYGON_DRAWING_STATE } from '../../store/reducers/polygon'

const MapContainer =  ({vertices, drawing, google}) => {

    const dispatch = useDispatch()

    const handleClick = (mapProps, map, event) => {
        const [lat, lng] = [event.latLng.lat(), event.latLng.lng()];
        dispatch(mapClick(lat, lng))
    }

    return (
            <Map google={google} onClick={handleClick}>
                {drawing===POLYGON_DRAWING_STATE.ACTIVE &&
                <Polyline path={vertices}
                    geodesic={true}
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,    
                }} />}
                {drawing===POLYGON_DRAWING_STATE.COMPLETE &&
                <Polygon paths={vertices} />}
            </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API_KEY
})(MapContainer)