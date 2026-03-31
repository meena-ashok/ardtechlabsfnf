package com.ardtechlabs.backend.repository;

import com.ardtechlabs.backend.entity.CaseStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CaseStudyRepository extends JpaRepository<CaseStudy, Long> {
    List<CaseStudy> findByActiveTrueOrderBySortOrderAsc();
}
