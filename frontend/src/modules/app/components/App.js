import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import React from 'react'

import ResponsiveAppBar from "./ResponsiveAppBar";
import Body from './Body';


import users from '../../users';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(users.actions.tryLoginFromServiceToken(
            () => dispatch(users.actions.logout())));

    });
    
    return (
        <div>
            <ResponsiveAppBar/>
            <Body/>
        </div>
    );

}
    
export default App;
