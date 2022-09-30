package com.company.ClinApp.repository;

import com.company.ClinApp.entity.Appointment;
import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{

	@Query("select a.appointmentTime from Appointment a where doctor_id= :d and appointmentDate= :date")
	List<Object> getAppointmentByDidandDate(@Param("d") Doctor d,@Param("date") Date date);

	@Query("select a from Appointment a where doctor_id= :d and status = 'scheduled' and appointmentDate >= :date1")
	List<Appointment> getAppointmentByDid(@Param("d") Doctor d,@Param("date1")java.util.Date date1);
	
	@Query("select a from Appointment a where doctor_id= :d and appointmentDate < :date1")
	List<Appointment> getAppointmentHistoryByDid(@Param("d") Doctor d,@Param("date1") java.util.Date date1);

	@Query("select a from Appointment a where patient_id= :p and status = 'scheduled' and appointmentDate >= :date1")
	List<Appointment> getAppointmentByPatient(@Param("p")Patient p,@Param("date1") java.util.Date date1);

	@Query("select a from Appointment a where patient_id= :p and appointmentDate < :date1")
	List<Appointment> getAppointmentHistoryByPid(@Param("p") Patient p,@Param("date1") java.util.Date date1);
	
	
	

}
