package com.mindcare.backend.repository;

import com.mindcare.backend.model.Activity;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ActivityRepository extends MongoRepository<Activity, String> {
    List<Activity> findByUserId(String userId);
}