package com.ardtechlabs.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "testimonials")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Testimonial extends BaseEntity {

    @Column(nullable = false)
    private String clientName;

    private String clientRole;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String testimonialText;

    private Integer rating;

    private Integer sortOrder;

    private Boolean active;
}
