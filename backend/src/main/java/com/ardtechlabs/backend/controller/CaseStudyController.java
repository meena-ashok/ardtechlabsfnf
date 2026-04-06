package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.CaseStudy;
import com.ardtechlabs.backend.service.CaseStudyService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/case-studies")
public class CaseStudyController extends BaseController<CaseStudy, CaseStudyService> {
    public CaseStudyController(CaseStudyService service) {
        super(service);
    }
}
