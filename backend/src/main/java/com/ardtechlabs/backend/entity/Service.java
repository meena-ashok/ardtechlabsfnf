package com.ardtechlabs.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "services")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Service extends BaseEntity {

    @Column(nullable = false)
    private String serviceName;

    @Column(columnDefinition = "TEXT")
    private String serviceDescription;

    private String icon;

    private String variant;

    @Column(columnDefinition = "TEXT")
    private String chips;

    private Integer sortOrder;

    private Boolean active;
}
