import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";

export default function EducationForm({ values }) {
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
    </>
  );
}
