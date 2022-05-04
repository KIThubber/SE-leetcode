package Config;

import entity.CodeDAO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import repository.CodeRepository;

@EnableMongoRepositories(basePackageClasses = CodeRepository.class)
@Configuration
public class MongoConfig {
    @Bean
    CommandLineRunner commandLineRunner(CodeRepository codeRepository) {
        return strings -> {
            codeRepository.save(new CodeDAO(1,"public static void main() {" +
                    "int test =1;" +
                    "}", "j"));
            codeRepository.save(new CodeDAO(2,"public static void main() {" +
                    "int test =3;" +
                    "}", "j"));
        };
    }
}
