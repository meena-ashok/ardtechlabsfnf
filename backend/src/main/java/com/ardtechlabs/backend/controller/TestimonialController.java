package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.Testimonial;
import com.ardtechlabs.backend.service.TestimonialService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/testimonials")
public class TestimonialController extends BaseController<Testimonial, TestimonialService> {
    public TestimonialController(TestimonialService service) {
        super(service);
    }
}
