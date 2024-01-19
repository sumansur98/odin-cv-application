export default function PersonalInfoForm({ onInputChange, inputValues}){

    const handleValueChange = (e)=>{
        const key = e.target.id;
        const value = e.target.value;
        onInputChange(key, value);
    }

    return (
        <>
            <h1>Personal Information</h1>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="name" value={inputValues.name} onChange={handleValueChange}/>

                <label htmlFor="email">Email</label>
                <input type="text" name="" id="email" value={inputValues.email} onChange={handleValueChange}/>

                <label htmlFor="phnNumber">Password</label>
                <input type="text" name="" id="phnNumber" value={inputValues.phnNumber} onChange={handleValueChange}/>
            </form>
        </>
    );
}