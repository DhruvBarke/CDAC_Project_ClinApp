import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import  CustomNavbar  from './components/CustomNavbar';
import Sidebar from './components/Sidebar';
import Privateroute from './components/Privateroute';
import { Home, Login, Signup } from './Pages';
import UserProvider from "./contexts/UserProvider";

import EmployeeList from './Pages/EmployeeList';
import EmployeeForm from './Pages/EmployeeForm';
import EmployeeUpdate from './Pages/EmployeeUpdate';
import EmployeeView from './Pages/EmployeeView';

import ClinicForm from './Pages/ClinicForm';
import ClinicList from './Pages/ClinicList';
import ClinicUpdate from './Pages/ClinicUpdate'


import PatientForm from './Pages/PatientForm';
import PatientList from './Pages/PatientList'
import PatientUpdate from './Pages/PatientUpdate'

import PrescriptionForm from './Pages/PrescriptionForm';
import PrescriptionList from './Pages/PrescriptionList';
import PrescriptionViewM from './Pages/PrescriptionViewM';
import PrescriptionUpdate from './Pages/PrescriptionUpdate';

import DoctorQualificationForm from './Pages/DoctorQualificationForm';
import DoctorQualificationList from './Pages/DoctorQualificationList'
import DoctorQualificationUpdate from './Pages/DoctorQualificationUpdate';

import ProductForm from './Pages/ProductForm';
import ProductList from './Pages/ProductList';
import ProductUpdate from './Pages/ProductUpdate';

import DepartmentList from './Pages/DepartmentList';
import DepartmentForm from './Pages/DepartmentForm';
import DepartmentUpdate from './Pages/DepartmentUpdate';

function App() {
  return (
    <>
      <div className="App">
      <UserProvider>
        <BrowserRouter>
          <CustomNavbar />
          <ToastContainer position="bottom-center" />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/CDAC_Project/ClinicList" element={<ClinicList />}/>
              <Route path="/CDAC_Project/ClinicForm" element={<ClinicForm />}/>
              <Route path="/CDAC_Project/ClinicUpdate/:id" element={<ClinicUpdate />}/>

              <Route path="/CDAC_Project/EmployeeList" element={<EmployeeList />}/>
              <Route path="/CDAC_Project/EmployeeForm" element={<EmployeeForm />}/>
              <Route path="/CDAC_Project/EmployeeUpdate/:id" element={<EmployeeUpdate />}/>
              <Route path="/CDAC_Project/EmployeeView/:id" element={<EmployeeView />}/>


              <Route path="/CDAC_Project/PatientForm" element={<PatientForm />}/>
              <Route path="/CDAC_Project/PatientList" element={<PatientList />}/>
              <Route path="/CDAC_Project/PatientUpdate/:id" element={<PatientUpdate />}/>

        
              <Route path="/CDAC_Project/PrescriptionForm" element={<PrescriptionForm />}/>
              <Route path="/CDAC_Project/PrescriptionList" element={<PrescriptionList />}/>
              <Route path="/CDAC_Project/PrescriptionViewM/:mobile" element={<PrescriptionViewM />}/>
              <Route path="/CDAC_Project/PrescriptionUpdate/:id" element={<PrescriptionUpdate />}/>


              <Route path="/CDAC_Project/DoctorQualificationForm" element={<DoctorQualificationForm />}/>
              <Route path="/CDAC_Project/DoctorQualificationList" element={<DoctorQualificationList />}/>
              <Route path="/CDAC_Project/DoctorQualificationUpdate/:id" element={<DoctorQualificationUpdate />}/>

              <Route path="/CDAC_Project/ProductForm" element={<ProductForm />}/>
              <Route path="/CDAC_Project/ProductList" element={<ProductList />}/>
              <Route path="/CDAC_Project/ProductUpdate/:id" element={<ProductUpdate />}/>
        
              <Route path="/CDAC_Project/DepartmentList" element={<DepartmentList />}/>
              <Route path="/CDAC_Project/DepartmentForm" element={<DepartmentForm />}/>
              <Route path="/CDAC_Project/DepartmentUpdate/:id" element={<DepartmentUpdate />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
      
    </div>
    </>
    
  );
}

export default App;
