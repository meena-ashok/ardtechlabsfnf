package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.dto.LoginRequest;
import com.ardtechlabs.backend.dto.LoginResponse;
import com.ardtechlabs.backend.entity.AdminUser;
import com.ardtechlabs.backend.repository.AdminUserRepository;
import com.ardtechlabs.backend.security.JwtTokenProvider;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AdminUserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtTokenProvider jwtProvider;

    public AuthController(AdminUserRepository userRepo, PasswordEncoder encoder, JwtTokenProvider jwtProvider) {
        this.userRepo = userRepo;
        this.encoder = encoder;
        this.jwtProvider = jwtProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        AdminUser user = userRepo.findByEmail(request.getEmail())
                .orElse(null);

        if (user == null || !encoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid email or password"));
        }

        String token = jwtProvider.generateToken(user.getEmail(), user.getRole());
        return ResponseEntity.ok(new LoginResponse(token, user.getEmail(), user.getName(), user.getRole()));
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        if (!jwtProvider.validateToken(token)) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid token"));
        }
        String email = jwtProvider.getEmailFromToken(token);
        AdminUser user = userRepo.findByEmail(email).orElse(null);
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("error", "User not found"));
        }
        return ResponseEntity.ok(Map.of(
                "email", user.getEmail(),
                "name", user.getName(),
                "role", user.getRole()
        ));
    }
}
