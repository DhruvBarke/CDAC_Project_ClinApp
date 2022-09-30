package com.company.ClinApp.repository;

import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.Login;
import com.company.ClinApp.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	//fetch record with matching login id
	@Query("select p from Patient p where login_id = :id")
	public Patient getOneByLoginId(@Param("id") Login id);
	
	@Query("select p from Patient p where patient_id = :id")
	public Doctor getOneById(@Param("id") int id);
}
