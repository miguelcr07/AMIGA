import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import './Confirm.css';
import {useDispatch, useSelector} from "react-redux";
import ParticipantPdf from "./ParticipantPdf";
import Typography from "@mui/material/Typography";
import * as selectors from "../../app/selectors";
import * as userSelector from "../selectors"
import * as actions from "../actions"
import './Participant.css'
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router-dom";

const ParticipantDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [year, setYear] = useState();
    const [data, setData] = useState({
        factors: '',
        municipalities: '',
        nationalities: '',
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

    const user = useSelector(userSelector.getParticipantData);
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

    const handleYearChange = (event, value) => {
        setYear(value);
        dispatch(actions.findParticipant(user.id, value));
    }

    const handleEdit = () => {
        navigate('/participant/edit');
    }
    useEffect(() => {
        if (user?.exclusionFactors.length > 0 && exclusionFactors) {
            const exclusionFactorNames = exclusionFactors
                .filter(factor => user.exclusionFactors.includes(factor.id))
                .map(factor => factor.name);

            const exclusionFactorString = exclusionFactorNames.join(", ");
            setData(prevData => ({...prevData, factors: exclusionFactorString}));
        }
        if (user?.languages.length > 0 && languages) {
            const languageNames = languages
                .filter(m => user.languages.includes(m.id))
                .map(x => x.name);

            const languageNamesString = languageNames.join(", ");
            setData(prevData => ({...prevData, languages: languageNamesString}));
        }
        if (user?.programs.length > 0 && programs) {
            const programNames = programs
                .filter(m => user.programs.includes(m.id))
                .map(x => x.name);

            const programNamesString = programNames.join(", ");
            setData(prevData => ({...prevData, programs: programNamesString}));
        }
        if (user?.nationalities.length > 0 && countries) {
            const nationalitiesNames = countries
                .filter(m => user.nationalities.includes(m.id))
                .map(x => x.name);

            const nationalitiesNamesString = nationalitiesNames.join(", ");
            setData(prevData => ({...prevData, nationalities: nationalitiesNamesString}));
        }
        if (user?.municipality && municipalities) {
            const municipalityObject = municipalities.find(m => m.id === user.municipality);

            if (municipalityObject) {
                const municipalityString = municipalityObject.name;
                setData(prevData => ({...prevData, municipalities: municipalityString}));
            }
        }
        if (user?.housing && housings) {
            const housingsObject = housings.find(m => m.id === user.housing);

            if (housingsObject) {
                const housingsString = housingsObject.name;
                setData(prevData => ({...prevData, housings: housingsString}));
            }
        }
        if (user?.maritalStatus && maritalStatus) {
            const maritalStatusObject = maritalStatus.find(m => m.id === user.maritalStatus);

            if (maritalStatusObject) {
                const maritalStatusString = maritalStatusObject.name;
                setData(prevData => ({...prevData, maritalStatus: maritalStatusString}));
            }
        }
        if (user?.cohabitation && cohabitation) {
            const cohabitationObject = cohabitation.find(m => m.id === user.cohabitation);

            if (cohabitationObject) {
                const cohabitationString = cohabitationObject.name;
                setData(prevData => ({...prevData, cohabitation: cohabitationString}));
            }
        }
        if (user?.studies && studies) {
            const studiesObject = studies.find(m => m.id === user.studies);

            if (studiesObject) {
                const studiesString = studiesObject.name;
                setData(prevData => ({...prevData, studies: studiesString}));
            }
        }
        if (user?.employment && employment) {
            const employmentObject = employment.find(m => m.id === user.employment);

            if (employmentObject) {
                const employmentString = employmentObject.name;
                setData(prevData => ({...prevData, employment: employmentString}));
            }
        }
        if (user?.demand && demands) {
            const demandObject = demands.find(m => m.id === user.demand);

            if (demandObject) {
                const demandString = demandObject.name;
                setData(prevData => ({...prevData, demands: demandString}));
            }
        }
        if (user?.country && countries) {
            const countryObject = countries.find(m => m.id === user.country);

            if (countryObject) {
                const countryString = countryObject.name;
                setData(prevData => ({...prevData, countries: countryString}));
            }
        }
        if (user?.province && provinces) {
            const provinceObject = provinces.find(m => m.id === user.province);

            if (provinceObject) {
                const provinceString = provinceObject.name;
                setData(prevData => ({...prevData, province: provinceString}));
            }
        }
        if (user?.kids.length > 0) {
            const children = user.kids.map(function (kid) {
                const dates = kid.birthDate.split("-");
                const formatedDate = dates.reverse().join("/");
                return formatedDate + ' ' + kid.sex;
            });
            setYear(user.date.getFullYear().toString);
            if (children) {
                const childrenString = children.join(", ");
                setData(prevData => ({...prevData, kids: childrenString}));
            }
        }



    }, [user, municipalities, provinces, countries, housings,maritalStatus,cohabitation,studies,employment,languages,demands,programs,exclusionFactors]);

    if (!user) return null

    return (
        <div>
            <div className="header-details">
                <Typography variant="h6" align="center">
                    Datos {user.name + ' ' + user.surnames}
                </Typography>
                <div className="space"></div>
                <Autocomplete
                    className="item"
                    options={user.yearList}
                    value={year}
                    onChange={handleYearChange}
                    renderInput={(params) => <TextField {...params} label="Seleccionar año" />}
                />
            </div>
            <br/>
            <PDFDownloadLink
                document={<ParticipantPdf formData={user} selectors={data}/>}
                fileName={user.name + user.surnames.replace(/\s+/g, '')}
            >
                <Button variant="contained" color="primary" size="large">Descargar PDF</Button>
            </PDFDownloadLink>
            <div className="space"></div>
            <Button variant="contained" color="primary" size="large" onClick={handleEdit}>Editar informe</Button>
            <br/>
            <br/>

            <PDFViewer style={{width: "100%", height: "90vh"}}>
                <ParticipantPdf formData={user} selectors={data}/>
            </PDFViewer>


        </div>
    );
};

export default ParticipantDetails;
