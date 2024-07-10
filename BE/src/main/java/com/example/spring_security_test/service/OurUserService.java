package com.example.spring_security_test.service;

import com.example.spring_security_test.entity.OurUsers;

import java.util.List;

public interface OurUserService {

    List<OurUsers> findAll();

    OurUsers saveOurUsers(OurUsers ourUsers);

    OurUsers editOurUsers(Integer id, OurUsers ourUsers);
}
