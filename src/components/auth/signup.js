import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import Form from '../../elements/form';
import Input from '../../elements/input';
import A from '../../elements/a';
import Button from '../../elements/button';
import Row from '../../elements/row';
import useValidate from '../../hooks/useInputValidate';
import { Rule } from '../../utils/validator';
import { attemptRegister } from '../../store/actions';



const Title = styled.h1`
    text-align: center;
`

const _InputsContainer = styled.div`
    padding: 20px 0;
`

const _Span = styled.span`
    display: block;
    margin-right: 8px;
`


const Signup = ({showLogIn}) => {
    const onLoginRequest = (e) => {
        e.preventDefault()
        showLogIn()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.validate() &&
            password.validate() &&
            firstName.validate &&
            lastName.validate &&
            phoneNumber.validate()) {
                dispatch(attemptRegister({
                    email: email.value, 
                    password: password.value, 
                    firstName: firstName.value, 
                    lastName: lastName.value, 
                    phoneNumber: phoneNumber.value
                }))
            }
            
    }

    const email = useValidate()
    const password = useValidate()
    const firstName = useValidate()
    const lastName = useValidate()
    const phoneNumber = useValidate([
        new Rule('regex:^\\d{10}$', 'Please enter 10 digit mobile number')
    ])

    const dispatch = useDispatch()


    return (
        <React.Fragment>
            <Title>Sign Up</Title>
            <Form onSubmit={handleSubmit}>
                <_InputsContainer>
                    <Input placeholder='Email' {...email} />
                    <Input placeholder='Password' type='password' {...password} />
                    <Input placeholder='First name' {...firstName} />
                    <Input placeholder='Last name' {...lastName}/>
                    <Input placeholder='Phone Number' {...phoneNumber}/>
                </_InputsContainer>
                <Button type="submit">Signup</Button>
            </Form>
            <Row padding="10px 0">
                <_Span>Already a Flyhomes member? </_Span>
                <A href='#' onClick={onLoginRequest}>Log In</A></Row>
        </React.Fragment>
    )
}

export default Signup