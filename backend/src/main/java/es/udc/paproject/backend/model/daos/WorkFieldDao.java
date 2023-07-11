package es.udc.paproject.backend.model.daos;

import es.udc.paproject.backend.model.entities.WorkField;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface WorkFieldDao extends PagingAndSortingRepository<WorkField, Long> {
}
