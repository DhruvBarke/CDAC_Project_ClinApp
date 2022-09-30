package com.company.ClinApp.controller;

import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.DoctorRegistration;
import com.company.ClinApp.entity.Login;
import com.company.ClinApp.service.DoctorService;
import com.company.ClinApp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DoctorController {

    @Autowired
    DoctorService dservice;


    @Autowired
    LoginService lservice;

    @GetMapping("/alldoctors")
    public List<Doctor> allDoctors() {
        return dservice.allDoctors();
    }


    @GetMapping("/speciality")
    public List<Object> allDoctorsSpeciality() {
        System.out.println(dservice.allDoctorsSpeciality());
        return dservice.allDoctorsSpeciality();

    }

    @GetMapping("/getonedoctor/{id}")
    public Optional<Doctor> getOneDoctor(@PathVariable int id) {
        return dservice.getOneDoctor(id);
    }

    @PostMapping("/savedoctor")
    public Doctor saveDoctor(@RequestBody DoctorRegistration dr) {
        System.out.println("*******" + dr);
        Login l = new Login(dr.getUserName(), dr.getPassword(), "Doctor", "active");
        Login inserted = lservice.saveUser(l);
        //System.out.println(dr.getSpeciality());
        if ((inserted != null)) {
            Doctor d = new Doctor(dr.getFirstName(),
                    dr.getLastName(), dr.getMobileNumber(),
                    dr.getGender(), dr.getDob(), dr.getGraduation(),
                    dr.getPostGraduation(), dr.getSpeciality(),
                    dr.getFees(), dr.getAddress(), inserted);
            return dservice.saveDoctor(d);
        } else {
            return null;
        }
    }

    @PostMapping("/updatedoctor")
    public Doctor updateDoctor(@RequestBody Doctor dr) {
        try {
            return dservice.updateDoctor(dr);
        } catch (Exception e) {
            return null;
        }
    }
}
