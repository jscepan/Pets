package com.pets.backend.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pets.backend.models.ERole;
import com.pets.backend.models.Role;
import com.pets.backend.models.User;
import com.pets.backend.payload.request.LoginRequest;
import com.pets.backend.payload.request.SignupRequest;
import com.pets.backend.payload.response.JwtResponse;
import com.pets.backend.payload.response.MessageResponse;
import com.pets.backend.repository.RoleRepository;
import com.pets.backend.repository.UserRepository;
import com.pets.backend.security.jwt.JwtUtils;
import com.pets.backend.security.services.UserDetailsImpl;

/*
maxAge je atribut koji se koristi u Spring Security anotaciji @CrossOrigin. Ovaj atribut definiše maksimalnu dozvoljenu starost (u sekundama) koja se postavlja u
HTTP odgovoru za pretragu. Ona označava koliko dugo klijent može da čuva predhodno primljene odgovore u kešu pre nego što zatraži novo osveženje od servera.
U konkretnom slučaju, maxAge = 3600 označava da će odgovori sa servera biti keširani na klijentu maksimalno 3600 sekundi (ili 1 sat). Ovo može poboljšati performanse
i smanjiti opterećenje servera tako što će se smanjiti broj ponovnih zahteva sa istim parametrima.
Ako je maxAge postavljen na nulu ili nije naveden, to znači da se odgovori ne smeju keširati i da će se svaki zahtev poslati direktno serveru bez upotrebe keša.
Važno je napomenuti da upotreba keširanja može uticati na bezbednost aplikacije, posebno ako se koristi u kombinaciji sa kritičnim operacijama. Odluka o tome kako
konfigurisati maxAge treba da bude usklađena sa specifičnim zahtevima i bezbednosnim potrebama vaše aplikacije.
 */
@CrossOrigin(origins = "http://localhost:4444/", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "back_office":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_BACK_OFFICE)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "company_admin":
                        Role modRole = roleRepository.findByName(ERole.ROLE_COMPANY_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
