import React from 'react';
import {Axios} from '../services/helper';
import {useState, useEffect} from 'react';
import { useNavigate,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function PrescriptionView() 
{
    // 3----------For Prescription----------------------
    const [user, setUser] = useState({

        //initial values
        id:'',
        patientId:'',
        prescriptionDate:'',
        diagnosis:'',
        weight:'',
        bp:''
    });

    const [patient, setPatient] = useState({

      //initial values
      id:'',
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      mobile:'',
      age:'',
      address:'',
      gender:'',
      image:''
  });

  // 3--------------------------------
    const [product, setProduct] = useState({

      //initial values
      id:'',
      prescriptionId:'',
      productName:'',
      productManufacturerName:'',
      frequency:'',
      duration:'',
      remarks:'',
      quantity:''
  });

    const {id} = useParams();


    useEffect(() => {
      loadPres()
      loadPatient()
      loadProduct()
      },[])

    const loadPres = async () => {

        const result = await Axios.get(`/prescriptions/${id}`)
        // console.log(result)
  
        //14
        setUser(result.data)
      };

      const loadPatient = async () => {

        const result = await Axios.get(`/patients/${id}`)
        // console.log(result)
  
        //14
        setUser(result.data)
      };

      const loadProduct = async () => {

        const result = await Axios.get(`/products/${id}`)
        // console.log(result)
  
        //14
        setUser(result.data)
      };



  return (
    <div className='container'>
        <h5>Prescription</h5>
        <br></br>
        <ul className='list-group w-50'>
            <li className='list-group-item'>Patient Id : {user.patientId}</li>
            <li className='list-group-item'>Date : {user.prescriptionDate}</li>

            <li className='list-group-item'>Name : {patient.firstName} {" "} {patient.lastName}</li>

            <li className='list-group-item'>Diagnosis : {user.diagnosis}</li>

            <li className='list-group-item'>Product Name : {product.productName}</li>
            <li className='list-group-item'>Manifacture Name : {product.productManufacturerName}</li>
            <li className='list-group-item'>Frequency : {product.frequency}</li>
            <li className='list-group-item'>Quantity : {product.quantity}</li>
            <li className='list-group-item'>Duration : {product.duration}</li>
            <li className='list-group-item'>Remarks : {product.remarks}</li>

            {/* <li className='list-group-item'>Diagnosis : {user.diagnosis}</li>
            <li className='list-group-item'>Prescription Date : {user.prescriptionDate}</li>
            <li className='list-group-item'>Weight : {user.weight}</li>
            <li className='list-group-item'>Blood Presure : {user.bp}</li> */}

            {/* <li className='list-group-item'>Frequency : {user.frequency}</li>
            <li className='list-group-item'>Duration : {user.duration}</li>
            <li className='list-group-item'>Remark : {user.remarks}</li>
            <li className='list-group-item'>Quantity : {user.quantity}</li> */}
        </ul>
        <hr></hr>
        <Link className="btn btn-primary" to="/CDAC_Project/PrescriptionList">
           Go Back
        </Link>
    </div>
  )
}
