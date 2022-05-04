package repository;

import entity.CodeDAO;
import org.springframework.data.mongodb.repository.*;

public interface CodeRepository extends MongoRepository<CodeDAO, Long> {
}
