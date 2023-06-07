import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    participantList: null,
    participant: null,
};

const participantList = (state = initialState.participantList, action) => {

    switch (action.type) {

        case actionTypes.FIND_ALL_PARTICIPANTS_COMPLETED:
            return action.participantList;

        case actionTypes.UPDATE_PARTICIPANTS:
            return action.participantList;

        default:
            return state;

    }

}

const participant = (state = initialState.participant, action) => {

    switch (action.type) {

        case actionTypes.FIND_PARTICIPANT_DATA_COMPLETED:
            return action.participant;

        default:
            return state;

    }

}
const reducer = combineReducers({
    participantList,
    participant
});

export default reducer;