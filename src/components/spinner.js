import React from 'react'
import styled from 'styled-components'
import Overlay from '../elements/overlay';
import AbsoluteContainer from '../elements/absolute-container';
import ContentCenterContainer from '../elements/content-center-container';

const _Spinner = styled.div`
    ::after{
        display: block;
        content: 'Loading';
        border-radius: 3px;
        padding: 4px;
        color: white;
        background-color: rgb(0, 0, 0, 0.8);
    }
`

export default () =>
        <AbsoluteContainer>
            <ContentCenterContainer>
                <_Spinner />
            </ContentCenterContainer>
        </AbsoluteContainer>
    