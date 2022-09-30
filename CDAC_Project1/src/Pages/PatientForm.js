// patient_id int auto_increment,
// first_name varchar (50) not null,
// last_name varchar(50),
// age tinyint,
// mobile varchar(10) default 'NA',
// email varchar (100),
// address varchar(300),
// pathology_lab_id int,
// radiology_lab_id int,



import {Axios} from '../services/helper';
import React from 'react'
import {useState} from 'react'
import { Container } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { Link } from 'react-router-dom'

export default function PatientForm() 
{
    //8
    // let history = useHistory();
    const navigate = useNavigate();
    

    // 3--------------------------------
        const [user, setUser] = useState({

            //initial values
            id:'',
            firstName:'',
            lastName:'',
            email:'',
            mobile:'',
            age:'',
            address:'',
            gender:'',
            employeeId:'',
            deptId:''
        });
    
    const {firstName,lastName,email,mobile,age,address,gender,deptId,employeeId} = user

    // 5-----------------
    const onInputChange = e => {
        console.log(e.target.value)

        //6
        setUser({...user, [e.target.name] : e.target.value})
    }

    //7
    const onFormSubmit = async (e )=>{
        e.preventDefault();

        //to add data
        await Axios.post("/patients",user);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        // navigate('/CDAC_Project/PatientList')
        navigate('/CDAC_Project/PrescriptionForm')
    }

    //for Close
    const CloseForm = async (e) => {
        navigate('/CDAC_Project/PatientList')
    }
   

  return (
    <div>
        <Container style={{width:800}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Patient Details</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        
                        <Col md={6}>
                        <FormGroup>
                            <Label for="firstName">
                            First Name
                            </Label>
                            <Input
                            id="firstName"
                            name="firstName"
                            placeholder="Enter first name"
                            type="text"
                            value={firstName}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={6}>
                        <FormGroup>
                            <Label for="lastName">
                            Last Name
                            </Label>
                            <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Enter last name"
                            type="text"
                            value={lastName}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={6}>
                        <FormGroup>
                            <Label for="email">
                            Email Id
                            </Label>
                            <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email Id"
                            type="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        {/* <Col md={6}>
                        <FormGroup>
                            <Label for="password">
                            Password
                            </Label>
                            <Input
                            id="password"
                            name="password"
                            placeholder="Enter password "
                            type="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col> */}


                        <Col md={6}>
                        <FormGroup>
                            <Label for="mobile">
                            Mobile No.
                            </Label>
                            <Input
                            id="mobile"
                            name="mobile"
                            placeholder="Enter Mobile Number"
                            type="number"
                            value={mobile}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={12}>
                        <FormGroup>
                            <Label for="address">
                            Address
                            </Label>
                            <Input
                            id="address"
                            name="address"
                            placeholder="Enter Address"
                            type='textarea'
                            value={address}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={3}>
                            <FormGroup>
                                <Label for="age">
                                Age
                                </Label>
                                <Input
                                id="age"
                                name="age"
                                placeholder="Select Age"
                                type="number"
                                value={age}
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={3}>
                            <FormGroup>
                                <Label for="employeeId">
                                Employee Id
                                </Label>
                                <Input
                                id="employeeId"
                                name="employeeId"
                                placeholder="Enter employee id"
                                type="number"
                                value={employeeId}
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        
                        <Col md={3}>
                            <FormGroup>
                                <Label for="deptId">
                                Department Id
                                </Label>
                                <Input
                                id="deptId"
                                name="deptId"
                                placeholder="Enter Department id"
                                type="number"
                                value={deptId}
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        
                        <Col md={3}>
                            <FormGroup>
                                <Label for="gender">
                                Gender
                                </Label>
                                <br></br>
                                <select>
                                    <option selected>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </FormGroup>
                        </Col>


                        {/* <Col md={4}>
                        <FormGroup>
                            <Label for="image">
                            Image
                            </Label>
                            <Input
                            id="image"
                            name="image"
                            placeholder="Image"
                            type='image'
                            value={image}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col> */}

                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Submit
                            </Button>
                            {" "}
                            {/* <Link className="btn btn-primary" to="/CDAC_Project/PrescriptionForm">
                            Prescription Details
                            </Link> */}
                            <Button color="dark" className='ms-2' type='reset' onClick={e => CloseForm(e)}>
                                    Close
                            </Button>
                        </Container>
                    </Form>

                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
