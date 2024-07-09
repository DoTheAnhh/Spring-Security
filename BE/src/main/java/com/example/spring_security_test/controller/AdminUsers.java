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
public class AdminUsers {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/public/product")
    public ResponseEntity<Object> getAllProduct(){
        return ResponseEntity.ok(productRepository.findAll());
    }

    @PostMapping("/admin/saveProduct")
    public ResponseEntity<Object> saveProduct (@RequestBody ReqRes signUpRequest){
        Product productToSave = new Product();
        productToSave.setName(signUpRequest.getName());
        return ResponseEntity.ok(productRepository.save(productToSave));
    }

    @GetMapping("/user/alone")
    public ResponseEntity<Object> userAlone(){
        return ResponseEntity.ok("User alone can access this API only");
    }

    @GetMapping("/adminuser/both")
    public ResponseEntity<Object> bothAdminAndUserAPI(){
        return ResponseEntity.ok("Both Admin and User alone can access this API only");
    }
}
