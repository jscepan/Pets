package com.pets.backend.controllers;

import com.pets.backend.models.BaseModel;
import com.pets.backend.models.Promotion;
import com.pets.backend.repository.PromotionRepository;
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
public class PromotionController {

    @Autowired
    PromotionRepository promotionRepository;

    @GetMapping("/promotions")
    public ResponseEntity<List<Promotion>> getAllPromotions() {
        try {
            List<Promotion> promotions = promotionRepository.findAll();
            if (promotions.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(promotions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/promotions/{oid}")
    public ResponseEntity<Promotion> getPromotionById(@PathVariable("oid") String oid) {
        Optional<Promotion> tutorialData = promotionRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/promotions")
    public ResponseEntity<Promotion> createPromotion(@RequestBody Promotion promotion) {
        try {
            promotion.setCreatedOn(Timestamp.valueOf(LocalDateTime.now()));
            Promotion _promotion = promotionRepository
                    .save(promotion);
            return new ResponseEntity<>(_promotion, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/promotions/{oid}")
    public ResponseEntity<Promotion> updatePromotion(@PathVariable("oid") String oid, @RequestBody Promotion promotion) {
        Optional<Promotion> tutorialData = promotionRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            Promotion _tutorial = tutorialData.get();
            _tutorial.setTitle(promotion.getTitle());
            _tutorial.setDescription(promotion.getDescription());
            return new ResponseEntity<>(promotionRepository.save(_tutorial), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/promotions/{oid}")
    public ResponseEntity<HttpStatus> deletePromotion(@PathVariable("oid") String oid) {
        try {
            promotionRepository.deleteById(BaseModel.getIdFromOid(oid));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
