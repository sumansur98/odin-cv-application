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

  const addEducation = (obj) => {
    setEducationObj([...educationObj, obj]);
  }

  const editEducation = (index, obj) => {
    let editedEducation = [...educationObj];
    editedEducation[index] = obj;
    setEducationObj(editedEducation);
  }

  const deleteEducation = (index) => {
    console.log('delete index', index);
    console.log('education obj', educationObj);
    const newEducation = [
      ...educationObj.slice(0, index),
      ...educationObj.slice(index + 1)
    ]
    console.log('after delete', newEducation);
    setEducationObj(newEducation);
  }

  const [experienceObj, setExperienceObj] = useState([]);

  const addExperience = (obj) => {
    setExperienceObj([...experienceObj, obj])
  }

  const editExperience = (index, obj) => {
    let editedExp = [...experienceObj];
    editedExp[index] = obj;
    setExperienceObj(editedExp);
  }

  const deleteExperience = (index) => {
    const newExp = [
      ...experienceObj.slice(0, index),
      ...experienceObj.slice(index + 1)
    ]
    setExperienceObj(newExp);
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
              <EducationInfo
                values={educationObj}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
                editEducation={editEducation}></EducationInfo>
            </Grid>
            <Grid item>
              <ExperienceInfo
                values={experienceObj}
                addExperience={addExperience}
                deleteExperience={deleteExperience}
                editExperience={editExperience}></ExperienceInfo>
            </Grid>
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
