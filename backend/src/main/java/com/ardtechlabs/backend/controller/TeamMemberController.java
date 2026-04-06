package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.TeamMember;
import com.ardtechlabs.backend.service.TeamMemberService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/team-members")
public class TeamMemberController extends BaseController<TeamMember, TeamMemberService> {
    public TeamMemberController(TeamMemberService service) {
        super(service);
    }
}
