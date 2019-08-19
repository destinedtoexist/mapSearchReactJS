import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Form from '../../elements/form';
import Input from '../../elements/input';
import A from '../../elements/a';
import Button from '../../elements/button';
import Row from '../../elements/row';
import useValidate from '../../hooks/useInputValidate';
import { Rule } from '../../utils/validator';
import { attemptLogin } from '../../store/actions';


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

const Login = ({showSignUp}) => {
    function onSignupRequest(e){
        e.preventDefault()
        showSignUp()
    }

    const dispatch = useDispatch()

    const email = useValidate([
        new Rule('email')
    ])

    const password = useValidate([
        new Rule('min_length:4', 'Atleast 4 characters'),
        new Rule('password')
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if( email.validate() && password.validate() ) {
            dispatch(attemptLogin({
                email: email.value,
                password: password.value
            }))
        }
    }


    return (
        <React.Fragment>
            <Title>Hey there</Title>
            <Form onSubmit={handleSubmit}>
                <_InputsContainer>
                    <Input placeholder='Email' {...email} />
                    <Input placeholder='Password' type='password' {...password} />
                    <A href='#'>Forgot your password?</A>
                </_InputsContainer>
                <Button type="submit">Log In</Button>
            </Form>
            <Row padding="10px 0">
                <_Span>Don't have an account yet? </_Span>
                <A href='#' onClick={onSignupRequest}>Sign Up</A></Row>
        </React.Fragment>
    )
}

export default Login