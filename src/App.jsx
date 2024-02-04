import { useState } from "react";
import "./App.css";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import CvComponent from "./Components/CvComponent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
            <Grid item>education</Grid>
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
