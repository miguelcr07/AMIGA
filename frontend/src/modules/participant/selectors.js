const getModuleState = state => state.participant;

export const getParticipantList = state =>
    getModuleState(state).participantList;

export const getParticipantData = state =>
    getModuleState(state).participant;