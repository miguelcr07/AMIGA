import * as actionTypes from "./actionTypes";
import * as selectors from "./selectors";
import backend from "../../backend";

export const findParticipantCompleted = participant => ({
    type: actionTypes.FIND_PARTICIPANT_DATA_COMPLETED,
    participant
});

export const findParticipant = (id, year) => (dispatch) => {
    backend.participant.getParticipantData(id, year,
        (participant) => {
            dispatch(findParticipantCompleted(participant));
        }
    );
}

export const setParticipantSummary = participantSummary => ({
    type: actionTypes.FIND_PARTICIPANTS_SUMMARY_COMPLETED,
    participantSummary
});
