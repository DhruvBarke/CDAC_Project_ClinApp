import { useEffect } from "react";
import { useState } from "react";
import { signUp } from "../services/user-service";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      username: "",
      password: "",
      role: "",
    });
  };

  const navigate = useNavigate();

  //submit the form
  const submitForm =  (event) => {
    event.preventDefault();

    // if(error.isError){
    //   toast.error("Form data is invalid , correct all details then submit. ");
    //   setError({...error,isError:false})
    //   return;
    // }

    console.log(data);
    
    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User is registered successfully !! user id " + resp.id);
        setData({
          username: "",
          password: "",
          role: "",
        });

        //Clinic form
        navigate('/CDAC_Project/Login')
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  // const navigate = useNavigate();

  // //open clic add form
  // const OpenClinic = async e => {
  //   navigate('/CDAC_Project/ClinicForm')
  // }

  return (

      <Container>
        <Row className="mt-4">
          {/* { JSON.stringify(data) } */}

          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3> Register</h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form onSubmit={submitForm}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="username">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="username"
                      onChange={(e) => handleChange(e, "username")}
                      value={data.username}
                      invalid={
                        error.errors?.response?.data?.username ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.username}
                    </FormFeedback>
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* role field */}
                  <FormGroup>
                    <Label for="role">Enter role</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="role"
                      onChange={(e) => handleChange(e, "role")}
                      value={data.role}
                      invalid={
                        error.errors?.response?.data?.role ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.role}
                    </FormFeedback>
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light" 
                    // onClick={e => OpenClinic(e)}
                    >
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default Signup;
