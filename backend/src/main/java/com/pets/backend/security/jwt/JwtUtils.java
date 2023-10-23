package com.pets.backend.security.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.pets.backend.security.services.UserDetailsImpl;
import io.jsonwebtoken.*;
import io.jsonwebtoken.impl.TextCodec;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

@Component
public class JwtUtils {

    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${pets.app.jwtSecret}")
    private String jwtSecret;

    @Value("${pets.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    private final static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public JwtUtils() {
        // Inicijalizujte ključ samo jednom, pri kreiranju bean-a
//        this.key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    public String generateJwtToken(Authentication authentication) {

        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject((userPrincipal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(key)
                .compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parserBuilder().setSigningKey(this.key).build().parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken) {
        try {
//            String secretKey = TextCodec.BASE64URL.encode(this.jwtSecret);
            System.out.println("01010101");
//            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(authToken);
            System.out.println("02020202");
            Jwts.parserBuilder().setSigningKey(key)
                    .build().parse(authToken);
            System.out.println("return true");
            return true;
        } catch (MalformedJwtException e) {
            System.out.println("0303030303");
            logger.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            System.out.println("0404040404");
            logger.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            System.out.println("0505050505");
            logger.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("0606060606");
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }
}
