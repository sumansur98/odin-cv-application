import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function EducationForm({
  values,
  closeForm,
  addEducation,
  setFormView,
  editEducation,
  editIndex,
}) {
  console.log(values);

  const [formValObj, setFormValObj] =
    values === undefined
      ? useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        id: uuidv4(),
        hidden: false,
      })
      : useState({
        school: values.school,
        degree: values.degree,
        startDate: values.startDate,
        endDate: values.endDate,
        location: values.location,
        id: values.id,
        hidden: values.hidden,
      });

  const handleInputChange = (e) => {
    const val = e.target.value;
    const id = e.target.id;

    setFormValObj({ ...formValObj, [id]: val });
  };

  const handleAddClick = () => {
    const obj = {
      school: formValObj.school,
      degree: formValObj.degree,
      startDate: formValObj.startDate,
      endDate: formValObj.endDate,
      location: formValObj.location,
      id: formValObj.id,
      hidden: formValObj.hidden,
    };

    addEducation(obj);
    setFormView(false);
  };

  const handleSaveClick = () => {
    const obj = {
      school: formValObj.school,
      degree: formValObj.degree,
      startDate: formValObj.startDate,
      endDate: formValObj.endDate,
      location: formValObj.location,
      id: formValObj.id,
      hidden: formValObj.hidden,
    };

    editEducation(editIndex, obj);
    setFormView(false);
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TextField
          id="school"
          label="School"
          variant="standard"
          value={formValObj.school}
          onChange={handleInputChange}
        />
        <TextField
          id="degree"
          label="Degree"
          variant="standard"
          value={formValObj.degree}
          onChange={handleInputChange}
        />
        <TextField
          id="startDate"
          label="Start Date"
          variant="standard"
          value={formValObj.startDate}
          onChange={handleInputChange}
        />
        <TextField
          id="endDate"
          label="End Date"
          variant="standard"
          value={formValObj.endDate}
          onChange={handleInputChange}
        />
        <TextField
          id="location"
          label="Location"
          variant="standard"
          value={formValObj.location}
          onChange={handleInputChange}
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
      {
        (values == undefined) ? (

          <Button
            variant="outlined"
            size="small"
            disableElevation
            onClick={handleAddClick}
          >
            Add
          </Button>
        ) : (
          <Button
          variant="outlined"
          size="small"
          disableElevation
          onClick={handleSaveClick}
        >
          Save
        </Button>
        )
      }


    </>
  );
}
