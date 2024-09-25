package com.mindcare.backend.service;

import com.mindcare.backend.exception.UserAlreadyExistsException;
import com.mindcare.backend.exception.InvalidCredentialsException;
import com.mindcare.backend.model.User;
import com.mindcare.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Logger;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder; // Inject BCryptPasswordEncoder

    private static final Logger logger = Logger.getLogger(UserService.class.getName());

    public User registerUser(User user) {
        // Check if the user already exists
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            logger.warning("Attempted registration of existing user: " + user.getEmail());
            throw new UserAlreadyExistsException("User already exists");
        }

        // Hash the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Hashing the password
        return userRepository.save(user);
    }

    public User authenticateUser(String email, String password) {
        System.out.println("Authenticating user with email: " + email);
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            System.out.println("User found, checking password.");
            if (passwordEncoder.matches(password, optionalUser.get().getPassword())) {
                return optionalUser.get(); // Return the user if found and password matches
            } else {
                System.out.println("Password mismatch for email: " + email);
            }
        } else {
            System.out.println("No user found with email: " + email);
        }
        throw new RuntimeException("Invalid credentials");
    }
    
}
