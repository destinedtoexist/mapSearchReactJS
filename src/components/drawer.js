import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DrawerContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: ${props => props.width ? props.width + 'px' : '400px'};
    box-shadow: ${({open}) => open ? '1px 0px 7px 3px rgba(0,0,0,0.4)' : 'none'};
    z-index: 1;
    background-color: ${({open}) => open ? 'white' : 'initial'};
    transition: all 0.2s;
    transform: ${({open}) => open ? 'translate(0)' : 'translate(100%)'};
`

const DrawerControl = styled.div`
    color: rgba(0, 0, 0, 0.5);
    background-color: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    box-shadow: -6px 0px 5px -2px rgba(0,0,0,0.3);
    border-radius: 50%;
    cursor: pointer;
`

const DrawerContentWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    right: 0;
    background-color: inherit;
`

const Drawer = ({children, show}) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(show)
    }, [show])

    return (
        <DrawerContainer open={open}>
            <DrawerControl onClick={(e) => setOpen(!open)}>{open && '>'}</DrawerControl>
            <DrawerContentWrapper>
                {children}
            </DrawerContentWrapper>
            
        </DrawerContainer>
    )
}

export default Drawer