package com.mindcare.backend.controller;

import com.mindcare.backend.dto.AuthResponse;
import com.mindcare.backend.dto.LoginRequest;
import com.mindcare.backend.model.User;
import com.mindcare.backend.service.UserService;
import com.mindcare.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        try {
            User savedUser = userService.registerUser(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        System.out.println("Login attempt with email: " + loginRequest.getEmail());
        try {
            User authenticatedUser = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
            if (authenticatedUser != null) {
                System.out.println("User authenticated: " + authenticatedUser.toString());
                String token = jwtUtil.generateToken(authenticatedUser.getEmail());
                return ResponseEntity.ok(new AuthResponse(authenticatedUser, token));
            } else {
                System.out.println("Authentication failed for email: " + loginRequest.getEmail());
                return ResponseEntity.status(401).body("Invalid credentials");
            }
        } catch (Exception e) {
            System.out.println("Error during authentication: " + e.getMessage());
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }
}
