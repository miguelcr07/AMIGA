package es.udc.paproject.backend.model.services;

import es.udc.paproject.backend.model.entities.Observation;
import es.udc.paproject.backend.rest.dtos.ObservationDto;

public interface ObservationService {

    Observation createObsevation(ObservationDto observationDto);
    Block<Observation> getObservations(Long  idParticipant, int page, int size);
    Observation updateObservation(ObservationDto observationDto);
    void deleteObservation(Long idObservation);
}
