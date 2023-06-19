import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Participant.css';

import * as actions from '../actions';
import {useNavigate} from "react-router-dom";
import backend from "../../../backend";
import {Errors} from "../../common";

function Participant() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedAttribute, setSelectedAttribute] = useState('dni');
    const [doc, setDoc] = useState('');
    const [selectedParticipant, setSelectedParticipant] = useState(null);
    const [backendErrors, setBackendErrors] = useState(null);

    const handleAttributeChange = (event) => {
        setSelectedAttribute(event.target.value);
    };

    const attributeOptions = ['dni', 'nie', 'pas'];

    const handleGetDetails = () => {
       // dispatch(actions.setParticipantSummary(selectedParticipant));
        dispatch(actions.findParticipant(
            selectedParticipant.id,
            Math.max(...selectedParticipant.yearList),));
        navigate('/participant/details')
    }
    const handleChange = (e) => {
        setDoc(e.target.value);
    };

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
    const handleFind = (event) => {
        event.preventDefault();

        let validFormat = true;
        if (selectedAttribute === 'dni') {
            validFormat = validarFormatoDNI(doc);
        }else if(selectedAttribute === 'nie'){
            validFormat = validarFormatoNIE(doc);
        }

        if (!validFormat) {
            setBackendErrors({globalError: 'Formato de documento incorrecto'});
            setSelectedParticipant(null);
            return;
        }

        backend.participant.getParticipantSummaryData(
            selectedAttribute,
            doc,
            (participant) => setSelectedParticipant(participant),
            (errors) => {
                setSelectedParticipant(null);
                setBackendErrors(errors);
            }
        );
    };


    return (
        <div className="container">
            <div className="button">
                <Button variant="contained" onClick={() => {
                    navigate('/participant/form');
                }}>
                    Registrar participante
                </Button>
            </div>
            <form onSubmit={handleFind}>
                <div className="participant-container">
                    <FormControl className="item" style={{position: 'relative'}}>
                        <InputLabel id="attribute-label">Seleccionar filtro</InputLabel>
                        <Select
                            labelId="attribute-label"
                            label="Seleccionar filtro"
                            id="attribute"
                            value={selectedAttribute}
                            onChange={handleAttributeChange}
                        >
                            {attributeOptions.map((attribute) => (
                                <MenuItem key={attribute} value={attribute}>
                                    {attribute.toUpperCase()}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        className="item2"
                        value={doc}
                        onChange={handleChange}
                        label="Documento"
                        placeholder="Documento"
                        required
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Buscar
                    </Button>

                </div>
            </form>
            <br/>
            <Errors errors={backendErrors} onClose={() => setBackendErrors(null)}/>
            {selectedParticipant && (
                <div className="participant-details">
                    <Typography variant="h6">{selectedParticipant.name} {selectedParticipant.surnames}</Typography>
                    <Typography>Email: {selectedParticipant.email}</Typography>
                    <Typography>Teléfono: {selectedParticipant.phone}</Typography>
                    <Button variant="contained" onClick={handleGetDetails}>
                        Ver detalles
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Participant;
