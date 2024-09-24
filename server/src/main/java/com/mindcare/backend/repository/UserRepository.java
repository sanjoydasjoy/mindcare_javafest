// src/main/java/com/mindcare/backend/repository/UserRepository.java
package com.mindcare.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mindcare.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
