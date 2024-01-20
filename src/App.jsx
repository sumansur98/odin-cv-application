import { useState } from 'react';
import './App.css';
import PersonalInfo from './Components/PersonalInfo';
import EducationInfo from './Components/EducationInfo';
import ExperienceInfo from './Components/ExperienceInfo';
import CvComponent from './Components/CvComponent';

const PERSONALINFOOBJ = {
  name : 'Suman Sur',
  email : 'sumansur98@gmail.com',
  phnNumber : '8017364915',
  location : 'Kolkata'
}

function App() {
  const [personalObj, setPersonalObj] = useState({
    name : '',
    email : '',
    phnNumber : '',
    location : '' 
  })

  const handlePersonalChange = (key, value)=>{
    const newObj = {...personalObj, [key] : value};
    setPersonalObj(newObj);
  }

  return (
    <>
      <div className='input-section'>
        <div className="form-container personal-form-div">
          <PersonalInfo values={personalObj} onInputChange={handlePersonalChange}></PersonalInfo>
        </div>
        <div className="form-container education-form-div">
          <EducationInfo></EducationInfo>
        </div>
        <div className="form-container experience-form-div">
          <ExperienceInfo></ExperienceInfo>
        </div>
      </div>
      <div>
        <CvComponent 
        personal={personalObj}>
        </CvComponent>
      </div>
    </>
  )
}

export default App
