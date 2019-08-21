import React, { useState, useEffect, Suspense } from 'react'
import { useSelector } from 'react-redux'
import RelativeContainer from '../../elements/relativeContainer';
import SearchResults from './searchResults';
import SearchControl from './searchControl'
import { SEARCH_REQUEST_STATE } from '../../store/reducers/search';
import Spinner from '../spinner';
import showNotification from '../../utils/showNotification';

const MapContainer = React.lazy(() => import('./mapContainer'));

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
            <Suspense fallback={<div>Loading...</div>}>
                <MapContainer  {...polygon} {...search} />
            </Suspense>
            {auth.loggedIn && <SearchControl position='bottom-left' {...polygon}    />}
            {auth.loggedIn && <SearchResults show={search.request===SEARCH_REQUEST_STATE.COMPLETED} {...search}/>}
            {search.request===SEARCH_REQUEST_STATE.STARTED && <Spinner>Loding</Spinner>}
        </RelativeContainer>
    )
}

