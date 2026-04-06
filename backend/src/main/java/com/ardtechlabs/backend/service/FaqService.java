package com.ardtechlabs.backend.service;

import com.ardtechlabs.backend.entity.Faq;
import com.ardtechlabs.backend.repository.FaqRepository;
import org.springframework.stereotype.Component;

@Component
public class FaqService extends BaseService<Faq, FaqRepository> {
    public FaqService(FaqRepository repository) {
        super(repository);
    }
}
