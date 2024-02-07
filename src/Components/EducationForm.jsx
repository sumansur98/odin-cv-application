import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from 'uuid';

export default function EducationForm({ values , closeForm, addEducation}) {

  const handleSaveClick = ()=>{
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const location = document.getElementById('location').value;
    const id = uuidv4();
    const hidden = false;

    const obj = {
      school,degree,startDate,endDate,location,id,hidden
    }

    addEducation(obj);
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TextField
          id="school"
          label="School"
          variant="standard"
          value={values?.school}
        />
        <TextField
          id="degree"
          label="Degree"
          variant="standard"
          value={values?.degree}
        />
        <TextField
          id="startDate"
          label="Start Date"
          variant="standard"
          value={values?.startDate}
        />
        <TextField
          id="endDate"
          label="End Date"
          variant="standard"
          value={values?.endDate}
        />
        <TextField
          id="location"
          label="Location"
          variant="standard"
          value={values?.location}
        />
      </Box>
      <Button
        variant="outlined"
        size="small"
        disableElevation
        onClick={closeForm}
      >
        Cancel
      </Button>
      <Button
        variant="outlined"
        size="small"
        disableElevation
        onClick={handleSaveClick}
      >
        Save
      </Button>
    </>
  );
}
