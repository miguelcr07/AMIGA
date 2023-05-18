import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import './Form.css';
import Typography from "@mui/material/Typography";
import { useSelector } from 'react-redux';
import * as selectors from '../../app/selectors';

const FormPage1 = ({ formData, setFormData, nextPage }) => {
    const provinces = useSelector(selectors.getProvinces);
    const municipalities = useSelector(selectors.getMunicipalities);
    const countries = useSelector(selectors.getCountries);
    const [municipalityOptions, setMunicipalityOptions] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedNationalities, setSelectedNationalities] = useState([]);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.checked ? e.target.value : '';
        setFormData({ ...formData, [e.target.name]: value });
    };
    const handleNationalitiesChange = (event, values) => {
        const nationalityIds = values.map((value) => value.id);
        setFormData({ ...formData, nationalities: nationalityIds });
        setSelectedNationalities(values);
    };

    useEffect(() => {
        const filteredMunicipalities = selectedProvince
            ? municipalities.filter((municipality) => municipality.province.id === selectedProvince.id)
            : [];
        setMunicipalityOptions(filteredMunicipalities);
        setFormData({ ...formData, province: selectedProvince ? selectedProvince.id : '', municipality: '' });
    }, [selectedProvince]);

    useEffect(() => {
        const areRequiredFieldsFilled =
            formData.name !== '' &&
            formData.surnames !== '' &&
            formData.birthdate !== '' &&
            formData.email !== '' &&
            formData.province !== '' &&
            formData.municipality !== '' &&
            formData.address !== '' &&
            formData.postalCode !== '' &&
            formData.phone !== '';

        setIsNextButtonDisabled(!areRequiredFieldsFilled);
    }, [formData]);

    return (
        <div>
            <h1>Datos personales</h1>
            <div className="row-container">
                <TextField
                    className="item"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Nombre"
                    placeholder="Nombre"
                />
                <div className="space"></div>
                <TextField
                    className="item2"
                    name="surnames"
                    value={formData.surnames}
                    onChange={handleChange}
                    label="Apellidos"
                    placeholder="Apellidos"
                />
            </div>
            <div className="row-container">
                <TextField
                    className="item"
                    name="dni"
                    value={formData.dni}
                    onChange={handleChange}
                    label="DNI"
                    placeholder="DNI"
                />
                <div className="space"></div>
                <TextField
                    className="item"
                    name="pas"
                    value={formData.pas}
                    onChange={handleChange}
                    label="PAS"
                    placeholder="PAS"
                />
                <div className="space"></div>
                <TextField
                    className="item"
                    name="nie"
                    value={formData.nie}
                    onChange={handleChange}
                    label="NIE"
                    placeholder="NIE"
                />
            </div>
            <div className="row-container">
                <TextField
                    className="birthdate"
                    type="date"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    label="Fecha de Nacimiento"
                    placeholder="Fecha de Nacimiento"
                    InputLabelProps={{ shrink: true }}
                />
                <div className="bigSpace"></div>

                <div className="sexo">
                    <Typography>Sexo:   </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="sex"
                                value="M"
                                checked={formData.sex === 'M'}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="Masculino"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="sex"
                                value="H"
                                checked={formData.sex === 'H'}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="Femenino"
                    />
                </div>

                <div className="bigSpace"></div>
                <TextField
                    className="item"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="Email"
                    placeholder="Email"
                />
            </div>
            <div className="row-container">
                <Autocomplete
                    className="item"
                    options={provinces}
                    getOptionLabel={(option) => option.name}
                    value={selectedProvince}
                    onChange={(event, newValue) => setSelectedProvince(newValue)}
                    renderInput={(params) => (
                        <TextField {...params} label="Provincia" placeholder="Provincia" />
                    )}
                />
                <div className="space"></div>
                <Autocomplete
                    className="item"
                    options={municipalityOptions}
                    getOptionLabel={(option) => option.name}
                    value={municipalityOptions.find((municipality) => municipality.id === formData.municipality) || null}
                    onChange={(event, newValue) => setFormData({ ...formData, municipality: newValue ? newValue.id : '' })}
                    renderInput={(params) => (
                        <TextField {...params} label="Municipio" placeholder="Municipio" />
                    )}
                    disabled={!selectedProvince}
                />
                <div className="space"></div>
                <TextField
                    className="item"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    label="Domicilio"
                    placeholder="Domicilio"
                />
                <div className="space"></div>
                <TextField
                    className="item"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    label="Código Postal"
                    placeholder="Código Postal"
                />
            </div>
            <div className="row-container">
                <TextField className="item"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    label="Teléfono/s"
                    placeholder="Teléfono"
                />
                <div className="space"></div>
                <Autocomplete
                    className="item"
                    options={countries}
                    getOptionLabel={(option) => option.name}
                    value={selectedCountry}
                    onChange={(event, newValue) => setSelectedCountry(newValue)}
                    renderInput={(params) => (
                        <TextField {...params} label="País de origen" placeholder="País de origen" />
                    )}
                />
                <div className="space"></div>
                <Autocomplete
                    className="item2"
                    multiple
                    options={countries}
                    getOptionLabel={(option) => option.name}
                    value={selectedNationalities}
                    onChange={handleNationalitiesChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Nacionalidades" placeholder="Nacionalidades" />
                    )}
                />
            </div>
            <div className="center">
                <Button variant="contained" onClick={nextPage} disabled={isNextButtonDisabled}>
                    Siguiente
                </Button>
            </div>
        </div>
    );
};

export default FormPage1;
