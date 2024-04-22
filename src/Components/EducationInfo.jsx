import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Box from "@mui/system/Box";
import spacing from "@mui/system/spacing";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EducationForm from "./EducationForm";

export default function EducationInfo({ values, addEducation, deleteEducation }) {
  const [formView, setFormView] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(null);

  const openExistingForm = (index) => {
    setFormView(true);
    setEditIndex(index);
  };

  const closeForm = () => {
    setFormView(false);
  };

  const handleDeleteClick = (index) => {
    deleteEducation(index);
  }

  return (
    <>
      <Card sx={{ width: "500px", marginTop: "10px" }}>
        <CardContent>
          <Box component="div">
            {formView ? (
              <EducationForm
                values={values[editIndex]}
                closeForm={closeForm}
                addEducation={addEducation}
                setFormView={setFormView}
              ></EducationForm>
            ) : (
              <Stack
                direction="column"
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <EducationItemList
                  values={values}
                  openFormOnClick={openExistingForm}
                  handleDeleteClick={handleDeleteClick}
                ></EducationItemList>
              </Stack>
            )}

            {!formView && (
              <Button
                variant="outlined"
                size="small"
                disableElevation
                endIcon={<AddIcon />}
                onClick={() => {
                  setFormView(true);
                  setEditIndex(null);
                }}
              >
                Add Education
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

function EducationItemList({ values, openFormOnClick, handleDeleteClick }) {
  return (
    <>
      {values.map((ele, index) => {
        return (
          <EducationItem
            key={ele.id}
            title={ele.school}
            hidden={ele.hidden}
            openFormOnClick={() => {
              openFormOnClick(index);
            }}
            handleDeleteClick={()=>{
              handleDeleteClick(index);
            }}
          ></EducationItem>
        );
      })}
    </>
  );
}

function EducationItem({ title, hidden, openFormOnClick, handleDeleteClick }) {
  return (
    <>
      <Box sx={{ width: "100%", padding: "5px" }} onClick={openFormOnClick}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          {title}

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            {hidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
            <DeleteIcon onClick={handleDeleteClick}/>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
