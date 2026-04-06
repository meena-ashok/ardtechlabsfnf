package com.ardtechlabs.backend.service;

import com.ardtechlabs.backend.entity.CaseStudy;
import com.ardtechlabs.backend.repository.CaseStudyRepository;
import org.springframework.stereotype.Component;

@Component
public class CaseStudyService extends BaseService<CaseStudy, CaseStudyRepository> {
    public CaseStudyService(CaseStudyRepository repository) {
        super(repository);
    }
}
