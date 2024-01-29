export default function PersonalInfo({ values, onInputChange }){

    const handleInputChange = (e)=>{
        const key = e.target.id;
        const val = e.target.value;
        onInputChange(key, val);
    }

    return (
        <>
            <h1>personal info</h1>
            <form>
                <label htmlFor="name" className="text-3xl font-bold underline">Name</label>
                <input type="text" name="" id="name" value={values.name} onChange={handleInputChange}/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={values.email} onChange={handleInputChange}/>

                <label htmlFor="phnNumber">Phone Number</label>
                <input type="text" id="phnNumber" value={values.phnNumber} onChange={handleInputChange}/>

                <label htmlFor="location">Location</label>
                <input type="text" id="location" value={values.location} onChange={handleInputChange}/>
            </form>
        </>
    )
}