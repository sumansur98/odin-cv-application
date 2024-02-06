import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import * as React from 'react';

export default function PersonalInfo({ values, onInputChange }) {
  const handleInputChange = (e) => {
    const key = e.target.id;
    const val = e.target.value;
    onInputChange(key, val);
  };

  return (
    <>
      <Card sx={{ width: '500px',marginTop : '10px' }}>
        <CardContent>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            value={values.name}
            onChange={handleInputChange}
          />

          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={values.email}
            onChange={handleInputChange}
          />

          <TextField
            id="phnNumber"
            label="Phone Number"
            variant="standard"
            value={values.phnNumber}
            onChange={handleInputChange}
          />

          <TextField
            id="location"
            label="Location"
            variant="standard"
            value={values.location}
            onChange={handleInputChange}
          />
        </CardContent>
      </Card>
    </>
  );

 
}
