package com.ardtechlabs.backend.repository;

import com.ardtechlabs.backend.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByActiveTrueOrderBySortOrderAsc();
    List<Project> findByActiveTrueAndCategoryOrderBySortOrderAsc(String category);
}
