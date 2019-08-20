import React from 'react'
import styled from 'styled-components'
import Drawer from '../drawer';
import Column from '../../elements/column';
import ListItem from '../../elements/listitem';


const Title = styled.h1`
    padding-left: 20px;
    margin: 20px 0;
`



const ScrollWrapper = styled.div`
    overflow: auto;
    height: 100%;
`

const ResultWrapper = styled.div`
    flex-shrink: 0;
    flex-grow: 1;
`



const ResultCard = ({listing}) => {
    return (
        <ListItem>
            {listing.address}
        </ListItem>
    )
}

const SearchResults = ({show, results}) => {
    return (
        <Drawer show={show}>
            <ScrollWrapper>
                <Title>Matching Results</Title>
                <ResultWrapper>
                    {results.listings.map(listing => (
                        <ResultCard key={listing.id} listing={listing} />
                    ))}
                </ResultWrapper>
            </ScrollWrapper>     
        </Drawer>
    )
}

export default SearchResults