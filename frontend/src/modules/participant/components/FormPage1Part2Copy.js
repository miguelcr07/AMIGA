import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Form.css';
import { useSelector } from 'react-redux';
import * as selectors from '../../app/selectors';

const FormPage1Part2 = ({ formData, setFormData}) => {

    const provinces = useSelector(selectors.getProvinces);
    const municipalities = useSelector(selectors.getMunicipalities);
    const countries = useSelector(selectors.getCountries);
    const housings = useSelector(selectors.getHousings);
    const maritalStatus = useSelector(selectors.getMaritalStatus);
    const cohabitation = useSelector(selectors.getCohabitations);

    const [selectedProvince, setSelectedProvince] = useState( null);
    const [selectedMunicipality, setSelectedMunicipality] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState( null);
    const [selectedHousing, setSelectedHousing] = useState(null);
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
    const [selectedCohabitation, setSelectedCohabitation] = useState(null);

    const [municipalityOptions, setMunicipalityOptions] = useState([]);
    const [selectedNationalities, setSelectedNationalities] = useState([]);
    const [isRegistered, setIsRegistered] = useState(formData.registered || false);

    const handleProvinceChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, province: value.id });
            setSelectedProvince(provinces.find((province) => province.id === value.id));
        } else {
            setFormData({ ...formData, province: null });
            setSelectedProvince(null);
        }
    };

    const handleMunicipalityChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, municipality: value.id });
            setSelectedMunicipality(municipalities.find((municipality) => municipality.id === value.id))
        } else {
            setFormData({ ...formData, municipality: null });
            setSelectedMunicipality(null);
        }
    };

    const handleCountryChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, country: value.id });
            setSelectedCountry(countries.find((m) => m.id === value.id))
        } else {
            setFormData({ ...formData, country: null });
            setSelectedCountry(null)
        }
    };

    const handleHousingChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, housing: value.id });
            setSelectedHousing(housings.find((m) => m.id === value.id));
        } else {
            setFormData({ ...formData, housing: null });
            setSelectedHousing(null)
        }
    };
    const handleCohabitationChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, cohabitation: value.id });
            setSelectedCohabitation(cohabitation.find((m) => m.id === value.id))
        } else {
            setFormData({ ...formData, cohabitation: null });
            setSelectedCohabitation(null)
        }
    };
    const handleMaritalStatusChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, maritalStatus: value.id });
            setSelectedMaritalStatus(maritalStatus.find((m) => m.id === value.id))
        } else {
            setFormData({ ...formData, maritalStatus: null });
            setSelectedMaritalStatus(null)
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.checked;
        setFormData({ ...formData, [e.target.name]: value });
        setIsRegistered(value);
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

        setFormData({ ...formData, province: selectedProvince ? selectedProvince.id : null });
        // eslint-disable-next-line
    }, [selectedProvince, setFormData, municipalities]);

    useEffect(() => {
        if (formData.nationalities && formData.nationalities.length > 0) {
            const selected = formData.nationalities.map((countryId) =>
                countries.find((country) => country.id === countryId)
            );
            setSelectedNationalities(selected);
        }
    }, [formData.nationalities, countries, setSelectedNationalities]);

    useEffect(() => {
        setSelectedProvince(provinces.find((province) => province.id === formData.province) );
        setSelectedMunicipality(municipalities.find((municipality) => municipality.id === formData.municipality));
        setSelectedCountry(countries.find((m) => m.id === formData.country));
        setSelectedHousing(housings.find((m) => m.id === formData.housing));
        setSelectedMaritalStatus(maritalStatus.find((m) => m.id === formData.maritalStatus));
        setSelectedCohabitation(cohabitation.find((m) => m.id === formData.cohabitation));
    }, [provinces,municipalities ,countries ,housings,maritalStatus,cohabitation])

    return(
        <div>
            <div className="row-container">
                <Autocomplete
                    className="item"
                    options={provinces}
                    getOptionLabel={(option) => option.name}
                    value={selectedProvince}
                    onChange={handleProvinceChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Provincia" placeholder="Provincia" />
                    )}
                />
                <Autocomplete
                    className="item"
                    options={municipalityOptions}
                    getOptionLabel={(option) => option.name}
                    value={selectedMunicipality}
                    onChange={handleMunicipalityChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Municipio" placeholder="Municipio" />
                    )}
                    disabled={!selectedProvince}
                />
            </div>
            <div className="row-container">
                <TextField
                    className="item"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    label="Domicilio"
                    placeholder="Domicilio"
                />

                <TextField
                    className="item"
                    name="postalAddress"
                    value={formData.postalAddress}
                    onChange={handleChange}
                    label="Código Postal"
                    placeholder="Código Postal"
                />


                <TextField className="item"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           label="Teléfono/s"
                           placeholder="Teléfono"
                />
            </div>
            <div className="row-container">
                <Autocomplete
                    className="item"
                    options={countries}
                    getOptionLabel={(option) => option.name}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    renderInput={(params) => (
                        <TextField {...params} label="País de origen" placeholder="País de origen" />
                    )}
                />

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
            <div className="row-container">
                <FormControlLabel
                    control={
                        <Checkbox
                            name="registered"
                            checked={isRegistered}
                            onChange={handleCheckboxChange}
                        />
                    }
                    label="Empadronado"
                />
                <TextField
                    disabled={!isRegistered}
                    className="item"
                    type="date"
                    name="dateRegister"
                    value={formData.dateRegister}
                    onChange={handleChange}
                    label="Fecha de Empadronamiento"
                    placeholder="Fecha de Empadronamiento"
                    InputLabelProps={{ shrink: true }}
                />

                <TextField
                    className="item"
                    type={"number"}
                    name="numberRegistered"
                    value={formData.numberRegistered}
                    onChange={handleChange}
                    label="Número de personas empadronadas"
                    placeholder="Número de personas empadronadas"
                />
            </div>
            <div className="row-container">
                <Autocomplete
                    className="item"
                    options={housings}
                    getOptionLabel={(option) => option.name}
                    value={selectedHousing}
                    onChange={handleHousingChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Vivienda" placeholder="Seleccionar vivienda" />
                    )}
                />
                <Autocomplete
                    className="item"
                    options={maritalStatus}
                    getOptionLabel={(option) => option.name}
                    value={selectedMaritalStatus}
                    onChange={handleMaritalStatusChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Estado civil" placeholder="Seleccionar estado civil" />
                    )}
                />
                <Autocomplete
                    className="item"
                    options={cohabitation}
                    getOptionLabel={(option) => option.name}
                    value={selectedCohabitation}
                    onChange={handleCohabitationChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Tipo de convivencia" placeholder="Tipo de convivencia" />
                    )}
                />
            </div>
        </div>
    );

}
export default FormPage1Part2;