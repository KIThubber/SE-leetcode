package controller;


import entity.CodeDAO;
import entity.CodeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repository.CodeRepository;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/code/v1")
public class CodeController {

    @Autowired
    CodeRepository codeRepository;

    @GetMapping
    public ResponseEntity<List<CodeDAO>> getCodeExamples() {
        try {
            return new ResponseEntity<List<CodeDAO>>(codeRepository.findAll(), HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<List<CodeDAO>>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<List<CodeDAO>>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

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
