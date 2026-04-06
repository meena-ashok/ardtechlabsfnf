package com.ardtechlabs.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "projects")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Project extends BaseEntity {

    @Column(nullable = false)
    private String projectName;

    @Column(columnDefinition = "TEXT")
    private String projectDescription;

    private String imageUrl;

    private String category;

    private String githubUrl;

    private String websiteUrl;

    private String techStack;

    private Integer sortOrder;

    private Boolean active;
}
