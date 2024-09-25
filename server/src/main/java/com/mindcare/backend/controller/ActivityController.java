package com.mindcare.backend.controller;

import com.mindcare.backend.model.Activity;
import com.mindcare.backend.service.ActivityLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activity")
public class ActivityController {

    @Autowired
    private ActivityLogService activityLogService;

    @GetMapping("/{userId}")
    public List<Activity> getActivityLogs(@PathVariable String userId) {
        return activityLogService.getActivitiesByUserId(userId);
    }

    @PostMapping("/log")
    public Activity logActivity(@RequestBody Activity activityLog) {
        return activityLogService.saveActivity(activityLog);
    }
}