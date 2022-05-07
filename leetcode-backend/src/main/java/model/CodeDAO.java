package model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(value="code")
@NoArgsConstructor
@Getter
@Setter
@EnableAutoConfiguration
public class CodeDAO {
    @Id
    private long codeId;
    private String code;
    private String language;
    private long userId;
    private String result;


    public CodeDAO(long userId, String code, String language, String result) {
        this.userId = userId;
        this.code = code;
        this.language = language;
        this.result = result;
    }
}