import React from 'react'
import styled from 'styled-components'

const _Input = styled.input`
    border-radius: 3px;
    border: solid thin rgba(0, 0, 0, 0.3);
    font-size: 16px;
    padding: 8px;
    width: 100%;
    ::placeholder{

    }
    :focus{
        outline: none;
    }
`

const _InputWrapper = styled.div`
    padding-bottom: 20px;
`

const _InputHint = styled.div`
    font-size: 10px;
    position: absolute;
`

const Input = (props) => 
    <_InputWrapper>
        <_Input {...props} />
        <_InputHint>{props.hint}</_InputHint>
    </_InputWrapper>

export default Input;