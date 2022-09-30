package com.company.ClinApp.repository;

import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
	//fetch record with matching login id
	@Query("select d from Doctor d where login_id = :id")
	public Doctor getOneByLoginId(@Param("id") Login id);

	@Query("select DISTINCT(d.speciality) from Doctor d")
	public List<Object> allDoctorsSpeciality();
}
