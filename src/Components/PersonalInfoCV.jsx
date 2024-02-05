import Box from "@mui/system/Box";
import spacing from "@mui/system/spacing";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { palette } from "@mui/system";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function PersonalInfoCV({ values }) {
  return (
    <>
      <Box component="section" sx={{ backgroundColor: "blue", color: "#FFF", height:'150px' }}>
        <Typography variant="h5" gutterBottom align="center">
          {values.name}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography>  {(values.phnNumber!=='') ? (<CallIcon />) : null} {values.phnNumber} </Typography>
          <Typography>{(values.email!=='') ? (<EmailIcon />) : null} {values.email}</Typography>
          <Typography>{(values.location!=='') ? (<LocationOnIcon />) : null} {values.location}</Typography>
        </Stack>
      </Box>
    </>
  );
}
