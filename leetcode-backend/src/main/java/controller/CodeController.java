package controller;


import entity.CodeDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/code/v1")
public class CodeController {

    @PostMapping("/{userId}")
    public ResponseEntity<CodeDTO> createCodeExample(@PathVariable long userId, String code, String language) {
        try {
            return null;
        } catch (NoSuchElementException e) {
            return new ResponseEntity<CodeDTO>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<CodeDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/{userId}/{codeId}")
    public ResponseEntity<CodeDTO> changeCodeExample(@PathVariable long userId, @PathVariable long codeId, String code, String language) {
        try {
            return null;
        } catch (NoSuchElementException e) {
            return new ResponseEntity<CodeDTO>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<CodeDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
