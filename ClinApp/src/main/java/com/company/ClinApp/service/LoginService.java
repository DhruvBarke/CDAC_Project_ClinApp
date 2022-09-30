package com.company.ClinApp.service;

//import java.util.Date;

import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.Login;
import com.company.ClinApp.entity.Patient;
import com.company.ClinApp.repository.DoctorRepository;
import com.company.ClinApp.repository.LoginRepository;
import com.company.ClinApp.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    LoginRepository loginrepo;
    @Autowired
    PatientRepository prepo;
    @Autowired
    DoctorRepository drepo;


    public List<Login> getAllUsers() {
        return loginrepo.findAll();
    }

    //fine user by id
    public Optional<Login> getUser(int id) {
        return loginrepo.findById(id);
    }

    //add new user
    public Login saveUser(Login l) {
        try {
            return loginrepo.save(l);
        } catch (Exception e) {
            return null;
        }
    }

    //logincheck
    public Object loginCheck(String user_name, String password) {
        Login l = loginrepo.logincheck(user_name, password);

        //if returns a record
        if (l != null && l.getStatus().equals("active")) {
            Patient p = null;
            Doctor d = null;
            /*Admin a = null;*/
            //if record is Patient
            if (l.getUser_type().equals("Patient")) {
                try {
                    p = prepo.getOneByLoginId(l);

                } catch (Exception e) {
                    p = null;
                }
                return p;
            }//if record is Doctor
            else if (l.getUser_type().equals("Doctor")) {
                try {
                    d = drepo.getOneByLoginId(l);

                } catch (Exception e) {
                    System.out.println(e.getMessage());
                    d = null;
                }
                return d;
            }//if record is Admin
            else if (l.getUser_type().equals("Admin")) {
                return l;
            } else {
                return null;
            }

        }
        return null;

    }

    public Login updateUser(Login l) {
        try {
            return loginrepo.save(l);
        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }

    public Login forgotPassword(String username) {
        // TODO Auto-generated method stub
        return loginrepo.forgotPassword(username);
    }
}
