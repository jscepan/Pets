package com.pets.backend.controllers;

import com.pets.backend.models.Ad;
import com.pets.backend.repository.AdRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/ads")
public class AdsController {

    @Autowired
    AdRepository adRepository;

    @GetMapping("/ads")
    public ResponseEntity<List<Ad>> getAllAds(@RequestParam(required = false) String title) {
        return ResponseEntity.ok(new ArrayList<>());
    }

    @GetMapping("/ads/{id}")
    public ResponseEntity<Ad> getAdById(@PathVariable("id") long id) {
        return ResponseEntity.ok(null);
    }

    @PostMapping("/ads")
    public ResponseEntity<Ad> createAd(@RequestBody Ad ad) {
        return ResponseEntity.ok(null);
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
