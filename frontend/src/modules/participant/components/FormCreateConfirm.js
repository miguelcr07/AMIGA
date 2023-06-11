import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, AppBar, Toolbar } from "@mui/material";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import './Confirm.css';
import * as actions from "../actions";
import {useDispatch, useSelector} from "react-redux";
import ParticipantPdf from "./ParticipantPdf";
import Typography from "@mui/material/Typography";
import * as selectors from "../../app/selectors";

const FormCreateConfirm = ({ formData, previousPage }) => {
    const [open, setOpen] = useState(false);
    const [verPDF, setVerPDF] = useState(false);
    const [data, setData] = useState({
        factors: '',
        municipalities: '',
        countries: '',
        housings: '',
        maritalStatus: '',
        cohabitation: '',
        studies: '',
        employment: '',
        languages: '',
        demands: '',
        programs: '',
        province: '',
        kids: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const municipalities = useSelector(selectors.getMunicipalities);
    const provinces = useSelector(selectors.getProvinces);
    const countries = useSelector(selectors.getCountries);
    const housings = useSelector(selectors.getHousings);
    const maritalStatus = useSelector(selectors.getMaritalStatus);
    const cohabitation = useSelector(selectors.getCohabitations);
    const studies = useSelector(selectors.getStudies);
    const employment = useSelector(selectors.getEmployments);
    const languages = useSelector(selectors.getLanguages);
    const demands = useSelector(selectors.getDemands);
    const programs = useSelector(selectors.getPrograms);
    const exclusionFactors = useSelector(selectors.getExclusions);


    useEffect(() => {
        if (formData.exclusionFactors.length > 0) {
            const exclusionFactorNames = exclusionFactors
                .filter(factor => formData.exclusionFactors.includes(factor.id))
                .map(factor => factor.name);

            const exclusionFactorString = exclusionFactorNames.join(", ");
            setData(prevData => ({ ...prevData, factors: exclusionFactorString }));
        }
        if (formData.languages.length > 0) {
            const languageNames = languages
                .filter(m => formData.languages.includes(m.id))
                .map(x => x.name);

            const languageNamesString = languageNames.join(", ");
            setData(prevData => ({ ...prevData, languages: languageNamesString }));
        }
        if (formData.programs.length > 0) {
            const programNames = programs
                .filter(m => formData.program.includes(m.id))
                .map(x => x.name);

            const programNamesString = programNames.join(", ");
            setData(prevData => ({ ...prevData, programs: programNamesString }));
        }
        if (formData.nationalities.length > 0) {
            const nationalitiesNames = countries
                .filter(m => formData.nationalities.includes(m.id))
                .map(x => x.name);

            const nationalitiesNamesString = nationalitiesNames.join(", ");
            setData(prevData => ({ ...prevData, programs: nationalitiesNamesString }));
        }
        if (formData.municipality) {
            const municipalityObject = municipalities.find(m => m.id === formData.municipality);

            if (municipalityObject) {
                const municipalityString = municipalityObject.name;
                setData(prevData => ({ ...prevData, municipalities: municipalityString }));
            }
        }
        if (formData.housing) {
            const housingsObject = housings.find(m => m.id === formData.housing);

            if (housingsObject) {
                const housingsString = housingsObject.name;
                setData(prevData => ({ ...prevData, housings: housingsString }));
            }
        }
        if (formData.maritalStatus) {
            const maritalStatusObject = maritalStatus.find(m => m.id === formData.maritalStatus);

            if (maritalStatusObject) {
                const maritalStatusString = maritalStatusObject.name;
                setData(prevData => ({ ...prevData, maritalStatus: maritalStatusString }));
            }
        }
        if (formData.cohabitation) {
            const cohabitationObject = cohabitation.find(m => m.id === formData.cohabitation);

            if (cohabitationObject) {
                const cohabitationString = cohabitationObject.name;
                setData(prevData => ({ ...prevData, cohabitation: cohabitationString }));
            }
        }
        if (formData.studies) {
            const studiesObject = studies.find(m => m.id === formData.studies);

            if (studiesObject) {
                const studiesString = studiesObject.name;
                setData(prevData => ({ ...prevData, studies: studiesString }));
            }
        }
        if (formData.employment) {
            const employmentObject = employment.find(m => m.id === formData.employment);

            if (employmentObject) {
                const employmentString = employmentObject.name;
                setData(prevData => ({ ...prevData, employment: employmentString }));
            }
        }
        if (formData.demand) {
            const demandObject = demands.find(m => m.id === formData.demand);

            if (demandObject) {
                const demandString = demandObject.name;
                setData(prevData => ({ ...prevData, demands: demandString }));
            }
        }
        if (formData.country) {
            const countryObject = countries.find(m => m.id === formData.country);

            if (countryObject) {
                const countryString = countryObject.name;
                setData(prevData => ({ ...prevData, countries: countryString }));
            }
        }
        if (formData.province) {
            const provinceObject = provinces.find(m => m.id === formData.province);

            if (provinceObject) {
                const provinceString = provinceObject.name;
                setData(prevData => ({ ...prevData, province: provinceString }));
            }
        }
        if (formData.kids.length > 0) {
            const children = formData.kids.map(function (kid) {
                const dates = kid.birthDate.split("-");
                const formatedDate = dates.reverse().join("/");
                return formatedDate + ' ' + kid.sex;
            });

            if (children) {
                const childrenString = children.join(", ");
                setData(prevData => ({...prevData, kids: childrenString}));
            }
        }

    }, []);

    const handleSubmit = () => {
        dispatch(actions.createParticipant(formData, setOpen(true), null));
    }

    const handleCloseModal = () => {
        setOpen(false);
        navigate('/');
    }

    return (
        <div>
            <Typography variant="h6" align="center">
                Descargar el documento a firmar y guardar datos
            </Typography>
            <br/>
            <AppBar position="static">
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <Button variant="contained" onClick={previousPage}>Anterior</Button>
                    <Button variant="contained" color="primary" size="large" onClick={() => setVerPDF(true)}>
                        Ver PDF
                    </Button>
                    <PDFDownloadLink
                        document={<ParticipantPdf formData={formData} selectors={data}/>}
                        fileName={formData.name + formData.surnames.replace(/\s+/g, '')}
                    >
                        <Button variant="contained" color="primary" size="large">Descargar PDF</Button>
                    </PDFDownloadLink>
                    <Button variant="contained" color="primary" size="large" onClick={() => handleSubmit()}>
                        Guardar
                    </Button>
                </Toolbar>
            </AppBar>
            <br/>
            {verPDF ? (
                <PDFViewer style={{ width: "100%", height: "90vh" }}>
                    <ParticipantPdf formData={formData} selectors={data}/>
                </PDFViewer>
            ) : null}
            <Dialog open={open} onClose={handleCloseModal}>
                <DialogTitle>Datos guardados correctamente</DialogTitle>
                <DialogContent>
                    {/* Aquí puedes mostrar los detalles de los datos guardados */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal}>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormCreateConfirm;
