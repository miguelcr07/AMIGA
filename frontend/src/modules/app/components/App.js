import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import users from '../../users';
import participant from "../../participant";
import * as actions from "../actions";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(users.actions.tryLoginFromServiceToken(
            () => dispatch(users.actions.logout())));

        dispatch(participant.actions.findAllParticipants());

        dispatch(actions.findAllCountries());
        dispatch(actions.findAllProvinces());
        dispatch(actions.findAllMunicipalities());
        dispatch(actions.findAllLanguages());
        dispatch(actions.findAllEmployments());
        dispatch(actions.findAllStudies());
        dispatch(actions.findAllMaritalStatus());
        dispatch(actions.findAllHousings());
        dispatch(actions.findAllCohabitations());
        dispatch(actions.findAllExclusions());
        dispatch(actions.findAllPrograms());
        dispatch(actions.findAllDemands());
    });

    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );

}
    
export default App;
