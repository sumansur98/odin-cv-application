import PersonalInfoCV from "./PersonalInfoCV";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CvComponent({ personal }) {
  return (
    <>
      <Card sx={{ minWidth: 275, height: 100 + "vh" }}>
        <CardContent>
          <PersonalInfoCV values={personal}></PersonalInfoCV>
        </CardContent>
      </Card>
    </>
  );
}
