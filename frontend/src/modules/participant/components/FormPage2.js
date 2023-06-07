import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import * as selectors from '../../app/selectors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './Form.css';
import Autocomplete from "@mui/material/Autocomplete";

const FormPage2 = ({ formData, setFormData, nextPage, previousPage }) => {
    const studies = useSelector(selectors.getStudies);
    const employment = useSelector(selectors.getEmployments);
    const languages = useSelector(selectors.getLanguages);

    const selectedStudies = studies.find((study) => study.id === formData.studies);
    const selectedEmployment = employment.find((employment) => employment.id === formData.employment);
    const [homologados, setHomologados] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [hasDrivingLicense, setHasDrivingLicense] = useState(formData.drivingLicence || false);
    const [isValidSpain, setIsValidSpain] = useState(formData.valid || false);
    const [hasVehicle, setHasVehicle] = useState(formData.vehicle || false);
    const [isSEPERegistered, setIsSEPERegistered] = useState(formData.sepe || false);
    const [unemploymentDuration, setUnemploymentDuration] = useState(formData.monthsSepe || '');
    const [benefit, setBenefit] = useState(formData.benefit || 'NO');
    const [specialBenefit, setSpecialBenefit] = useState(formData.SpecialBenefit || '');
    const [dateBenefit, setDateBenefit] = useState(formData.dateBenefit || '');

    const handleBenefitChange = (event) => {
        const value = event.target.value;
        setBenefit(value);
        setFormData({ ...formData, benefit: value });
    };

    const handleSpecialBenefitChange = (event) => {
        const value = event.target.value;
        setSpecialBenefit(value);
        setFormData({ ...formData, SpecialBenefit: value });
    };

    const handleDateBenefitChange = (event) => {
        const value = event.target.value;
        setDateBenefit(value);
        setFormData({ ...formData, dateBenefit: value });
    };
    const handleDrivingLicenseChange = (event) => {
        const value = event.target.value === 'true';
        setHasDrivingLicense(value);
        setFormData({ ...formData, drivingLicence: value });
    };

    const handleValidSpainChange = (event) => {
        const value = event.target.value === 'true';
        setIsValidSpain(value);
        setFormData({ ...formData, valid: value });
    };

    const handleHasVehicleChange = (event) => {
        const value = event.target.value === 'true';
        setHasVehicle(value);
        setFormData({ ...formData, vehicle: value });
    };

    const handleSEPERegisteredChange = (event) => {
        const value = event.target.value === 'true';
        setIsSEPERegistered(value);
        setFormData({ ...formData, sepe: value });
    };

    const handleUnemploymentDurationChange = (event) => {
        const value = event.target.value;
        setUnemploymentDuration(value);
        setFormData({ ...formData, monthsSepe: value });
    };

    const handleStudiesChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, studies: value.id });
        } else {
            setFormData({ ...formData, studies: null });
        }
    };

    const handleEmploymentChange = (event, value) => {
        if (value) {
            setFormData({ ...formData, employment: value.id });
        } else {
            setFormData({ ...formData, employment: null });
        }
    };

    const handleLanguagesChange = (event, value) => {
        const selectedLanguages = value.map((program) => program.id);
        setSelectedLanguages(value);
        setFormData({ ...formData, languages: selectedLanguages });
    };


    const updateFormData = () => {
        const updatedFormData = {
            ...formData,
            homologados
        };
        setFormData(updatedFormData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePreviousPage = () => {
        updateFormData();
        previousPage();
    };

    const handleNextPage = () => {
        updateFormData();
        nextPage();
    };

    useEffect(() => {
        if (formData.languages && formData.languages.length > 0) {
            const selected = formData.languages.map((languageId) =>
                languages.find((language) => language.id === languageId)
            );
            setSelectedLanguages(selected);
        }
    }, [formData.languages, languages, setSelectedLanguages]);

    return (
        <div>
            <h1>Experiencia Laboral</h1>
            <div className="row-container">
                <Autocomplete
                    className="item"
                    options={studies}
                    getOptionLabel={(study) => study.name}
                    value={selectedStudies}
                    onChange={handleStudiesChange}
                    renderInput={(params) => <TextField {...params} label="Seleccionar estudios" />}
                />

            <FormControl
                className="item">
                <InputLabel id="homo-label">Titulación homologada</InputLabel>
                <Select
                    labelId="homo-label"
                    label="Titulación homologada"
                    value={homologados}
                    onChange={(e) => {setHomologados(e.target.value)}}
                >
                    <MenuItem value="SI">Sí</MenuItem>
                    <MenuItem value="NO">No</MenuItem>
                    <MenuItem value="EN TRAMITE">En trámite</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div className="row-container">
                <Autocomplete
                    className="item"
                    multiple
                    options={languages}
                    getOptionLabel={(language) => language.name}
                    value={selectedLanguages}
                    onChange={handleLanguagesChange}
                    renderInput={(params) => <TextField {...params} label="Seleccionar idiomas" />}
                />

            <TextField
                className="item"
                name="demandedStudies"
                label="Formación demandada"
                value={formData.demandedStudies}
                onChange={handleChange}
            />
            </div>
            <div className="row-container">
                <Autocomplete
                    className="item"
                    options={employment}
                    getOptionLabel={(employment) => employment.name}
                    value={selectedEmployment}
                    onChange={handleEmploymentChange}
                    renderInput={(params) => <TextField {...params} label="Situación laboral" />}
                />

            <TextField
                className="item"
                name="qualification"
                label="Cualificación profesional"
                value={formData.qualification}
                onChange={handleChange}
            />
            </div>
            <div className="row-container">
            <TextField
                className="item"
                name="profExpOrigin"
                label="Experiencia profesional en país de origen"
                value={formData.profExpOrigin}
                onChange={handleChange}
            />
            </div>
            <div className="row-container">
            <TextField
                className="item"
                name="profExpSpain"
                label="Experiencia profesional en España"
                value={formData.profExpSpain}
                onChange={handleChange}
            />
            </div>
            <div className="row-container">
            <TextField
                className="item"
                name="skills"
                label="Habilidades y limitaciones"
                value={formData.skills}
                onChange={handleChange}
            />
            </div>
            <div className="row-container">
            <TextField
                className="item"
                name="AvailableHours"
                label="Horario disponible"
                value={formData.availableHours}
                onChange={handleChange}
            />
            </div>
            <div className="row-container">
                <FormControl className="item">
                    <InputLabel id="driving-lavel">Permiso de conducir</InputLabel>
                    <Select
                        labelId="driving-lavel"
                        label="Permiso de conducir"
                        value={hasDrivingLicense}
                        onChange={handleDrivingLicenseChange}
                    >
                        <MenuItem value={'false'}>No</MenuItem>
                        <MenuItem value={'true'}>Sí</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="item">
                    <InputLabel id="valid-label">Válido en España</InputLabel>
                    <Select
                        labelId="valid-label"
                        label="Válido en España"
                        value={isValidSpain}
                        onChange={handleValidSpainChange}
                    >
                        <MenuItem value={'false'}>No</MenuItem>
                        <MenuItem value={'true'}>Sí</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="row-container">

                <FormControl className="item">
                    <InputLabel id="Vehículo">Vehículo</InputLabel>
                    <Select
                        labelId="Vehículo"
                        label="Vehículo"
                        value={hasVehicle}
                        onChange={handleHasVehicleChange}
                    >
                        <MenuItem value={'false'}>No</MenuItem>
                        <MenuItem value={'true'}>Sí</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="item">
                    <InputLabel id="sepe-label">Inscrito a SEPE</InputLabel>
                    <Select
                        labelId="sepe-label"
                        label="Inscrito a SEPE"
                        value={isSEPERegistered}
                        onChange={handleSEPERegisteredChange}
                    >
                        <MenuItem value={'false'}>No</MenuItem>
                        <MenuItem value={'true'}>Sí</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    className="item"
                    name="unemploymentDuration"
                    label="Duración del desempleo"
                    value={unemploymentDuration}
                    type="number"
                    onChange={handleUnemploymentDurationChange}
                    disabled={!isSEPERegistered}
                />

            </div>
            <div className="row-container">
                <FormControl className="item">
                    <InputLabel id="benefit-label">Tipo de prestación</InputLabel>
                    <Select
                        labelId="benefit-label"
                        label="Tipo de prestación"
                        value={benefit}
                        onChange={handleBenefitChange}
                    >
                        <MenuItem value="CONTRIBUTIVA">Contributiva</MenuItem>
                        <MenuItem value="SUBSIDIO_FAMILIAR">Subsidio familiar</MenuItem>
                        <MenuItem value="SUBSIDIO_RETORNADO">Subsidio retornado</MenuItem>
                        <MenuItem value="IMV">IMV</MenuItem>
                        <MenuItem value="RAI">RAI</MenuItem>
                        <MenuItem value="RISGA">RISGA</MenuItem>
                        <MenuItem value="OTRA">Otra</MenuItem>
                        <MenuItem value="NO">No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="row-container">

                    <TextField
                        className="item"
                        name="specialBenefit"
                        label="Otra prestación"
                        value={specialBenefit}
                        onChange={handleSpecialBenefitChange}
                        disabled={benefit !== 'OTRA'}
                    />

                    <TextField
                        className="item"
                        name="dateBenefit"
                        label="Fecha de prestación"
                        placeholder="Fecha de prestación"
                        InputLabelProps={{ shrink: true }}
                        value={dateBenefit}
                        type="date"
                        onChange={handleDateBenefitChange}
                        disabled={benefit === 'NO'}
                    />


            </div>
            <div className="center">
                <Button variant="contained" onClick={handlePreviousPage}>Anterior</Button>
                <div className="bigSpace"></div>
                <Button variant="contained" onClick={handleNextPage}>Siguiente</Button>
            </div>
        </div>
    );
};

export default FormPage2;
