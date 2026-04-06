package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.Faq;
import com.ardtechlabs.backend.service.FaqService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/faqs")
public class FaqController extends BaseController<Faq, FaqService> {
    public FaqController(FaqService service) {
        super(service);
    }
}
