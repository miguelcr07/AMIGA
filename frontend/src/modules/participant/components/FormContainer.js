import React, { useState } from 'react';
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import FormPage1 from "./FormPage1";

const FormContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        surnames: '',
        dni: '',
        pas: '',
        nie: '',
        birthdate: '',
        sex: '',
        address: '',
        municipality: null,
        postalAddress: '',
        province: null,
        phone: '',
        email: '',
        datePi: null,
        interviewPi: null,
        kids: [],
        country: '',
        date: null,
        returned: false,
        nationalities: [],
        situation: '',
        studies: null,
        languages: [],
        approved: false,
        demandedStudies: '',
        registered: false,
        dateRegister: null,
        numberRegistered: null,
        cohabitation: null,
        housing: null,
        exclusionFactors: [],
        socialWorker: '',
        healthCoverage: '',
        disability: '',
        unemployedHousehold: false,
        oneAdultHousehold: false,
        dependants: false,
        employment: null,
        qualification: '',
        profExpOrigin: '',
        profExpSpain: '',
        skills: '',
        AvailableHours: '',
        drivingLicence: false,
        valid: false,
        vehicle: false,
        sepe: false,
        monthsSepe: null,
        benefit: '',
        dateBenefit: null,
        SpecialBenefit: '',
        demand: null,
        programs: [],
        derivation: '',
    });

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <FormPage1
                        formData={formData}
                        setFormData={setFormData}
                        nextPage={nextPage}
                    />
                );
            case 2:
                return (
                    <FormPage2
                        formData={formData}
                        setFormData={setFormData}
                        nextPage={nextPage}
                        previousPage={previousPage}
                    />
                );
            case 3:
                return (
                    <FormPage3
                        formData={formData}
                        setFormData={setFormData}
                        previousPage={previousPage}
                    />
                );
            default:
                return null;
        }
    };

    return <div>{renderPage()}</div>;
};

export default FormContainer;
