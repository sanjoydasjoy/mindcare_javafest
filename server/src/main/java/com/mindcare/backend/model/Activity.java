package com.mindcare.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "activity_logs")
public class Activity {
    @Id
    private String id;
    private String userId;
    private String activity;
    private String category;
    private String duration;
    private String notes;
    private Date date;

   
}