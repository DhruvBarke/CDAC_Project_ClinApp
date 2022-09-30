package com.company.ClinApp.entity;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="prescription")
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String prescriptionDate;
    private String diagnosis;
    private int weight;
    private String bp;
    private int patientId;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "prescriptionId")
    private List<Product> products;

    public Prescription(int id, String prescriptionDate, String diagnosis, int weight, String bp, int patientId, List<Product> products) {
        this.id = id;
        this.prescriptionDate = prescriptionDate;
        this.diagnosis = diagnosis;
        this.weight = weight;
        this.bp = bp;
        this.patientId = patientId;
        this.products = products;
    }

    public Prescription() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPrescriptionDate() {
        return prescriptionDate;
    }

    public void setPrescriptionDate(String prescriptionDate) {
        this.prescriptionDate = prescriptionDate;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getBp() {
        return bp;
    }

    public void setBp(String bp) {
        this.bp = bp;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "Prescription{" +
                "id=" + id +
                ", prescriptionDate='" + prescriptionDate + '\'' +
                ", diagnosis='" + diagnosis + '\'' +
                ", weight=" + weight +
                ", bp='" + bp + '\'' +
                ", patientId=" + patientId +
                ", products=" + products +
                '}';
    }
}
