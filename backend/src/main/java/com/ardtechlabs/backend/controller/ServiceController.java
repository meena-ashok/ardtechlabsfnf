package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.Service;
import com.ardtechlabs.backend.service.ServiceService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/services")
public class ServiceController extends BaseController<Service, ServiceService> {
    public ServiceController(ServiceService service) {
        super(service);
    }
}
