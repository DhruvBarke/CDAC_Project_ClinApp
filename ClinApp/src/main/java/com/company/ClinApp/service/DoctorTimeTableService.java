package com.company.ClinApp.service;

import com.company.ClinApp.entity.Doctor;
import com.company.ClinApp.entity.DoctorTimeTable;
import com.company.ClinApp.repository.DoctorTimeTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorTimeTableService {

    @Autowired
    DoctorTimeTableRepository dttrepo;

    public DoctorTimeTable saveTimeTable(@RequestBody DoctorTimeTable dtt) {
        try {
            return dttrepo.save(dtt);
        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }

    public List<DoctorTimeTable> getTimeTableByDoctorId(Doctor d) {

        return dttrepo.getTimeTableByDoctorId(d);
    }

    public Optional<DoctorTimeTable> getTimeTableById(int id) {
        //System.out.println(id);
        return dttrepo.findById(id);
    }

    public List<DoctorTimeTable> allDoctorTimeTable() {
        return dttrepo.findAll();
    }

    public DoctorTimeTable getAppointmentsByIdandDay(Doctor d, String day) {
        return dttrepo.getAppointmentsByIdandDay(d, day);
    }
}
