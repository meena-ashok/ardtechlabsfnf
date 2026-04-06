package com.ardtechlabs.backend.service;

import com.ardtechlabs.backend.entity.HireTalent;
import com.ardtechlabs.backend.repository.HireTalentRepository;
import org.springframework.stereotype.Component;

@Component
public class HireTalentService extends BaseService<HireTalent, HireTalentRepository> {
    public HireTalentService(HireTalentRepository repository) {
        super(repository);
    }
}
