package com.example.spring_security_test.service;

import com.example.spring_security_test.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAll();

    Product saveProduct(Product product);

    Product editProduct(Integer id, Product product);
}
