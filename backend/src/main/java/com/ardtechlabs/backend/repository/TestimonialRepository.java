package com.ardtechlabs.backend.repository;

import com.ardtechlabs.backend.entity.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {
    List<Testimonial> findByActiveTrueOrderBySortOrderAsc();
}
