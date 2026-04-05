package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.*;
import com.ardtechlabs.backend.repository.*;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "https://ardtechlabs.lovable.app")
@RequestMapping("/api/public")
public class PublicController {

    private final ServiceRepository serviceRepo;
    private final ProjectRepository projectRepo;
    private final CaseStudyRepository caseStudyRepo;
    private final TestimonialRepository testimonialRepo;
    private final FaqRepository faqRepo;
    private final TeamMemberRepository teamRepo;
    private final TechStackRepository techStackRepo;
    private final HireTalentRepository hireTalentRepo;
    private final ContactMessageRepository contactRepo;
    private final SiteSettingRepository settingRepo;

    public PublicController(ServiceRepository serviceRepo, ProjectRepository projectRepo,
                           CaseStudyRepository caseStudyRepo, TestimonialRepository testimonialRepo,
                           FaqRepository faqRepo, TeamMemberRepository teamRepo,
                           TechStackRepository techStackRepo, HireTalentRepository hireTalentRepo,
                           ContactMessageRepository contactRepo, SiteSettingRepository settingRepo) {
        this.serviceRepo = serviceRepo;
        this.projectRepo = projectRepo;
        this.caseStudyRepo = caseStudyRepo;
        this.testimonialRepo = testimonialRepo;
        this.faqRepo = faqRepo;
        this.teamRepo = teamRepo;
        this.techStackRepo = techStackRepo;
        this.hireTalentRepo = hireTalentRepo;
        this.contactRepo = contactRepo;
        this.settingRepo = settingRepo;
    }

    @GetMapping("/services")
    public List<Service> getServices() {
        return serviceRepo.findByActiveTrueOrderBySortOrderAsc();
    }

    @GetMapping("/projects")
    public List<Project> getProjects(@RequestParam(required = false) String category) {
        if (category != null && !category.equals("all")) {
            return projectRepo.findByActiveTrueAndCategoryOrderBySortOrderAsc(category);
        }
        return projectRepo.findByActiveTrueOrderBySortOrderAsc();
    }

    @GetMapping("/case-studies")
    public List<CaseStudy> getCaseStudies() {
        return caseStudyRepo.findByActiveTrueOrderBySortOrderAsc();
    }

    @GetMapping("/testimonials")
    public List<Testimonial> getTestimonials() {
        return testimonialRepo.findByActiveTrueOrderBySortOrderAsc();
    }

    @GetMapping("/faqs")
    public List<Faq> getFaqs() {
        return faqRepo.findByActiveTrueOrderBySortOrderAsc();
    }

    @GetMapping("/team")
    public List<TeamMember> getTeam() {
        return teamRepo.findByActiveTrueOrderBySortOrderAsc();
    }

    @GetMapping("/tech-stack")
    public List<TechStack> getTechStack() {
        return techStackRepo.findByActiveTrueOrderBySortOrderAsc();
    }

    @GetMapping("/hire-talents")
    public List<HireTalent> getHireTalents() {
        return hireTalentRepo.findByActiveTrueOrderBySortOrderAsc();
    }

    @PostMapping("/contact")
    public ResponseEntity<?> submitContact(@Valid @RequestBody ContactMessage message) {
        contactRepo.save(message);
        return ResponseEntity.ok(Map.of("success", true, "message", "Message sent successfully"));
    }

    @GetMapping("/settings")
    public Map<String, String> getAllSettings() {
        return settingRepo.findAll().stream()
                .collect(Collectors.toMap(SiteSetting::getSettingKey, SiteSetting::getSettingValue));
    }

    @GetMapping("/settings/{key}")
    public ResponseEntity<?> getSetting(@PathVariable String key) {
        return settingRepo.findBySettingKey(key)
                .map(s -> ResponseEntity.ok(Map.of("key", s.getSettingKey(), "value", s.getSettingValue())))
                .orElse(ResponseEntity.notFound().build());
    }
}
