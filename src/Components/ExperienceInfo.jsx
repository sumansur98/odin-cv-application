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
import ExperienceForm from "./ExperienceForm";

export default function ExperienceInfo({ values, addExperience, deleteExperience, editExperience }) {
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
    deleteExperience(index);
  }

  return (
    <>
      <Card sx={{ width: "500px", marginTop: "10px" }}>
        <CardContent>
          <Box component="div">
            {formView ? (
              <ExperienceForm
                values={values[editIndex]}
                closeForm={closeForm}
                addExperience={addExperience}
                editExperience={editExperience}
                setFormView={setFormView}
                editIndex={editIndex}
              ></ExperienceForm>
            ) : (
              <Stack
                direction="column"
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <ExperienceItemList
                  values={values}
                  openFormOnClick={openExistingForm}
                  handleDeleteClick={handleDeleteClick}
                ></ExperienceItemList>
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
                Add Experience
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

function ExperienceItemList({ values, openFormOnClick, handleDeleteClick }) {
  return (
    <>

      {values.map((ele, index) => {
        return (
          <ExperienceItem
            key={ele.id}
            id={ele.id}
            title={ele.company}
            hidden={ele.hidden}
            openFormOnClick={() => {
              openFormOnClick(index);
            }}
            handleDeleteClick={() => {
              handleDeleteClick(index);
            }}
          ></ExperienceItem>
        );
      })}

    </>
  );
}

function ExperienceItem({ id, title, hidden, openFormOnClick, handleDeleteClick }) {
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
            <DeleteIcon onClick={(e) => {
              handleDeleteClick()
              e.stopPropagation();
            }} />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
