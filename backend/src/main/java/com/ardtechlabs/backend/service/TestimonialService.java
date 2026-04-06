package com.ardtechlabs.backend.service;

import com.ardtechlabs.backend.entity.Testimonial;
import com.ardtechlabs.backend.repository.TestimonialRepository;
import org.springframework.stereotype.Component;

@Component
public class TestimonialService extends BaseService<Testimonial, TestimonialRepository> {
    public TestimonialService(TestimonialRepository repository) {
        super(repository);
    }
}
