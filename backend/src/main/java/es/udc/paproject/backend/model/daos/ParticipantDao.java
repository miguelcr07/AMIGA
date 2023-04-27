package es.udc.paproject.backend.model.daos;

import es.udc.paproject.backend.model.entities.Participant;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ParticipantDao extends PagingAndSortingRepository<Participant, Long> {
}
