package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.Project;
import com.ardtechlabs.backend.service.ProjectService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/projects")
public class ProjectController extends BaseController<Project, ProjectService> {
    public ProjectController(ProjectService service) {
        super(service);
    }
}
