package com.pets.backend.controllers;

import com.pets.backend.models.BaseModel;
import com.pets.backend.models.Country;
import com.pets.backend.repository.CountryRepository;
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
public class CountryController {

    @Autowired
    CountryRepository countryRepository;

    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getAllCountrys() {
        try {
            List<Country> countries = countryRepository.findAll();
            if (countries.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(countries, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/countries/{oid}")
    public ResponseEntity<Country> getCountryById(@PathVariable("oid") String oid) {
        Optional<Country> countryData = countryRepository.findById(BaseModel.getIdFromOid(oid));

        if (countryData.isPresent()) {
            return new ResponseEntity<>(countryData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/countries")
    public ResponseEntity<Country> createCountry(@RequestBody Country country) {
        try {
            Country _country = countryRepository
                    .save(country);
            return new ResponseEntity<>(_country, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/countries/{oid}")
    public ResponseEntity<Country> updateCountry(@PathVariable("oid") String oid, @RequestBody Country country) {
        Optional<Country> tutorialData = countryRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            Country _tutorial = tutorialData.get();
            _tutorial.setValue(country.getValue());
            return new ResponseEntity<>(countryRepository.save(_tutorial), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/countries/{oid}")
    public ResponseEntity<HttpStatus> deleteCountry(@PathVariable("oid") String oid) {
        try {
            countryRepository.deleteById(BaseModel.getIdFromOid(oid));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
