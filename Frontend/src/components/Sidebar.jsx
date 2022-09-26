import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css'

import { links } from '../resources/data';

function Sidebar() {
  return (
    <>
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className="">
                        <ul className="sidebar-items-container">
                            <li className="sidebar-item">
                                <Link to='/CDAC_Project/PatientForm' className="sidebar-link">
                                    <i className="fa fa-plus" aria-hidden="true" /> <p>Add Patient</p>
                                 </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/CDAC_Project/ClinicList' className="sidebar-link">
                                    <i className="fas fa-clipboard-list" /> <p>Clinic List</p>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/CDAC_Project/PatientList' className="sidebar-link">
                                    <i className="fas fa-clipboard-list" /> <p>Patient List</p>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/CDAC_Project/PrescriptionList' className="sidebar-link">
                                    <i className="fas fa-clipboard-list" /> <p>Prescription List</p>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/CDAC_Project/ProductList' className="sidebar-link">
                                    <i className="fas fa-clipboard-list" /> <p>Product List</p>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/CDAC_Project/PrescriptiopnForm' className="sidebar-link">
                                    <i className="fas fa-pills" /> <p>Medicine About</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Sidebar
