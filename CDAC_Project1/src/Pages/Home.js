import { useEffect,useState} from "react";
import { Container, Row, Col } from "reactstrap";
import logos from '../resources/logos.jpeg';
import './Home.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const [mob, setMobile] = useState({
    mobile:'',
    id:''
  });

  const {id,mobile} = mob

  const onInputChange = e => {
    console.log(e.target.value)

    //6
    setMobile({...mob, [e.target.name] : e.target.value})
}



  const getNumber = async (e) => {
    e.preventDefault();

    //to add data
    await axios.get("http://localhost:8080/patients/patientRecordByMobile/:{mobile}",mobile);

    // 9 after data is submitted goto PatientList
    //history.push("/CDAC_Project/PatientList")
    // navigate('/CDAC_Project/PatientList')
    navigate('/CDAC_Project/PrescriptionView')
}


  return (
    <div className='clinapp_header section_padding' id='home'>
      <div className='clinapp_header-content'>
        <h1 className='gradient_text'>Start with a new outlook to your health</h1>
        <p></p>
        <div className='clinapp_header-content_input'>

          <input type="number" 
          placeholder='Enter Mobile Number'
          name="mobile"
          value={mobile}
          onChange={e => onInputChange(e)}
          />

          <button type='button'
           onClick={ e => getNumber(e)}
          >Check Records
          </button>

        </div>
      </div>
      <div className='clinapp_header-image'>
        <img src={logos} alt='logos' />
      </div>
    </div>
  )
};

export default Home;
