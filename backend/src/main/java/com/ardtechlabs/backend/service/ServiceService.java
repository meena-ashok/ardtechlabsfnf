package com.ardtechlabs.backend.service;

import com.ardtechlabs.backend.entity.Service;
import com.ardtechlabs.backend.repository.ServiceRepository;
import org.springframework.stereotype.Component;

@Component
public class ServiceService extends BaseService<Service, ServiceRepository> {
    public ServiceService(ServiceRepository repository) {
        super(repository);
    }
}
