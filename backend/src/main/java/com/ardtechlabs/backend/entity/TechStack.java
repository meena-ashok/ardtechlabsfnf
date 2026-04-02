package com.ardtechlabs.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tech_stacks")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class TechStack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String label;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String items;

    private Integer sortOrder;

    private Boolean active;
}
