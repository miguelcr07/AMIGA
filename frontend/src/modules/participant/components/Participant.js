import { useState } from 'react';
import * as React from 'react';
import { Button, FormControl, Box, MenuItem, Select, InputLabel, Autocomplete, TextField } from '@mui/material';

function Participant() {
    const [searchType, setSearchType] = useState('DNI');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddParticipantClick = () => {
        // TODO: implement adding a new participant
    };

    const users = [
        {dni: '543234', pas: '1111111', nie: 'asdfgdasdfg'},
        {dni: '540987', pas: '22222222', nie: 'asdfuiop'},
        {dni: '534345', pas: '333333333', nie: 'asoiuytgbn'},
        {dni: '0987654', pas: '4444444', nie: 'hgfdsa'},
    ];
    return (
        <div>
            <div>
                <Button variant="contained" onClick={handleAddParticipantClick}>Nuevo participante</Button>
                <br/>
                <br/>
                <br/>
                <Box sx={{ minWidth: '40%' }}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searchType}
                            onChange={handleSearchTypeChange}
                        >
                            <MenuItem value={'DNI'}>DNI</MenuItem>
                            <MenuItem value={'NIE'}>NIE</MenuItem>
                            <MenuItem value={'PAS'}>PAS</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={users}
                    sx={{ width: 300 }}
                    onChange={handleSearchTermChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <button>Search</button>
            </div>

        </div>
    );
}

export default Participant;