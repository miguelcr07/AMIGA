package es.udc.paproject.backend.model.services;

import es.udc.paproject.backend.rest.dtos.ParticipantDto;
import es.udc.paproject.backend.rest.dtos.ParticipantSummaryDto;

import java.util.List;
import java.util.Optional;

public interface ParticipantService {

    List<ParticipantSummaryDto> getParcipants();

    Optional<ParticipantDto> getParcipipant(Long idParticipant, int year);

    ParticipantDto saveParticipant(ParticipantDto participantDto);

    ParticipantDto updateParticipant(ParticipantDto participantDto);

    ParticipantDto updateAnnualData(ParticipantDto participantDto);
}
