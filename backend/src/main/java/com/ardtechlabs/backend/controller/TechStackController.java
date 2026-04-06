package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.TechStack;
import com.ardtechlabs.backend.service.TechStackService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/tech-stacks")
public class TechStackController extends BaseController<TechStack, TechStackService> {
    public TechStackController(TechStackService service) {
        super(service);
    }
}
