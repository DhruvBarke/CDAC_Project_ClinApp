package com.company.ClinApp.repository;

import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.DoctorTimeTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorTimeTableRepository extends JpaRepository<DoctorTimeTable, Integer> {

	@Query("select dtt from DoctorTimeTable dtt where doctor_id = :d")
	public List<DoctorTimeTable> getTimeTableByDoctorId(@Param("d") Doctor d);

	@Query("select dtt from DoctorTimeTable dtt where doctor_id = :d and weekday = :day")
	public DoctorTimeTable getAppointmentsByIdandDay(@Param("d") Doctor d,@Param("day") String day);

}
