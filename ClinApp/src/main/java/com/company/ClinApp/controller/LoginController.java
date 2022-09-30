package com.company.ClinApp.controller;

//import java.util.Date;

import com.company.ClinApp.entity.Login;
import com.company.ClinApp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

    @Autowired
    LoginService loginservice;


    @GetMapping("/allusers")
    public List<Login> getAllUser() {
        return loginservice.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public Optional<Login> getUser(@PathVariable int id) {
        return loginservice.getUser(id);
    }

    @PostMapping("/updateuser")
    public Login updateUser(@RequestBody Login l) {
        return loginservice.updateUser(l);
    }

    //login check
    @PostMapping("/logincheck")
    public Object loginCheck(@RequestBody Login l) {
        return loginservice.loginCheck(l.getUser_name(), l.getPassword());
    }

    @PostMapping("/forgotpassword")
    public Login forgotPassword(@RequestBody Login l) {
        return loginservice.forgotPassword(l.getUser_name());
    }
}
