package com.pets.backend.controllers;

import com.pets.backend.models.Ad;
import com.pets.backend.repository.AdRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class AdsController {

    @Autowired
    AdRepository adRepository;

    @GetMapping("/ads")
    public ResponseEntity<List<Ad>> getAllAds(@RequestParam(required = false) String title) {
        try {
            List<Ad> tutorials = new ArrayList<Ad>();

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
            System.out.println("11111111");
            Ad _ad = adRepository
                    .save(new Ad(ad.getTitle(), ad.getDescription()));
            System.out.println("222222222222");
            return new ResponseEntity<>(_ad, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/ads/{id}")
    public ResponseEntity<Ad> updateAd(@PathVariable("id") long id, @RequestBody Ad ad) {
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("/ads/{id}")
    public ResponseEntity<HttpStatus> deleteAd(@PathVariable("id") long id) {
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("/ads")
    public ResponseEntity<HttpStatus> deleteAllAds() {
        return ResponseEntity.ok(null);
    }

    @GetMapping("/ads/search")
    public ResponseEntity<List<Ad>> findByTitle() {
        return ResponseEntity.ok(new ArrayList<>());
    }
}
