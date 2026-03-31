package com.ardtechlabs.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardStats {
    private long totalServices;
    private long totalProjects;
    private long totalTestimonials;
    private long totalFaqs;
    private long totalTeamMembers;
    private long totalCaseStudies;
    private long totalMessages;
    private long unreadMessages;
}
