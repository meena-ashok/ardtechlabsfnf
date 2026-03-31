package com.ardtechlabs.backend.repository;

import com.ardtechlabs.backend.entity.HireTalent;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HireTalentRepository extends JpaRepository<HireTalent, Long> {
    List<HireTalent> findByActiveTrueOrderBySortOrderAsc();
}
