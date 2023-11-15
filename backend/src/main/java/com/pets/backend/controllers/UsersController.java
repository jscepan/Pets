package com.pets.backend.controllers;

import com.pets.backend.models.BaseModel;
import com.pets.backend.models.User;
import com.pets.backend.repository.UserRepository;
import com.pets.backend.security.services.UserDetailsImpl;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
public class UsersController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users/profile")
    public ResponseEntity<User> getCurrentUser() {
        try {
            System.out.println("111");
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            System.out.println("222");
            UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();
            System.out.println("333");
            String username = userPrincipal.getUsername();
            System.out.println("username: " + username);
            Optional<User> userData = userRepository.findByUsername(username);

            if (userData.isPresent()) {
                return new ResponseEntity<>(userData.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/users/{oid}")
    public ResponseEntity<User> getUserById(@PathVariable("oid") String oid) {
        Optional<User> tutorialData = userRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        try {
            user.setCreatedOn(Timestamp.valueOf(LocalDateTime.now()));
            User _user = userRepository
                    .save(user);
            return new ResponseEntity<>(_user, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/users/{oid}")
    public ResponseEntity<User> updateUser(@PathVariable("oid") String oid, @RequestBody User user) {
        Optional<User> tutorialData = userRepository.findById(BaseModel.getIdFromOid(oid));

        if (tutorialData.isPresent()) {
            // TODO
            User _tutorial = tutorialData.get();
            _tutorial.setDisplayName(user.getDisplayName());
            return new ResponseEntity<>(userRepository.save(_tutorial), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/users/{oid}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("oid") String oid) {
        try {
            userRepository.deleteById(BaseModel.getIdFromOid(oid));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
