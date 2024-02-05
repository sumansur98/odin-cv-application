import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Box from "@mui/system/Box";
import spacing from "@mui/system/spacing";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function EducationInfo({ values }) {
  return (
    <>
      <Card sx={{ minWidth: 275, marginTop: "5px" }}>
        <CardContent>
          <Box component="div">
            <Stack
              direction="column"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
                {
                    values.map((ele)=> {
                        return <EducationItem key={ele.id} title={ele.school} ></EducationItem>
                    })
                }
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

function EducationItem({title}){
    return (
        <>
            <Box>
                {title}
            </Box>
        </>
    )
}
