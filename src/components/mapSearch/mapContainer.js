import React, { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Polygon, Polyline, Marker } from 'google-maps-react';
import { useDispatch } from 'react-redux'
import { mapClick, highlightListing } from '../../store/actions';
import { POLYGON_DRAWING_STATE } from '../../store/reducers/polygon'

const MapContainer =  ({vertices, drawing, google, results, highlight}) => {

    const dispatch = useDispatch()

    const [center, setCenter] = useState()
    const [zoom, setZoom] = useState()

    const handleClick = (mapProps, map, event) => {
        const [lat, lng] = [event.latLng.lat(), event.latLng.lng()];
        dispatch(mapClick(lat, lng))
    }

    useEffect(() => {
        setCenter({lat: 47.615400, lng: -122.338625})
        setZoom(13)
    }, [])

    return (
            <Map google={google} onClick={handleClick} center={center} zoom={zoom}>
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

                {results.listings.map(listing => (
                    <Marker key={listing.id} 
                        position={{lat: listing.coordinates.x, lng: listing.coordinates.y}} />
                ))}

            </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API_KEY
})(MapContainer)