package com.company.ClinApp.service;

import com.company.ClinApp.entity.Prescription;
import com.company.ClinApp.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {
    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    public Optional<Prescription> getPrescription(int id) {
        return prescriptionRepository.findById(id);
    }


    public Prescription getOnlyOnePrescription(int id){
        if (getPrescription(id).isPresent()){
            Prescription prescription = getPrescription(id).get();
            Prescription oo = new Prescription();
            oo.setId(prescription.getId());
            oo.setPrescriptionDate(prescription.getPrescriptionDate());
            oo.setDiagnosis(prescription.getDiagnosis());
            oo.setWeight(prescription.getWeight());
            oo.setBp(prescription.getBp());
            oo.setPatientId(prescription.getPatientId());
            return oo;
        }
        return null;
    }

    public Prescription save(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    public String delete(int id) {
        if (getPrescription(id).isPresent()) {
            prescriptionRepository.deleteById(id);
            return "Prescription with id " + id + " is deleted!";
        } else
            return "Prescription with id " + id + " not found";
    }

    public Prescription update(Prescription prescription) {
       try {
           return prescriptionRepository.save(prescription);
       }catch (Exception e){
           return null;
       }
    }
}
