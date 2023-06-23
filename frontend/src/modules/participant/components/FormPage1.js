import React, {useState} from 'react';

import Button from '@mui/material/Button';
import './Form.css';
import FormPage1Part1 from "./FormPage1Part1";
import {Errors, HomeLink} from "../../common";
import FormPage1Part2 from "./FormPage1Part2";

const FormPage1 = ({formData, setFormData, nextPage}) => {

    const [backendErrors, setBackendErrors] = useState(null);
    function validarFormatoDNI(dni) {
        // Eliminar espacios en blanco al principio y al final del DNI
        dni = dni.trim();

        // Expresión regular para validar el formato del DNI
        const formatoDNI = /^\d{8}[A-HJ-NP-TV-Z]$/;

        // Comprobar si el DNI cumple con el formato
        if (formatoDNI.test(dni)) {
            // Obtener el número y la letra del DNI
            const numero = dni.substr(0, 8);
            const letra = dni.substr(8, 1).toUpperCase();

            // Calcular la letra correspondiente al número del DNI
            const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';
            const letraCalculada = letrasValidas.charAt(numero % 23);

            // Comprobar si la letra del DNI es correcta
            return letra === letraCalculada;
        } else {
            return false; // El formato del DNI es incorrecto
        }
    }

    function validarFormatoNIE(nie) {
        // Eliminar espacios en blanco al principio y al final del NIE
        nie = nie.trim();

        // Expresión regular para validar el formato del NIE
        var formatoNIE = /^[XYZ]\d{7}[A-HJ-NP-TV-Z]$/;

        // Comprobar si el NIE cumple con el formato
        if (formatoNIE.test(nie)) {
            // Obtener la letra inicial y el número del NIE
            const letraInicial = nie.substr(0, 1).toUpperCase();
            const numero = nie.substr(1, 7);

            // Mapear la letra inicial del NIE a un número
            const mapaLetras = {
                X: 0,
                Y: 1,
                Z: 2,
            };
            const numeroInicial = mapaLetras[letraInicial];

            // Calcular la letra de control del NIE
            const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';
            const posicionInicial = numeroInicial * 9;
            const posicionFinal = posicionInicial + parseInt(numero);
            const letraCalculada = letrasValidas.charAt(posicionFinal % 23);

            // Comprobar si la letra de control del NIE es correcta
            return letraCalculada === nie.substr(8, 1).toUpperCase();
        } else {
            return false; // El formato del NIE es incorrecto
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.dni !== ''){
            if(!validarFormatoDNI(formData.dni)){
                setBackendErrors({globalError: 'Formato DNI incorrecto'});
                return;
            }

        }
        if(formData.nie !== ''){
            if(!validarFormatoNIE(formData.nie)){
                setBackendErrors({globalError: 'Formato NIE incorrecto'});
                return;
            }
        }

        if (formData.province === null ) {
            setBackendErrors({globalError:"Provincia no seleccionada."});
            return;
        }

        if ( formData.municipality === null) {
            setBackendErrors({globalError:"Municipio no seleccionado."});
            return;
        }

        if ( formData.country === null) {
            setBackendErrors({globalError:"País de origen no seleccionado."});
            return;
        }
        if ( formData.maritalStatus === null) {
            setBackendErrors({globalError:"Estado civil no seleccionado."});
            return;
        }
        if ( formData.housing === null) {
            setBackendErrors({globalError:"Vivienda no seleccionada."});
            return;
        }
        if ( formData.cohabitation === null) {
            setBackendErrors({globalError:"Tipo convivencia no seleccionado."});
            return;
        }
        nextPage();
    };

    return (
        <div>
            <div className="header">
                <h1>Datos personales</h1>
                <HomeLink></HomeLink>
            </div>

            <form onSubmit={handleSubmit}>
                <FormPage1Part1 formData={formData} setFormData={setFormData}></FormPage1Part1>
                <FormPage1Part2 formData={formData} setFormData={setFormData}></FormPage1Part2>
                <br/>
                <Errors errors={backendErrors} onClose={() => setBackendErrors(null)}/>
                <div className="center">
                    <Button variant="contained" type="submit">
                        Siguiente
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormPage1;
