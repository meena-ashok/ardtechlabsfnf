package com.ardtechlabs.backend.service;

import com.ardtechlabs.backend.entity.TeamMember;
import com.ardtechlabs.backend.repository.TeamMemberRepository;
import org.springframework.stereotype.Component;

@Component
public class TeamMemberService extends BaseService<TeamMember, TeamMemberRepository> {
    public TeamMemberService(TeamMemberRepository repository) {
        super(repository);
    }
}
