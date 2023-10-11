package com.pets.backend.controllers;

import com.pets.backend.models.User;
import com.pets.backend.repository.UserRepository;
import com.pets.backend.security.services.UserDetailsImpl;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4444/")
@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/profile")
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
}
