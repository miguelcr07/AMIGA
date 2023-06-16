import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    participantSummary: null,
    participant: null,
};

const participantSummary = (state = initialState.participantSummary, action) => {

    switch (action.type) {

        case actionTypes.FIND_PARTICIPANTS_SUMMARY_COMPLETED:
            return action.participantSummary;

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
    participantSummary,
    participant
});

export default reducer;