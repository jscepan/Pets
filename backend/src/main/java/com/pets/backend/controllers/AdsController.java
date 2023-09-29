package com.pets.backend.controllers;

import com.pets.backend.models.Ad;
import com.pets.backend.models.SearchFilter;
import com.pets.backend.repository.AdRepository;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4444/")
@RestController
@RequestMapping("/api")
public class AdsController {
    
    @Autowired
    AdRepository adRepository;
    
    @GetMapping("/ads")
    public ResponseEntity<List<Ad>> getAllAds(@RequestParam(required = false) String title) {
        try {
            List<Ad> tutorials = new ArrayList<>();
            
            if (title == null) {
                adRepository.findAll().forEach(tutorials::add);
            } else {
                adRepository.findByTitleContaining(title).forEach(tutorials::add);
            }
            
            if (tutorials.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            
            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/ads/{id}")
    public ResponseEntity<Ad> getAdById(@PathVariable("id") long id) {
        Optional<Ad> tutorialData = adRepository.findById(id);
        
        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @PostMapping("/ads")
    public ResponseEntity<Ad> createAd(@RequestBody Ad ad) {
        try {
            ad.setCreatedOn(Timestamp.valueOf(LocalDateTime.now()));
            Ad _ad = adRepository
                    .save(ad);
            return new ResponseEntity<>(_ad, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping("/ads/{id}")
    public ResponseEntity<Ad> updateAd(@PathVariable("id") long id, @RequestBody Ad ad) {
        Optional<Ad> tutorialData = adRepository.findById(id);
        
        if (tutorialData.isPresent()) {
            Ad _tutorial = tutorialData.get();
            _tutorial.setTitle(ad.getTitle());
            _tutorial.setDescription(ad.getDescription());
            return new ResponseEntity<>(adRepository.save(_tutorial), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping("/ads/{id}")
    public ResponseEntity<HttpStatus> deleteAd(@PathVariable("id") long id) {
        try {
            adRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/ads")
    public ResponseEntity<HttpStatus> deleteAllAds() {
        try {
            adRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/ads/search")
    public ResponseEntity<List<Ad>> findByTitle(@RequestBody SearchFilter filter) {
        try {
            List<Ad> tutorials = adRepository.findByTitleContaining(filter.getQuickSearch());
            if (tutorials.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
