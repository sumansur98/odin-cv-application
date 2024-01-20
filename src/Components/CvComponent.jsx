import PersonalInfoCV from "./PersonalInfoCV"

export default function CvComponent({personal}){
    return (
        <>
            <PersonalInfoCV values={personal}></PersonalInfoCV>
        </>
    )
}