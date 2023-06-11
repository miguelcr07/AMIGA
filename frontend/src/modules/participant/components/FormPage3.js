import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as selectors from "../../app/selectors";
import "./Form.css";

const FormPage3 = ({ formData, setFormData, previousPage , nextPage}) => {
    const demands = useSelector(selectors.getDemands);
    const programs = useSelector(selectors.getPrograms);
    const [selectedPrograms, setSelectedPrograms] = useState([]);
    const [selectedDemand, setSelectedDemand] =
        useState(demands.find((demands) => demands.id === formData.demand) || null);

    const handleDemandChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, demand: value.id });
            setSelectedDemand(demands.find((demands) => demands.id === value.id))
        } else {
            setFormData({ ...formData, demand: null });
            setSelectedDemand(null);
        }
    };

    const handleProgramsChange = (event, value) => {
        const selectedPrograms = value.map((program) => program.id);
        setSelectedPrograms(value);
        setFormData({ ...formData, programs: selectedPrograms });
    };

    const handleDerivationChange = (event) => {
        setFormData({ ...formData, derivation: event.target.value });
    };

    const handleObservationsChange = (event) => {
        setFormData({ ...formData, observations: event.target.value });
    };


    useEffect(() => {
        if (formData.programs && formData.programs.length > 0) {
            const selected = formData.programs.map((programId) =>
                programs.find((program) => program.id === programId)
            );
            setSelectedPrograms(selected);
        }
        setFormData({ ...formData, date:  new Date() });
    }, [formData.programs, programs, selectedPrograms]);

    return (
        <div>
            <h1>Tipo demanda</h1>
            <div className="row-container">
                <Autocomplete
                    className="item"
                    options={demands}
                    getOptionLabel={(demand) => demand.name}
                    value={selectedDemand}
                    onChange={handleDemandChange}
                    renderInput={(params) => <TextField {...params} label="Seleccionar demanda" />}
                />

                <Autocomplete
                    className="item"
                    multiple
                    options={programs}
                    getOptionLabel={(program) => program.name}
                    value={selectedPrograms}
                    onChange={handleProgramsChange}
                    renderInput={(params) => <TextField {...params} label="Seleccionar programas" />}
                />
            </div>
            <div className="row-container">
                <TextField
                    className="item"
                    label="Derivación"
                    value={formData.derivation || ""}
                    onChange={handleDerivationChange}
                />
            </div>
            <div className="row-container">
                <TextField
                    className="item"
                    label="Observaciones"
                    multiline
                    rows={4}
                    value={formData.observations || ""}
                    onChange={handleObservationsChange}
                />
            </div>
            <div className="center">
                <Button variant="contained" onClick={previousPage}>Anterior</Button>
                <div className="bigSpace"></div>
                <Button variant="contained" onClick={nextPage}>Siguiente</Button>
            </div>
        </div>
    );
};

export default FormPage3;
