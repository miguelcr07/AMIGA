import React from 'react';

import Button from '@mui/material/Button';
import './Form.css';
import FormPage1Part1 from "./FormPage1Part1";
import FormPage1Part2 from "./FormPage1Part2";
import RegistrarMenor from "./RegistrarMenor";
import FormPage1Part3 from "./FormPage1Part3";

const FormPage1 = ({ formData, setFormData, nextPage }) => {

    return (
        <div>
            <h1>Datos personales</h1>
            <FormPage1Part1 formData={formData} setFormData={setFormData}></FormPage1Part1>
            <FormPage1Part2 formData={formData} setFormData={setFormData}></FormPage1Part2>
            <FormPage1Part3 formData={formData} setFormData={setFormData}></FormPage1Part3>
            <RegistrarMenor formData={formData} setFormData={setFormData}></RegistrarMenor>

            <div className="center">
                <Button variant="contained" onClick={nextPage} >
                    Siguiente
                </Button>
            </div>
        </div>
    );
};

export default FormPage1;
