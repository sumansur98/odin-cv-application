import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function ExperienceForm({
    values,
    closeForm,
    addExperience,
    setFormView,
    editExperience,
    editIndex,
}) {
    console.log(values);

    const [formValObj, setFormValObj] =
        values === undefined
            ? useState({
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                location: "",
                id: uuidv4(),
                hidden: false,
            })
            : useState({
                company: values.company,
                position: values.position,
                startDate: values.startDate,
                endDate: values.endDate,
                location: values.location,
                id: values.id,
                hidden: values.hidden,
            });

    const handleInputChange = (e) => {
        const val = e.target.value;
        const id = e.target.id;

        setFormValObj({ ...formValObj, [id]: val });
    };

    const handleAddClick = () => {
        const obj = {
            company: formValObj.company,
            position: formValObj.position,
            startDate: formValObj.startDate,
            endDate: formValObj.endDate,
            location: formValObj.location,
            id: formValObj.id,
            hidden: formValObj.hidden,
        };

        addExperience(obj);
        setFormView(false);
    };

    const handleSaveClick = () => {
        const obj = {
            company: formValObj.company,
            position: formValObj.position,
            startDate: formValObj.startDate,
            endDate: formValObj.endDate,
            location: formValObj.location,
            id: formValObj.id,
            hidden: formValObj.hidden,
        };

        editExperience(editIndex, obj);
        setFormView(false);
    }

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <TextField
                    id="company"
                    label="Company"
                    variant="standard"
                    value={formValObj.company}
                    onChange={handleInputChange}
                />
                <TextField
                    id="position"
                    label="Position"
                    variant="standard"
                    value={formValObj.position}
                    onChange={handleInputChange}
                />
                <TextField
                    id="startDate"
                    label="Start Date"
                    variant="standard"
                    value={formValObj.startDate}
                    onChange={handleInputChange}
                />
                <TextField
                    id="endDate"
                    label="End Date"
                    variant="standard"
                    value={formValObj.endDate}
                    onChange={handleInputChange}
                />
                <TextField
                    id="location"
                    label="Location"
                    variant="standard"
                    value={formValObj.location}
                    onChange={handleInputChange}
                />
            </Box>
            <Button
                variant="outlined"
                size="small"
                disableElevation
                onClick={closeForm}
            >
                Cancel
            </Button>
            {
                (values == undefined) ? (

                    <Button
                        variant="outlined"
                        size="small"
                        disableElevation
                        onClick={handleAddClick}
                    >
                        Add
                    </Button>
                ) : (
                    <Button
                        variant="outlined"
                        size="small"
                        disableElevation
                        onClick={handleSaveClick}
                    >
                        Save
                    </Button>
                )
            }


        </>
    );
}
