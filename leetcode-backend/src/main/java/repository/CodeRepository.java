package repository;

import entity.CodeDAO;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CodeRepository extends MongoRepository<CodeDAO, Long> {
}
