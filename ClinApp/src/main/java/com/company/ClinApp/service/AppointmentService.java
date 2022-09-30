package com.company.ClinApp.service;

import com.company.ClinApp.entity.Appointment;
import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.Patient;
import com.company.ClinApp.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    AppointmentRepository arepo;


    @Autowired
    DoctorService dservice;

    public List<Appointment> getAllAppointment() {
        return arepo.findAll();
    }

    public List<Object> getAppointmentByDidandDate(Doctor d, Date date) {

        return arepo.getAppointmentByDidandDate(d, date);
    }

    public Appointment saveAppointment(Appointment a) {

        return arepo.save(a);
    }

    public Appointment cancelAppointment(Appointment a) {
        return arepo.save(a);
    }

    public List<Appointment> getAppointmentByDid(Doctor d, java.util.Date date1) {
        return arepo.getAppointmentByDid(d, date1);
    }

    public List<Appointment> getAppointmentHistoryByDid(Doctor d, java.util.Date date1) {
        return arepo.getAppointmentHistoryByDid(d, date1);
    }

    public List<Appointment> getAppointmentByPatient(Patient p, java.util.Date date1) {
        return arepo.getAppointmentByPatient(p, date1);
    }

    public List<Appointment> getAppointmentHistoryByPid(Patient p, java.util.Date date1) {
        // TODO Auto-generated method stub
        return arepo.getAppointmentHistoryByPid(p, date1);
    }

}
