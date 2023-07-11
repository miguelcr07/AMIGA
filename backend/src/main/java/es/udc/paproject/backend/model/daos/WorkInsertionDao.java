package es.udc.paproject.backend.model.daos;

import es.udc.paproject.backend.model.entities.WorkInsertion;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface WorkInsertionDao extends PagingAndSortingRepository<WorkInsertion, Long> {
}
