package com.example.spring_security_test.repository;

import com.example.spring_security_test.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OurUserRepository extends JpaRepository<OurUsers, Integer> {
    Optional<OurUsers> findByEmail(String email);
    OurUsers findByRole(String role);
}
