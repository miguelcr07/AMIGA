import {useDispatch, useSelector} from 'react-redux';
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Participant.css';

import * as selectors from '../selectors';
import * as actions from '../actions';
import {useNavigate} from "react-router-dom";

function Participant() {
    const participantList = useSelector(selectors.getParticipantList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedAttribute, setSelectedAttribute] = useState('dni');
    const [selectedParticipant, setSelectedParticipant] = useState(null);

    const handleAttributeChange = (event) => {
        setSelectedAttribute(event.target.value);
    };

    const handleParticipantChange = (event, value) => {
        setSelectedParticipant(value);
    };

    const attributeOptions = ['dni', 'nie', 'pas'];

    const handleGetDetails = () => {
        dispatch(actions.findParticipant(
            selectedParticipant.id,
            null,
            ));
        navigate('/participant/details')
    }

    let filteredParticipantList = null;

    if(participantList !== null) {
        filteredParticipantList = participantList.filter(
            (participant) => participant[selectedAttribute] !== null
        );
    }

    if(filteredParticipantList === null)
        return null;

    return (
        <div>
            <div className="button">
            <Button variant="contained" onClick={() => {
                navigate('/participant/form');
            }}>
                Registrar participante
            </Button>
            </div>
            <div className="participant-container">
                <FormControl className="item" style={{ position: 'relative' }}>
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

                <div className="item2">
                    <Autocomplete
                        id="participant-autocomplete"
                        options={filteredParticipantList}
                        getOptionLabel={(participant) => participant[selectedAttribute]}
                        renderInput={(params) => <TextField {...params} label="Documento participante" />}
                        value={selectedParticipant}
                        onChange={handleParticipantChange}
                    />
                </div>
            </div>

            <div className="participant-row">
                {selectedAttribute && (
                    <Autocomplete
                        id="name-surname-autocomplete"
                        options={filteredParticipantList}
                        getOptionLabel={(participant) => `${participant.name} ${participant.surnames}`}
                        renderInput={(params) => <TextField {...params} label="Buscar por nombre y apellidos" />}
                        value={selectedParticipant}
                        onChange={handleParticipantChange}
                    />
                )}
            </div>


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
