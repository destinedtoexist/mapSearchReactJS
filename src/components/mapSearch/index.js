import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import RelativeContainer from '../../elements/relativeContainer';
import SearchResults from './searchResults';
import MapContainer from './mapContainer';
import SearchControl from './searchControl'
import { SEARCH_REQUEST_STATE } from '../../store/reducers/search';
import Spinner from '../spinner';

export default () => {
    const [polygon, auth, search] = useSelector((state) => {
        return [state.polygon, state.auth, state.search]
    })

    return (
        <RelativeContainer>
            <MapContainer  {...polygon} />
            {auth.loggedIn && <SearchControl position='bottom-left' {...polygon}    />}
            {auth.loggedIn && <SearchResults show={search.request===SEARCH_REQUEST_STATE.COMPLETED}/>}
            {search.request===SEARCH_REQUEST_STATE.STARTED && <Spinner>Loding</Spinner>}
        </RelativeContainer>
    )
}

