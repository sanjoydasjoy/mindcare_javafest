package com.mindcare.backend.controller;

import com.mindcare.backend.model.Activity;
import com.mindcare.backend.service.ActivityLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Uncomment for logging functionality
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/activity")
public class ActivityController {

    @Autowired
    private ActivityLogService activityLogService;

    // Uncomment and use logger for logging requests
    // private static final Logger logger = LoggerFactory.getLogger(ActivityController.class);

    @GetMapping("/{userId}")
    public List<Activity> getActivityLogs(@PathVariable String userId) {
        // Uncomment for logging activity retrieval
        // logger.info("Fetching activity logs for user: {}", userId);

        // Simple validation (optional)
        if (userId == null || userId.isEmpty()) {
            throw new IllegalArgumentException("User ID cannot be null or empty");
        }

        return activityLogService.getActivitiesByUserId(userId);
    }

    @PostMapping("/log")
    public Activity logActivity(@RequestBody Activity activityLog) {
        // Uncomment for logging activity creation
        // logger.info("Logging activity: {}", activityLog);

        return activityLogService.saveActivity(activityLog);
    }
}
