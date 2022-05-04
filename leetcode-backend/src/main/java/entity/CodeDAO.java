package entity;


import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
@NoArgsConstructor
@EnableAutoConfiguration
public class CodeDAO {
    @Id
    private long codeId;
    private String code;
    private String language;
    private long userId;


    public CodeDAO(long userId, String code, String language) {
        this.userId = userId;
        this.code = code;
        this.language = language;
    }
}