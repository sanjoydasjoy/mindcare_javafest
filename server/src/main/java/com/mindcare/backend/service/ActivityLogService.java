package com.mindcare.backend.service;

import com.mindcare.backend.model.Activity;
import com.mindcare.backend.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityLogService {

    @Autowired
    private ActivityRepository activityLogRepository;

    public List<Activity> getActivitiesByUserId(String userId) {
        return activityLogRepository.findByUserId(userId);
    }

    public Activity saveActivity(Activity activityLog) {
        return activityLogRepository.save(activityLog);
    }
}