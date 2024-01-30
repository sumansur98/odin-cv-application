import { useState } from "react";
import "./App.css";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import CvComponent from "./Components/CvComponent";
import Button from '@mui/material/Button';

function App() {
  const [personalObj, setPersonalObj] = useState({
    name: "",
    email: "",
    phnNumber: "",
    location: "",
  });

  const handlePersonalChange = (key, value) => {
    const newObj = { ...personalObj, [key]: value };
    setPersonalObj(newObj);
  };

  return (
    <>
    <Button variant="outlined">Hello world</Button>
      <div className="flex">
        <div>
          <div className="form-container personal-form-div">
            <PersonalInfo
              values={personalObj}
              onInputChange={handlePersonalChange}
            ></PersonalInfo>
          </div>
          <div className="form-container education-form-div">
            <EducationInfo></EducationInfo>
          </div>
          <div className="form-container experience-form-div">
            <ExperienceInfo></ExperienceInfo>
          </div>
        </div>
        <div>
          <CvComponent personal={personalObj}></CvComponent>
        </div>
      </div>
    </>
  );
}

export default App;
