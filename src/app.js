import React, { useEffect } from 'react';
import Auth from './components/auth/auth';
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from './store'
import MapSearch from './components/mapSearch';
import { checkLogin } from './store/actions';

const AppContainer = () => {
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => dispatch(checkLogin()), [])
    return (
        <div>
            <MapSearch />
            {!auth.loggedIn && <Auth />}
        </div>
    )
}

const App = () => 
    <Provider store={store}>
        <AppContainer />
    </Provider>
export default App;