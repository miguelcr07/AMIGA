import * as actionTypes from "./actionTypes";
import * as selectors from "./selectors";
import backend from "../../backend";

const findAllParticipantsCompleted = participantList => ({
    type: actionTypes.FIND_ALL_PARTICIPANTS_COMPLETED,
    participantList
});

export const findAllParticipants = () => (dispatch, getState) => {

    const participantList = selectors.getParticipantList(getState());

    if (!participantList) {

        backend.participant.getParticipants(
            participantList => dispatch(findAllParticipantsCompleted(participantList))
        );
    }
}

const findParticipantCompleted = participant => ({
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

const updateParticipantList = participantList => ({
    type: actionTypes.UPDATE_PARTICIPANTS,
    participantList
});

export const createParticipant = (data, onSucess, onErrors) => (dispatch) => {

    backend.participant.createParticipant(data,
        () => {
            backend.participant.getParticipants(
                participantList => {
                    dispatch(updateParticipantList(participantList));
                });
            onSucess();
            },
        onErrors);
}