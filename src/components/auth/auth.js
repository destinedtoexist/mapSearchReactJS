import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dialog from '../dialog'
import Login from './login'
import Signup from './signup';
import Spinner from '../spinner';
import showNotification from '../../utils/showNotification';

const PAGE = {LOG_IN: 'log_in', SIGN_UP: 'sign_up'}


const Auth = () => {
    let [page, setPage] = useState(PAGE.LOG_IN);
    let authData = useSelector(state => state.auth)

    useEffect(() => {
        if(authData.error) {
            showNotification(authData.error)
        }
    }, [authData.error])

    return (
        <Dialog>
            {authData.fetching && <Spinner>Loding</Spinner>}
            {page===PAGE.LOG_IN ? 
                <Login showSignUp={() => setPage(PAGE.SIGN_UP)} />
                : <Signup showLogIn={() => setPage(PAGE.LOG_IN)}/>}
           
        </Dialog>
    )
}


export default Auth