package com.ardtechlabs.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "hire_talents")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class HireTalent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String icon;

    @Column(columnDefinition = "TEXT")
    private String chips;

    private String rate;

    private Integer sortOrder;

    private Boolean active;
}
