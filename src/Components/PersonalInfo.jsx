export default function PersonalInfo({inputValues}){


    return (
        <>
            {inputValues.name} {inputValues.email} {inputValues.phnNumber}
        </>
    );
}