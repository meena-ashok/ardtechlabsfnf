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
    private final TechStackRepository techStackRepo;
    private final HireTalentRepository hireTalentRepo;
    private final ContactMessageRepository contactRepo;
    private final SiteSettingRepository settingRepo;

    public AdminController(ServiceRepository serviceRepo, ProjectRepository projectRepo,
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

    // Dashboard Stats
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

    // Services CRUD
    @GetMapping("/services")
    public List<Service> getAllServices() { return serviceRepo.findAll(); }

    @PostMapping("/services")
    public Service createService(@RequestBody Service service) { return serviceRepo.save(service); }

    @PutMapping("/services/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Service serviceDetails) {
        return serviceRepo.findById(id).map(existingService -> {
            existingService.setServiceName(serviceDetails.getServiceName());
            existingService.setServiceDescription(serviceDetails.getServiceDescription());
            existingService.setActive(serviceDetails.getActive());
            existingService.setSortOrder(serviceDetails.getSortOrder());
            return ResponseEntity.ok(serviceRepo.save(existingService));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/services/{id}")
    public ResponseEntity<?> deleteService(@PathVariable Long id) {
        serviceRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // Projects CRUD
    @GetMapping("/projects")
    public List<Project> getAllProjects() { return projectRepo.findAll(); }

    @PostMapping("/projects")
    public Project createProject(@RequestBody Project project) { return projectRepo.save(project); }

    @PutMapping("/projects/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project projectDetails) {
        return projectRepo.findById(id).map(existingProject -> {
            existingProject.setProjectName(projectDetails.getProjectName());
            existingProject.setProjectDescription(projectDetails.getProjectDescription());
            existingProject.setImageUrl(projectDetails.getImageUrl());
            existingProject.setSortOrder(projectDetails.getSortOrder());
            existingProject.setCategory(projectDetails.getCategory());
            existingProject.setGithubUrl(projectDetails.getGithubUrl());
            existingProject.setWebsiteUrl(projectDetails.getWebsiteUrl());
            existingProject.setTechStack(projectDetails.getTechStack());
            existingProject.setActive(projectDetails.getActive());
            return ResponseEntity.ok(projectRepo.save(existingProject));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable Long id) {
        projectRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // Case Studies CRUD
    @GetMapping("/case-studies")
    public List<CaseStudy> getAllCaseStudies() { return caseStudyRepo.findAll(); }

    @PostMapping("/case-studies")
    public CaseStudy createCaseStudy(@RequestBody CaseStudy cs) { return caseStudyRepo.save(cs); }

    @PutMapping("/case-studies/{id}")
    public ResponseEntity<CaseStudy> updateCaseStudy(@PathVariable Long id, @RequestBody CaseStudy csDetails) {
        return caseStudyRepo.findById(id).map(existingCaseStudy -> {
            existingCaseStudy.setTitle(csDetails.getTitle());
            existingCaseStudy.setProblem(csDetails.getProblem());
            existingCaseStudy.setSolution(csDetails.getSolution());
            existingCaseStudy.setResult(csDetails.getResult());
            existingCaseStudy.setCoverImage(csDetails.getCoverImage());
            existingCaseStudy.setActive(csDetails.getActive());
            return ResponseEntity.ok(caseStudyRepo.save(existingCaseStudy));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/case-studies/{id}")
    public ResponseEntity<?> deleteCaseStudy(@PathVariable Long id) {
        caseStudyRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // Testimonials CRUD
    @GetMapping("/testimonials")
    public List<Testimonial> getAllTestimonials() { return testimonialRepo.findAll(); }

    @PostMapping("/testimonials")
    public Testimonial createTestimonial(@RequestBody Testimonial t) { return testimonialRepo.save(t); }

    @PutMapping("/testimonials/{id}")
    public ResponseEntity<Testimonial> updateTestimonial(@PathVariable Long id, @RequestBody Testimonial testimonialDetails) {
        return testimonialRepo.findById(id).map(existingTestimonial -> {
            existingTestimonial.setClientName(testimonialDetails.getClientName());
            existingTestimonial.setClientRole(testimonialDetails.getClientRole());
            existingTestimonial.setTestimonialText(testimonialDetails.getTestimonialText());
            existingTestimonial.setRating(testimonialDetails.getRating());
            existingTestimonial.setSortOrder(testimonialDetails.getSortOrder());
            existingTestimonial.setActive(testimonialDetails.getActive());
            return ResponseEntity.ok(testimonialRepo.save(existingTestimonial));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/testimonials/{id}")
    public ResponseEntity<?> deleteTestimonial(@PathVariable Long id) {
        testimonialRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // FAQs CRUD
    @GetMapping("/faqs")
    public List<Faq> getAllFaqs() { return faqRepo.findAll(); }

    @PostMapping("/faqs")
    public Faq createFaq(@RequestBody Faq faq) { return faqRepo.save(faq); }

    @PutMapping("/faqs/{id}")
    public ResponseEntity<Faq> updateFaq(@PathVariable Long id, @RequestBody Faq faqDetails) {
        return faqRepo.findById(id).map(existingFaq -> {
            existingFaq.setQuestion(faqDetails.getQuestion());
            existingFaq.setAnswer(faqDetails.getAnswer());
            existingFaq.setSortOrder(faqDetails.getSortOrder());
            existingFaq.setActive(faqDetails.getActive());
            return ResponseEntity.ok(faqRepo.save(existingFaq));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/faqs/{id}")
    public ResponseEntity<?> deleteFaq(@PathVariable Long id) {
        faqRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // Team CRUD
    @GetMapping("/team")
    public List<TeamMember> getAllTeam() { return teamRepo.findAll(); }

    @PostMapping("/team")
    public TeamMember createTeamMember(@RequestBody TeamMember tm) { return teamRepo.save(tm); }

    @PutMapping("/team/{id}")
    public ResponseEntity<TeamMember> updateTeamMember(@PathVariable Long id, @RequestBody TeamMember tmDetails) {
        return teamRepo.findById(id).map(existingTeamMember -> {
            existingTeamMember.setName(tmDetails.getName());
            existingTeamMember.setRole(tmDetails.getRole());
            existingTeamMember.setBio(tmDetails.getBio());
            existingTeamMember.setImageUrl(tmDetails.getImageUrl());
            existingTeamMember.setSortOrder(tmDetails.getSortOrder());
            existingTeamMember.setActive(tmDetails.getActive());
            return ResponseEntity.ok(teamRepo.save(existingTeamMember));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/team/{id}")
    public ResponseEntity<?> deleteTeamMember(@PathVariable Long id) {
        teamRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // Tech Stack CRUD
    @GetMapping("/tech-stack")
    public List<TechStack> getAllTechStack() { return techStackRepo.findAll(); }

    @PostMapping("/tech-stack")
    public TechStack createTechStack(@RequestBody TechStack ts) { return techStackRepo.save(ts); }

    @PutMapping("/tech-stack/{id}")
    public ResponseEntity<TechStack> updateTechStack(@PathVariable Long id, @RequestBody TechStack tsDetails) {
        return techStackRepo.findById(id).map(existingTechStack -> {
            existingTechStack.setTechName(tsDetails.getTechName());
            existingTechStack.setTechType(tsDetails.getTechType());
            existingTechStack.setIconUrl(tsDetails.getIconUrl());
            existingTechStack.setSortOrder(tsDetails.getSortOrder());
            existingTechStack.setActive(tsDetails.getActive());
            return ResponseEntity.ok(techStackRepo.save(existingTechStack));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/tech-stack/{id}")
    public ResponseEntity<?> deleteTechStack(@PathVariable Long id) {
        techStackRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // Hire Talents CRUD
    @GetMapping("/hire-talents")
    public List<HireTalent> getAllHireTalents() { return hireTalentRepo.findAll(); }

    @PostMapping("/hire-talents")
    public HireTalent createHireTalent(@RequestBody HireTalent ht) { return hireTalentRepo.save(ht); }

    @PutMapping("/hire-talents/{id}")
    public ResponseEntity<HireTalent> updateHireTalent(@PathVariable Long id, @RequestBody HireTalent htDetails) {
        return hireTalentRepo.findById(id).map(existingHireTalent -> {
            existingHireTalent.setTitle(htDetails.getTitle());
            existingHireTalent.setDescription(htDetails.getDescription());
            existingHireTalent.setIcon(htDetails.getIcon());
            existingHireTalent.setChips(htDetails.getChips());
            existingHireTalent.setRate(htDetails.getRate());
            existingHireTalent.setSortOrder(htDetails.getSortOrder());
            existingHireTalent.setActive(htDetails.getActive());
            return ResponseEntity.ok(hireTalentRepo.save(existingHireTalent));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/hire-talents/{id}")
    public ResponseEntity<?> deleteHireTalent(@PathVariable Long id) {
        hireTalentRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // Contact Messages
    @GetMapping("/messages")
    public List<ContactMessage> getAllMessages() { return contactRepo.findAllByOrderByCreatedAtDesc(); }

    @GetMapping("/messages/unread")
    public List<ContactMessage> getUnreadMessages() { return contactRepo.findByReadFalseOrderByCreatedAtDesc(); }

    @PutMapping("/messages/{id}/read")
    public ResponseEntity<?> markRead(@PathVariable Long id) {
        return contactRepo.findById(id).map(msg -> {
            msg.setRead(true);
            contactRepo.save(msg);
            return ResponseEntity.ok(Map.of("success", true));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/messages/{id}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long id) {
        contactRepo.deleteById(id);
        return ResponseEntity.ok(Map.of("deleted", true));
    }

    // Site Settings
    @GetMapping("/settings")
    public List<SiteSetting> getAllSettings() { return settingRepo.findAll(); }

    @PutMapping("/settings/{key}")
    public ResponseEntity<?> updateSetting(@PathVariable String key, @RequestBody Map<String, String> body) {
        SiteSetting setting = settingRepo.findBySettingKey(key)
                .orElse(SiteSetting.builder().settingKey(key).build());
        setting.setSettingValue(body.get("value"));
        settingRepo.save(setting);
        return ResponseEntity.ok(setting);
    }
}
