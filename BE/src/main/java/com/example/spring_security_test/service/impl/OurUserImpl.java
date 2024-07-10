package com.example.spring_security_test.service.impl;

import com.example.spring_security_test.entity.OurUsers;
import com.example.spring_security_test.entity.Product;
import com.example.spring_security_test.repository.OurUserRepository;
import com.example.spring_security_test.service.OurUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OurUserImpl implements OurUserService {

    @Autowired
    OurUserRepository repository;

    @Override
    public List<OurUsers> findAll() {
        return repository.findAll();
    }

    @Override
    public OurUsers saveOurUsers(OurUsers ourUsers) {
        OurUsers ourUserToSave = new OurUsers();
        ourUserToSave.setEmail(ourUsers.getEmail());
        ourUserToSave.setPassword(ourUsers.getPassword());
        ourUserToSave.setRole(ourUsers.getRole());
        return repository.save(ourUserToSave);
    }

    @Override
    public OurUsers editOurUsers(Integer id, OurUsers ourUsers) {
        Optional<OurUsers> existingOurUsersOptional  = repository.findById(id);
        if (existingOurUsersOptional.isPresent()) {
            OurUsers existingProduct = existingOurUsersOptional.get();
            existingProduct.setEmail(ourUsers.getEmail());
            existingProduct.setPassword(ourUsers.getPassword());
            existingProduct.setRole(ourUsers.getRole());
            return repository.save(existingProduct);
        }else {
            throw new RuntimeException("Product not found with id: " + id);
        }
    }
}
