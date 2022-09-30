package com.company.ClinApp.controller;

import com.company.ClinApp.entity.Login;
import com.company.ClinApp.entity.Patient;
import com.company.ClinApp.entity.PatientRegisteration;
import com.company.ClinApp.service.LoginService;
import com.company.ClinApp.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PatientController {

	@Autowired
	PatientService pservice;
	
	@Autowired
	LoginService lservice;
	
	@GetMapping("/allpatients")
	public List<Patient> getAllPatients(){
		return pservice.getAllUsers();
	}
	
	@GetMapping("/getonepatient/{id}")
	public Optional<Patient> getOnePatient(@PathVariable int id) {
		return pservice.getOnePatient(id);
	}
	
	//add new patient
	@PostMapping("/savepatient")
	public Patient savePatient(@RequestBody PatientRegisteration pr) {
			Login l = new Login(pr.getUser_name(),pr.getPassword(),"Patient","active");
			Login inserted = lservice.saveUser(l);
			if(inserted == null) {
				return null;
			}
			else {
				Patient p = new Patient(pr.getFirst_name(),pr.getLast_name(),
						pr.getMobile_number(),pr.getGender(),
						pr.getBlood_group(),pr.getDob(),pr.getAddress(),inserted);
				return pservice.savePatient(p);
			}
	}
	
	@PostMapping("/updatepatient")
	public Patient updatePatient(@RequestBody Patient p) {
		return pservice.updatePatient(p);
	}
}
