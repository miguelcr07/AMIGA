package es.udc.paproject.backend.model.services;

import es.udc.paproject.backend.model.daos.*;
import es.udc.paproject.backend.model.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class SelectorServiceImpl implements SelectorService{

    @Autowired
    private CountryDao countryDao;
    @Autowired
    private ProvinceDao provinceDao;
    @Autowired
    private MunicipalityDao municipalityDao;
    @Autowired
    private LanguageDao languageDao;
    @Autowired
    private EmploymentDao employmentDao;
    @Autowired
    private StudiesDao studiesDao;
    @Autowired
    private MaritalStatusDao maritalStatusDao;
    @Autowired
    private HousingDao housingDao;
    @Autowired
    private CohabitationDao cohabitationDao;
    @Autowired
    private ExclusionFactorDao exclusionFactorDao;
    @Autowired
    private ProgramDao programDao;
    @Autowired
    private DemandDao demandDao;

    @Override
    public List<Country> getCountries() {
        return StreamSupport.stream(countryDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Province> getProvinces() {
        return StreamSupport.stream(provinceDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Municipality> getMunicipalities() {
        return StreamSupport.stream(municipalityDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Language> getLanguages() {
        return StreamSupport.stream(languageDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Employment> getEmploymentSituations() {
        return StreamSupport.stream(employmentDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Studies> getStudies() {
        return StreamSupport.stream(studiesDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<MaritalStatus> getMaritalStatus() {
        return StreamSupport.stream(maritalStatusDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Housing> getHousings() {
        return StreamSupport.stream(housingDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Cohabitation> getCohabitation() {
        return StreamSupport.stream(cohabitationDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<ExclusionFactor> getExclusionFactors() {
        return StreamSupport.stream(exclusionFactorDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Program> getPrograms() {
        return StreamSupport.stream(programDao.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public List<Demand> getDemands() {
        return StreamSupport.stream(demandDao.findAll().spliterator(), false).collect(Collectors.toList());
    }
}
