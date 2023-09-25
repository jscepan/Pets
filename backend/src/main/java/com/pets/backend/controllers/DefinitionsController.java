package com.pets.backend.controllers;

import com.pets.backend.models.Definitions;
import com.pets.backend.repository.DefinitionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4444/")
@RestController
@RequestMapping("/api")
public class DefinitionsController {

    @Autowired
    DefinitionsRepository definitionsRepository;

    @GetMapping("/definitions")
    public ResponseEntity<Definitions> getAllAds() {
        try {
            Definitions def = definitionsRepository.getAllDefinitions();
            return new ResponseEntity<>(def, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
