package com.company.ClinApp.service;


import com.company.ClinApp.entity.Login;
import com.company.ClinApp.entity.Patient;
import com.company.ClinApp.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

	@Autowired
	PatientRepository prepo;

	
	//fetch patient by login details
	public Patient getOneByLoginId(Login id) {
		System.out.println(id);
		return prepo.getOneByLoginId(id);
	}

	public List<Patient> getAllUsers() {
		return prepo.findAll();
	}
	
	//fetch patient by it's id
	public Optional<Patient> getOnePatient(int id) {
		return prepo.findById(id);
	}

	//add new patient
	public Patient savePatient(Patient p) {
			return prepo.save(p);
	}
	
	public Patient updatePatient(Patient p) {
		// TODO Auto-generated method stub
		try {
			return prepo.save(p);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
	
	public Patient getOneById(int id) {
		return prepo.findById(id).get();
	}
}
