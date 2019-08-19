import React from 'react'
import styled from 'styled-components'

import Overlay from '../elements/overlay'
import AbsoluteContainer from '../elements/absolute-container'
import ContentCenterContainer from '../elements/content-center-container'

const DialogWrapper = styled.div`
    background-color: white;
    border-radius: 4px;
    width: 400px;
    margin: 50px;
    padding: 30px;
    position: relative;
    box-shadow: 0 1px 6px 0px rgba(0, 0, 0, 0.4);
`

const Dialog = ({children}) => 
    <Overlay>
        <AbsoluteContainer>
            <ContentCenterContainer>
                <DialogWrapper>
                    {children}
                </DialogWrapper>
            </ContentCenterContainer>
        </AbsoluteContainer>
    </Overlay>

export default Dialog