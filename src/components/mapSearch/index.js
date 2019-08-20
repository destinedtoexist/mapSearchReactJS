import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import RelativeContainer from '../../elements/relativeContainer';
import SearchResults from './searchResults';
import MapContainer from './mapContainer';
import SearchControl from './searchControl'
import { SEARCH_REQUEST_STATE } from '../../store/reducers/search';
import Spinner from '../spinner';
import showNotification from '../../utils/showNotification';

export default () => {
    const [polygon, auth, search] = useSelector((state) => {
        return [state.polygon, state.auth, state.search]
    })

    useEffect(() => {
        if(search.request===SEARCH_REQUEST_STATE.ERROR) {
            showNotification(search.error)
        }
    }, [search.request])

    return (
        <RelativeContainer>
            <MapContainer  {...polygon} {...search} />
            {auth.loggedIn && <SearchControl position='bottom-left' {...polygon}    />}
            {auth.loggedIn && <SearchResults show={search.request===SEARCH_REQUEST_STATE.COMPLETED} {...search}/>}
            {search.request===SEARCH_REQUEST_STATE.STARTED && <Spinner>Loding</Spinner>}
        </RelativeContainer>
    )
}

