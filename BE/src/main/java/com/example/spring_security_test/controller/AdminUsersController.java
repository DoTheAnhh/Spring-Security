package com.example.spring_security_test.controller;

import com.example.spring_security_test.dto.ReqRes;
import com.example.spring_security_test.entity.Product;
import com.example.spring_security_test.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminUsersController {

    @Autowired
    private ProductRepository productRepository;


}
