package es.udc.paproject.backend.model.mapper;

import es.udc.paproject.backend.model.entities.*;
import es.udc.paproject.backend.rest.dtos.KidDto;
import es.udc.paproject.backend.rest.dtos.ParticipantDto;
import es.udc.paproject.backend.rest.dtos.ParticipantSummaryDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring")
public interface ParticipantMapper {
    ParticipantSummaryDto toParticipantSummaryDto(Participant participant);

    List<ParticipantSummaryDto> toParticipantSummaryDtoList(List<Participant> participant);

    @Mapping(source = "gender", target = "sex", qualifiedByName = "toSex")
    @Mapping(source = "country.id", target = "country")
    @Mapping(source = "participant.id", target = "idParticipant")
    @Mapping(source = "annualData.id", target = "idAnnualData")
    @Mapping(source = "nationalities", target = "nationalities", qualifiedByName = "toNationalities")
    @Mapping(source = "municipality.id", target = "municipality")
    @Mapping(source = "province.id", target = "province")
    @Mapping(source = "situation", target = "situation", qualifiedByName = "toSituation")
    @Mapping(source = "studies.id", target = "studies")
    @Mapping(source = "languages", target = "languages", qualifiedByName = "toLanguages")
    @Mapping(source = "cohabitation.id", target = "cohabitation")
    @Mapping(source = "housing.id", target = "housing")
    @Mapping(source = "exclusionFactors", target = "exclusionFactors", qualifiedByName = "toExclusionFactors")
    @Mapping(source = "disability", target = "disability", qualifiedByName = "toDisability")
    @Mapping(source = "employment.id", target = "employment")
    @Mapping(source = "benefit", target = "benefit", qualifiedByName = "toBenefit")
    @Mapping(source = "demand.id", target = "demand")
    @Mapping(source = "programs", target = "programs", qualifiedByName = "toPrograms")
    ParticipantDto toParticipantDto(Participant participant, AnnualData annualData);

    @Mapping(source = "gender", target = "sex", qualifiedByName = "toSex")
    KidDto toKidDto(Kid kid);

    List<KidDto> toKidDtoList(List<Kid> kid);

    @Named(value = "toSex")
    static String toSex (Gender gender){
        return gender.getValue();
    }
    @Named(value = "toSituation")
    static String toSituation (AdministrativeSituation situation){
        return situation.toString();
    }
    @Named(value = "toBenefit")
    static String toBenefit (Benefit benefit){
        return benefit.toString();
    }
    @Named(value = "toDisability")
    static String toDisability (Disability disability){
        return disability.toString();
    }
    @Named(value = "toNationalities")
    static List<Long> toNationalities (Set<Country> nationalities){
        List<Long> n = new ArrayList<>();
        for(Country country : nationalities) {
            n.add(country.getId());
        }
        return n;
    }
    @Named(value = "toLanguages")
    static List<Long> toLanguages (Set<Language> languages){
        List<Long> n = new ArrayList<>();
        for(Language language : languages) {
            n.add(language.getId());
        }
        return n;
    }
    @Named(value = "toExclusionFactors")
    static List<Long> toExclusionFactors (Set<ExclusionFactor> exclusionFactors){
        List<Long> n = new ArrayList<>();
        for(ExclusionFactor exclusionFactor : exclusionFactors) {
            n.add(exclusionFactor.getId());
        }
        return n;
    }
    @Named(value = "toPrograms")
    static List<Long> toPrograms (Set<Program> programs){
        List<Long> n = new ArrayList<>();
        for(Program program : programs) {
            n.add(program.getId());
        }
        return n;
    }

}
