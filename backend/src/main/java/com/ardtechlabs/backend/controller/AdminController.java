package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.dto.DashboardStats;
import com.ardtechlabs.backend.entity.*;
import com.ardtechlabs.backend.repository.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final ServiceRepository serviceRepo;
    private final ProjectRepository projectRepo;
    private final CaseStudyRepository caseStudyRepo;
    private final TestimonialRepository testimonialRepo;
    private final FaqRepository faqRepo;
    private final TeamMemberRepository teamRepo;
    private final ContactMessageRepository contactRepo;
    private final SiteSettingRepository settingRepo;

    public AdminController(ServiceRepository serviceRepo, ProjectRepository projectRepo,
                          CaseStudyRepository caseStudyRepo, TestimonialRepository testimonialRepo,
                          FaqRepository faqRepo, TeamMemberRepository teamRepo,
                          ContactMessageRepository contactRepo, SiteSettingRepository settingRepo) {
        this.serviceRepo = serviceRepo;
        this.projectRepo = projectRepo;
        this.caseStudyRepo = caseStudyRepo;
        this.testimonialRepo = testimonialRepo;
        this.faqRepo = faqRepo;
        this.teamRepo = teamRepo;
        this.contactRepo = contactRepo;
        this.settingRepo = settingRepo;
    }

    @GetMapping("/stats")
    public DashboardStats getStats() {
        return new DashboardStats(
                serviceRepo.count(),
                projectRepo.count(),
                testimonialRepo.count(),
                faqRepo.count(),
                teamRepo.count(),
                caseStudyRepo.count(),
                contactRepo.count(),
                contactRepo.countByReadFalse()
        );
    }

    @GetMapping("/contact-messages")
    public List<ContactMessage> getAllMessages() { return contactRepo.findAllByOrderByCreatedAtDesc(); }

    @GetMapping("/contact-messages/unread")
    public List<ContactMessage> getUnreadMessages() { return contactRepo.findByReadFalseOrderByCreatedAtDesc(); }

    @PutMapping("/contact-messages/{id}/read")
    public ResponseEntity<?> markRead(@PathVariable Long id) {
        return contactRepo.findById(id).map(msg -> {
            msg.setRead(true);
            contactRepo.save(msg);
            return ResponseEntity.ok(Map.of("success", true));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/contact-messages/{id}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long id) {
        contactRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    @GetMapping("/site-settings")
    public List<SiteSetting> getAllSettings() { return settingRepo.findAll(); }

    @PutMapping("/site-settings/{key}")
    public ResponseEntity<?> updateSetting(@PathVariable String key, @RequestBody Map<String, String> body) {
        SiteSetting setting = settingRepo.findBySettingKey(key)
                .orElse(SiteSetting.builder().settingKey(key).build());
        setting.setSettingValue(body.get("value"));
        settingRepo.save(setting);
        return ResponseEntity.ok(setting);
    }
}
