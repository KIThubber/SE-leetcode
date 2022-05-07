package repository;

import model.CodeDAO;
import org.springframework.data.mongodb.repository.*;

public interface CodeRepository extends MongoRepository<CodeDAO, Long> {
}
