package com.example.spring_security_test.repository;

import com.example.spring_security_test.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
