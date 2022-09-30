package com.company.ClinApp.service;

import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.Login;
import com.company.ClinApp.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

	@Autowired
	DoctorRepository drepo;

	//fetch patient by login details
	public Doctor getOneByLoginId(Login id) {
		return drepo.getOneByLoginId(id);
	}
	public Doctor saveDoctor(Doctor d) {	
		return drepo.save(d);
	}
	
	public Doctor updateDoctor(Doctor d) {
		// TODO Auto-generated method stub
		try {
			return drepo.save(d);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
	//fetch Doctor by it's id
	public Optional<Doctor> getOneDoctor(int id) {
		// TODO Auto-generated method stub
		return drepo.findById(id);
	}
	public List<Doctor> allDoctors() {
		return drepo.findAll();
		
	}

	public Doctor getOneById(int id) {
		//return drepo.getOneById(id);
		return drepo.findById(id).get();
	}
	public List<Object> allDoctorsSpeciality() {
		return drepo.allDoctorsSpeciality();
	}
}
