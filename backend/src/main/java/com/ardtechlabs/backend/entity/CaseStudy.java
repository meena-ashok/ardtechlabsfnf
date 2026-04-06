package com.ardtechlabs.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "case_studies")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class CaseStudy extends BaseEntity {

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String problem;

    @Column(columnDefinition = "TEXT")
    private String solution;

    @Column(columnDefinition = "TEXT")
    private String result;

    private String coverImage;

    private Boolean active;
}
