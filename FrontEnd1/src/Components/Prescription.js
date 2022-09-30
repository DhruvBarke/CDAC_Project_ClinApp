import React from 'react'
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function Prescription()
{
    // const pid = props.pid;
    // console.log(props.pid);

    const navigate = useNavigate();

    const [data,setData] = useState({

        patientId:'',
        prescriptionDate:'',
        diagnosis:'',
        weight:'',
        bp:'',
        products:{}
    });

    const [flag,setFlag]=useState({

        prescriptionDate:true,
        diagnosis:true,
        weight:true,
        bp:true,
    });


    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
        console.log(e.target.name+" "+e.target.value)
    }

    

    const logout=()=>{
        sessionStorage.removeItem("prescription");
        navigate("/");
    }
 
    useEffect(() => {
        let doc= JSON.parse(sessionStorage.getItem("prescription"));
        setData({
            
            // patientId:doc.patientId,
            // prescriptionDate:doc.prescriptionDate,
            // lastName:doc.lastName,
            // gender:doc.gender,dob:doc.dob,graduation:doc.graduation,postGraduation:doc.postGraduation,
            // speciality:doc.speciality,fees:doc.fees,mobileNumber:doc.mobileNumber,
            // address:doc.address,loginId:doc.login_id
        })
           

    },[]);

    

      const submitData=(e)=>{
        e.preventDefault();
        //console.log(flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.speciality+" "+flag.fees)
        if(true){
                const reqOptions ={
                    method : 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    // prescriptionDate:true,
                    // diagnosis:true,
                    // weight:true,
                    // bp:true,

                    body : JSON.stringify({

                        patientId:data.patientId,
                        prescriptionDate:data.prescriptionDate,
                        diagnosis:data.diagnosis,
                        weight:data.weight,
                        bp:data.bp,
                    })
                    
                }
                fetch("http://localhost:8080/prescriptions",reqOptions)
                .then(resp=>resp.text())
                .then(data=> {if(data.length != 0)
                    {
                        const json = JSON.parse(data);
                        alert("Prescription successful!!!");
                        sessionStorage.setItem("prescription",JSON.stringify(json))
                        navigate('/doctorappointmenthistory');

                        // console.log("Values are "+json);
                    }
                    else{
                        alert("Failed!!!");
                        //window.location.reload();
                        navigate('/Prescription');
                    }
                }) 
                
        }
        // else{
        //     alert("All fields are compulsory and must follow guidelines");
        //         // window.location.reload();
        //         navigate('/updatedoctor');
        // }

    }
    
    return(
        <div className="container fluid">

    {/* <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>  */}
    {/* <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} 
    onClick={() => navigate("/doctorappointmenthistory")}
    >Go Back</button> */}

    <br/><br/>
    <div className = "container">
    <div className = "row">
    <div className = "card col-md-6 offset-md-3 offset-md-3">
    <h2 className='text-center'>Prescription</h2>

     <form method="POST">
            <div style={{ marginTop: '10px' }} className = "form-group">
            <label><b>  Patient Id </b></label>
            <input type="text" name="patientId" className="form-control" 
            // value={patientId}
            onChange={changeHandler}
            />
        </div>
        <div style={{ marginTop: '10px' }} className = "form-group">
            <label><b>  Date </b></label>
            <input type="date" name="prescriptionDate" className="form-control" 
              onChange={changeHandler}  />
        </div>
        <div style={{ marginTop: '10px' }} className = "form-group">
            <label><b>  Diagnosis </b></label>
            <input type="text"  name="diagnosis" className="form-control" 
               onChange={changeHandler}  />
        </div >
        <div style={{ marginTop: '10px' }} className = "form-group">
            <label><b>  Weight </b></label>
            <input type="Number"  name="weight" className="form-control" 
             onChange={changeHandler}  />
        </div>


        <div style={{ marginTop: '10px' }} className = "form-group">
            <label><b>  Blood Presure: </b></label>
            <input type="text"  name="bp" className="form-control" 
             onChange={changeHandler}  />
        </div >

        <div style={{marginTop: "10px"}}>

         <button className="btn btn-success" onClick={submitData}>Submit</button>
        {/* <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button> */}
        <button className="btn btn-danger" onClick={() => navigate("/doctorappointmenthistory")} style={{marginLeft: "10px"}}>Cancel</button> 
        </div>
       
    </form>

    </div>
    </div>
</div>
</div>
    );

}
export default Prescription;


