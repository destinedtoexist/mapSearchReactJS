import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    padding: 12px 16px;
    box-shadow: 0 0px 2px -1px rgba(0,0,0,0.6);
    margin: 1px 0;
`

const ListItem = ({children}) => {
    return (
        <Card>
            {children}
        </Card>
    )
}

export default ListItem