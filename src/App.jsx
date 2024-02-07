import { useState } from "react";
import "./App.css";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import CvComponent from "./Components/CvComponent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from 'uuid';

const testData = [
  {
    'id' : uuidv4(),
    'school' : 'school1',
    'degree' : 'degree1',
    'startDate' : 'start1',
    'endDate' : 'end1',
    'location' : 'location1',
    'hidden' : true, 
  },
  {
    'id' : uuidv4(),
    'school' : 'school2',
    'degree' : 'degree2',
    'startDate' : 'start2',
    'endDate' : 'end2',
    'location' : 'location2',
    'hidden' : false,
  }
]

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
  
  const [educationObj, setEducationObj] = useState([]);
  
  const addEducation = (obj)=>{
    setEducationObj([...educationObj,obj]);
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <PersonalInfo
                values={personalObj}
                onInputChange={handlePersonalChange}
              ></PersonalInfo>
            </Grid>
            <Grid item>
              <EducationInfo values={educationObj} addEducation={addEducation}></EducationInfo>
            </Grid>
            <Grid item>work</Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <CvComponent personal={personalObj}></CvComponent>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
