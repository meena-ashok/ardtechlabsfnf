package com.ardtechlabs.backend.controller;

import com.ardtechlabs.backend.entity.BaseEntity;
import com.ardtechlabs.backend.service.BaseService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class BaseController<T extends BaseEntity, S extends BaseService<T, ? extends JpaRepository<T, Long>>> {

    protected final S service;

    public BaseController(S service) {
        this.service = service;
    }

    @GetMapping
    public List<T> getAll() {
        return service.findAll();
    }

    @PostMapping
    public T create(@RequestBody T entity) {
        return service.save(entity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<T> update(@PathVariable Long id, @RequestBody T entity) {
        return service.findById(id).map(existingEntity -> {
            // Here you might want to add some logic to map properties from entity to existingEntity
            return ResponseEntity.ok(service.save(entity));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
