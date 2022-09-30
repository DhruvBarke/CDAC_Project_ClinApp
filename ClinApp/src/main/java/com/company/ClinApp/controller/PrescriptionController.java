package com.company.ClinApp.controller;


import com.company.ClinApp.entity.Prescription;
import com.company.ClinApp.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/prescriptions")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @GetMapping
    public List<Prescription> getAllPrescriptions(){
        return prescriptionService.getAllPrescriptions();
    }

    @GetMapping("/{prescriptionId}")
    public Prescription getPrescription(@PathVariable int prescriptionId){
        Optional<Prescription> optional = prescriptionService.getPrescription(prescriptionId);
        if (optional.isPresent())
            return optional.get();
        else return null;
    }

    @PostMapping
    public Prescription save(@RequestBody Prescription prescription){
        return prescriptionService.save(prescription);
    }

    @DeleteMapping("/{prescriptionId}")
    public String delete(@PathVariable int prescriptionId){
        return prescriptionService.delete(prescriptionId);
    }

    @PutMapping
    public Prescription update(@RequestBody Prescription prescription){
        return prescriptionService.update(prescription);
    }

    @GetMapping("/onlyOnePrescription/{prescriptionId}")
    public Prescription getOnlyOnePrescription(@PathVariable int prescriptionId){
        return prescriptionService.getOnlyOnePrescription(prescriptionId);
    }

}