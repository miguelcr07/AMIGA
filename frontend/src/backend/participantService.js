import {appFetch, config} from "./appFetch";

export const getParticipants = (onSuccess) =>
    appFetch('/participant/get', config('GET'), onSuccess);

export const getParticipantData = (id, year, onSuccess) =>{
    let path = '/participant/${id}?year=';
    path += year ? `${year}` : new Date().getFullYear();

    appFetch(path, config('GET'), onSuccess);
}

export const createParticipant = ( data, onSuccess, onErrors) =>
    appFetch(`/participant/save`,
        config('POST', {data}), onSuccess, onErrors);