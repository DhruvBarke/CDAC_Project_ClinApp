package com.company.ClinApp.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int doctorId;
    @Column(name = "first_name")
    String firstName;
    @Column(name = "last_name")
    String lastName;
    @Column(name = "mobile_number")
    String mobileNumber;
    @Column
    String gender;
    @Column
    Date dob;
    @Column
    String graduation;
    @Column(name = "post_graduation", nullable = true)
    String postGraduation;
    @Column
    String speciality;
    @Column
    int fees;

    @Column
    String address;
    @JsonIgnoreProperties("doctor")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "login_id")
    Login login_id;


    public Doctor() {
        super();
        // TODO Auto-generated constructor stub
    }


    public Doctor(String firstName, String lastName, String mobileNumber, String gender, Date dob, String graduation,
                  String postGraduation, String specialty, int fees, String address, Login login_id) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.gender = gender;
        this.dob = dob;
        this.graduation = graduation;
        this.postGraduation = postGraduation;
        this.speciality = specialty;
        this.fees = fees;
        this.login_id = login_id;
        this.address = address;
    }


    public Doctor(int doctorId, String firstName, String lastName, String mobileNumber, String gender, Date dob,
                  String graduation, String postGraduation, String specialty, int fees, String address, Login login_id) {
        super();
        this.doctorId = doctorId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.gender = gender;
        this.dob = dob;
        this.graduation = graduation;
        this.postGraduation = postGraduation;
        this.speciality = specialty;
        this.fees = fees;
        this.login_id = login_id;
        this.address = address;
    }



    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctor_id) {
        this.doctorId = doctor_id;
    }

    public String getSpeciality() {
        return speciality;
    }


    public void setSpeciality(String specialty) {
        this.speciality = specialty;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String first_name) {
        this.firstName = first_name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String last_name) {
        this.lastName = last_name;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobile_number) {
        this.mobileNumber = mobile_number;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getGraduation() {
        return graduation;
    }

    public void setGraduation(String graduation) {
        this.graduation = graduation;
    }

    public String getPostGraduation() {
        return postGraduation;
    }

    public void setPostGraduation(String post_graduation) {
        this.postGraduation = post_graduation;
    }

    public int getFees() {
        return fees;
    }

    public void setFees(int fees) {
        this.fees = fees;
    }

    public Login getLogin_id() {
        return login_id;
    }

    public void setLogin_id(Login login_id) {
        this.login_id = login_id;
    }


}
