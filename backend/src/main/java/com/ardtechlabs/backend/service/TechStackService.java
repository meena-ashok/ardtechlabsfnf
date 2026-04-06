package com.ardtechlabs.backend.service;

import com.ardtechlabs.backend.entity.TechStack;
import com.ardtechlabs.backend.repository.TechStackRepository;
import org.springframework.stereotype.Component;

@Component
public class TechStackService extends BaseService<TechStack, TechStackRepository> {
    public TechStackService(TechStackRepository repository) {
        super(repository);
    }
}
