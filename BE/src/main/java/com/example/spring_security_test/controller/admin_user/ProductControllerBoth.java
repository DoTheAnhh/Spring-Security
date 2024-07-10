package com.example.spring_security_test.controller.admin_user;

import com.example.spring_security_test.entity.Product;
import com.example.spring_security_test.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductControllerBoth {

    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<Object> getAllProduct(){
        return ResponseEntity.ok(productService.findAll());
    }
}
