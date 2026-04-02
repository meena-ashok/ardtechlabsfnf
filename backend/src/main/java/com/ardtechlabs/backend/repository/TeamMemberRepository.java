package com.ardtechlabs.backend.repository;

import com.ardtechlabs.backend.entity.TeamMember;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TeamMemberRepository extends JpaRepository<TeamMember, Long> {
    List<TeamMember> findByActiveTrueOrderBySortOrderAsc();
}
