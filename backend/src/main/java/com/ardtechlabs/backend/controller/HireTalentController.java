package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.HireTalent;
import com.ardtechlabs.backend.service.HireTalentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/hire-talents")
public class HireTalentController extends BaseController<HireTalent, HireTalentService> {
    public HireTalentController(HireTalentService service) {
        super(service);
    }
}
