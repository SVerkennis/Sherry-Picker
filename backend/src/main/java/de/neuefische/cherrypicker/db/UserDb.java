package de.neuefische.cherrypicker.db;
import de.neuefische.cherrypicker.model.CherryUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDb extends PagingAndSortingRepository<CherryUser,String> {
}
