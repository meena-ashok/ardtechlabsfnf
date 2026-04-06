package com.ardtechlabs.backend.service;

import com.ardtechlabs.backend.entity.Project;
import com.ardtechlabs.backend.repository.ProjectRepository;
import org.springframework.stereotype.Component;

@Component
public class ProjectService extends BaseService<Project, ProjectRepository> {
    public ProjectService(ProjectRepository repository) {
        super(repository);
    }
}
