package com.pets.backend.controllers;

import com.pets.backend.models.Promotion;
import com.pets.backend.models.SearchFilter;
import com.pets.backend.repository.PromotionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4444/")
@RestController
@RequestMapping("/api")
public class PromotionController {

    @Autowired
    PromotionRepository promotionRepository;

    @PostMapping("/promotions/search")
    public ResponseEntity<List<Promotion>> findByTitle(@RequestBody SearchFilter filter) {
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
}
