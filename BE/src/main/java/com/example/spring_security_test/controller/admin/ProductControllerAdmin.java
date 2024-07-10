package com.example.spring_security_test.controller.admin;

import com.example.spring_security_test.entity.Product;
import com.example.spring_security_test.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductControllerAdmin {

    @Autowired
    ProductService productService;

    @PostMapping("/save-product")
    public ResponseEntity<Product> saveProduct (@RequestBody Product product){
        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @PutMapping("/edit-product/{id}")
    public ResponseEntity<Product> editProduct (@RequestBody Product product, @PathVariable Integer id){
        try {
            return ResponseEntity.ok(productService.editProduct(id, product));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
