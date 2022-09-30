import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AllDoctorList() 
{
    const navigate = useNavigate();
    
    const [doctor,setDoctor]=useState([]);

    useEffect(() => {
        //console.log("Hey");
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/alldoctors");
        console.log(result);
        setDoctor(result.data);
    }
    //end of 1------------------------------------------

    const appointment=(ev)=>{
        sessionStorage.setItem("doctor",JSON.stringify(ev));
        navigate("/doctorappointment");
    }

  return (
    <div className="container my-4">
        <h3>Doctor List</h3>
        <table className="table table-bordered">
            <thead className="bg-dark text-light">
            <tr>
            <th>Speaciality</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Graduation</th>
            <th>Post Graduation</th>
            <th>Fees</th>
            
            <th>Action</th>
        </tr>
            </thead>
            <tbody>
                {
                doctor.map((v) => {
                    return (
                        <tr>
                            <td>{v.speciality}</td>
                            <td>{v.firstName}</td>
                            <td>{v.lastName}</td>
                            <td>{v.gender}</td>
                            <td>{v.graduation}</td>
                            <td>{v.postGraduation}</td>
                            <td>{v.fees}</td>
                            {/* <td>{v.area_id.areaName}</td>
                            <td>{v.area_id.city_id.cityName}</td>
                            <td>{v.area_id.city_id.state_id.stateName}</td> */}
                            <td>
                                <button className="btn btn-primary" onClick={() => appointment(v)}>Book Appointment</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}
