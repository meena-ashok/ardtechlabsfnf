package com.ardtechlabs.backend.repository;

import com.ardtechlabs.backend.entity.TechStack;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TechStackRepository extends JpaRepository<TechStack, Long> {
    List<TechStack> findByActiveTrueOrderBySortOrderAsc();
}
