package com.example.spring_security_test.service.impl;

import com.example.spring_security_test.entity.Product;
import com.example.spring_security_test.repository.ProductRepository;
import com.example.spring_security_test.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductImpl implements ProductService {

    @Autowired
    ProductRepository repository;

    @Override
    public List<Product> findAll() {
        return repository.findAll();
    }

    @Override
    public Product saveProduct(Product product) {
        Product productToSave = new Product();
        productToSave.setName(product.getName());
        return repository.save(productToSave);
    }

    @Override
    public Product editProduct(Integer id, Product product) {
        Optional<Product> existingProductOptional  = repository.findById(id);
        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();
            existingProduct.setName(product.getName());
            return repository.save(existingProduct);
        }else {
            throw new RuntimeException("Product not found with id: " + id);
        }
    }
}
