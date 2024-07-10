package com.example.spring_security_test.controller.admin;

import com.example.spring_security_test.entity.OurUsers;
import com.example.spring_security_test.service.OurUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/our-user")
public class OurUserControllerAdmin {

    @Autowired
    OurUserService service;

    @GetMapping
    public List<OurUsers> getAllOurUser(){
        return service.findAll();
    }

    @PostMapping("/save-our-user")
    public ResponseEntity<OurUsers> saveOurUser(@RequestBody OurUsers ourUsers){
        return ResponseEntity.ok(service.saveOurUsers(ourUsers));
    }

    @PutMapping("/edit-our-user/{id}")
    public ResponseEntity<OurUsers> eidtOurUser(@RequestBody OurUsers ourUsers, @PathVariable Integer id){
        try {
            return ResponseEntity.ok(service.editOurUsers(id, ourUsers));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
