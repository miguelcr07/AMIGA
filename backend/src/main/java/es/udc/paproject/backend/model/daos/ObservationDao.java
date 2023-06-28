package es.udc.paproject.backend.model.daos;

import es.udc.paproject.backend.model.entities.Observation;
import es.udc.paproject.backend.model.entities.Participant;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ObservationDao extends PagingAndSortingRepository<Observation, Long> {

    Slice<Observation> findByParticipantOrderByDateDesc(Participant participant, Pageable pageable);
}
