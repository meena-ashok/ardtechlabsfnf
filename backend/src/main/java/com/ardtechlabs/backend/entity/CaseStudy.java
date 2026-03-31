package com.ardtechlabs.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "case_studies")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class CaseStudy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String sector;

    private String gradient;

    private String emoji;

    @Column(columnDefinition = "TEXT")
    private String metrics;

    private Integer sortOrder;

    private Boolean active;
}
