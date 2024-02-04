import PersonalInfoCV from "./PersonalInfoCV";
import { Card } from "@mui/material";

export default function CvComponent({personal}){
    return (
        <>
            <Card>
                <PersonalInfoCV values={personal}></PersonalInfoCV>
            </Card>
            
        </>
    )
}