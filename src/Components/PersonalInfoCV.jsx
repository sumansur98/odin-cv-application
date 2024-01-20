export default function PersonalInfoCV({values}){
    return (
        <>
            {values.name} {values.phnNumber} {values.email} {values.location}
        </>
    )
}