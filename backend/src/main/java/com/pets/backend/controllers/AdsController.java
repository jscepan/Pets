package com.pets.backend.controllers;

import com.pets.backend.models.Ad;
import com.pets.backend.models.BaseModel;
import com.pets.backend.models.SearchFilter;
import com.pets.backend.repository.AdCriteriaRepository;
import com.pets.backend.repository.AdRepository;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4444/")
@RestController
@RequestMapping("/api")
public class AdsController {

    @Autowired
    AdRepository adRepository;
    @Autowired
    AdCriteriaRepository adCriteriaRepository;

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

    @GetMapping("/ads/{oid}")
    public ResponseEntity<Ad> getAdById(@PathVariable("oid") String oid) {
        Optional<Ad> tutorialData = adRepository.findById(BaseModel.getIdFromOid(oid));

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

    @PutMapping("/ads/{oid}")
    public ResponseEntity<Ad> updateAd(@PathVariable("oid") String oid, @RequestBody Ad ad) {
        Optional<Ad> tutorialData = adRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            Ad _tutorial = tutorialData.get();
            _tutorial.setTitle(ad.getTitle());
            _tutorial.setDescription(ad.getDescription());
            return new ResponseEntity<>(adRepository.save(_tutorial), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/ads/{oid}")
    public ResponseEntity<HttpStatus> deleteAd(@PathVariable("oid") String oid) {
        try {
            adRepository.deleteById(BaseModel.getIdFromOid(oid));
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

    @PostMapping("/ads/search")
    public ResponseEntity<Page<Ad>> search(@RequestBody SearchFilter searchFilter) {
        try {
            return new ResponseEntity<>(adCriteriaRepository.findAllWithFilters(searchFilter.getAdPage(), searchFilter.getAdSearchCriteria()), HttpStatus.OK);
        } catch (Exception e) {
            Logger.getLogger(AdsController.class.getName()).log(Level.SEVERE, null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
