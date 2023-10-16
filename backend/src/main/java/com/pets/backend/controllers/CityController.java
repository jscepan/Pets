package com.pets.backend.controllers;

import com.pets.backend.models.BaseModel;
import com.pets.backend.models.City;
import com.pets.backend.repository.CityRepository;
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
public class CityController {

    @Autowired
    CityRepository cityRepository;

    @GetMapping("/cities")
    public ResponseEntity<List<City>> getAllCities() {
        try {
            List<City> cities = cityRepository.findAll();
            if (cities.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(cities, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/cities/{oid}")
    public ResponseEntity<City> getCityById(@PathVariable("oid") String oid) {
        Optional<City> tutorialData = cityRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/cities")
    public ResponseEntity<City> createCity(@RequestBody City city) {
        try {
            City _city = cityRepository
                    .save(city);
            return new ResponseEntity<>(_city, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/cities/{oid}")
    public ResponseEntity<City> updateCity(@PathVariable("oid") String oid, @RequestBody City city) {
        Optional<City> tutorialData = cityRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            City _tutorial = tutorialData.get();
            _tutorial.setValue(city.getValue());
            return new ResponseEntity<>(cityRepository.save(_tutorial), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/cities/{oid}")
    public ResponseEntity<HttpStatus> deleteCity(@PathVariable("oid") String oid) {
        try {
            cityRepository.deleteById(BaseModel.getIdFromOid(oid));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
