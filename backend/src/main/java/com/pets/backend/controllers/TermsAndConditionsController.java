package com.pets.backend.controllers;

import com.pets.backend.models.BaseModel;
import com.pets.backend.models.TermsAndConditions;
import com.pets.backend.repository.TermsAndConditionsRepository;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4444/")
@RestController
@RequestMapping("/api")
public class TermsAndConditionsController {

    @Autowired
    TermsAndConditionsRepository termsAndConditionsRepository;

    @GetMapping("/termsAndConditions")
    public ResponseEntity<List<TermsAndConditions>> getAllTermsAndConditions() {
        try {
            List<TermsAndConditions> termsAndConditions = termsAndConditionsRepository.findAll();
            if (termsAndConditions.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(termsAndConditions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/termsAndConditions/{oid}")
    public ResponseEntity<TermsAndConditions> getTermsAndConditionsById(@PathVariable("oid") String oid) {
        Optional<TermsAndConditions> tutorialData = termsAndConditionsRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/termsAndConditions")
    public ResponseEntity<TermsAndConditions> createTermsAndConditions(@RequestBody TermsAndConditions termsAndConditions) {
        try {
            termsAndConditions.setCreatedOn(Timestamp.valueOf(LocalDateTime.now()));
            TermsAndConditions _termsAndConditions = termsAndConditionsRepository
                    .save(termsAndConditions);
            return new ResponseEntity<>(_termsAndConditions, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/termsAndConditions/{oid}")
    public ResponseEntity<TermsAndConditions> updateTermsAndConditions(@PathVariable("oid") String oid, @RequestBody TermsAndConditions termsAndConditions) {
        Optional<TermsAndConditions> tutorialData = termsAndConditionsRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            TermsAndConditions _tutorial = tutorialData.get();
            _tutorial.setTitle(termsAndConditions.getTitle());
            return new ResponseEntity<>(termsAndConditionsRepository.save(_tutorial), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/termsAndConditions/{oid}")
    public ResponseEntity<HttpStatus> deleteTermsAndConditions(@PathVariable("oid") String oid) {
        try {
            termsAndConditionsRepository.deleteById(BaseModel.getIdFromOid(oid));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
