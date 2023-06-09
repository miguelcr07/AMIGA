import {combineReducers} from 'redux';

import app from '../modules/app';
import users from '../modules/users';
import participant from "../modules/participant";

const rootReducer = combineReducers({
    app: app.reducer,
    users: users.reducer,
    participant: participant.reducer
});

export default rootReducer;
